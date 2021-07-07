import { getUrlWithVariant, ProductForm } from "@shopify/theme-product-form";

// This function is called whenever the user changes the value of an option input
function onOptionChange(event) {
  const variant = event.dataset.variant;

  if (variant === null) {
    // The combination of selected options does not have a matching variant
  } else if (variant && !variant.available) {
    // The combination of selected options has a matching variant but it is
    // currently unavailable
  } else if (variant && variant.available) {
    // The combination of selected options has a matching variant and it is
    // available
  }
  if (!variant) return;
  const url = getUrlWithVariant(window.location.href, variant.id);
  window.history.replaceState({ path: url }, "", url);
}

function filterThumbnailImages(el) {
  const swatchEl = el.closest(".swatch__element");
  const optionName = swatchEl ? swatchEl.dataset.value : el.dataset.alt;

  function hideOrShowThumbnail(item) {
    const addOrRemove = item.dataset.alt === optionName ? "remove" : "add";
    item.classList[addOrRemove]("invisible");
  }

  const thumbnailList = document.querySelector(".c-product__thumbnailList");
  const hasThumbnail = !!thumbnailList.querySelector(
    `.c-product__thumbnailItem[data-alt="${optionName}"]`
  );
  const hasSwatch = !!document.querySelector(
    `.swatch__element[data-value="${optionName}"]`
  );

  if (!hasThumbnail || !hasSwatch) return;

  document.querySelector(".c-product__formLabel").innerText = optionName;

  thumbnailList
    .querySelectorAll(".c-product__thumbnailItem")
    .forEach(hideOrShowThumbnail);

  const firstItem = document.querySelector(
    `.c-product__thumbnailItem[data-alt="${optionName}"]`
  );
  document

    .querySelectorAll("[data-media-id]")
    .forEach((el) => el.classList.add("invisible"));

  const id = firstItem
    .querySelector(".c-product__thumbnailLink")
    .getAttribute("data-thumbnail-id");

  document
    .querySelector(`[data-media-id="${id}"]`)
    .classList.remove("invisible");
}

document.addEventListener("DOMContentLoaded", async () => {
  const formElement = document.querySelector("[data-product-form]");
  const productHandle = formElement ? formElement.dataset.productHandle : null;

  const currentImage = document.querySelector(".c-product__media");
  filterThumbnailImages(currentImage);

  if (productHandle) {
    fetch(`/products/${productHandle}.js`)
      .then((response) => {
        return response.json();
      })
      .then((productJSON) => {
        const productForm = new ProductForm(formElement, productJSON, {
          onOptionChange,
        });
      });
  }

  Array.from(document.getElementsByClassName("js-swatch-item")).forEach((el) =>
    el.addEventListener("click", () => {
      const swatch = el.closest(".js-swatch");
      Array.from(
        swatch.getElementsByClassName("js-swatch-item")
      ).forEach((el) => el.classList.remove("active"));
      el.classList.add("active");
      const optionIndex = swatch.getAttribute("data-option-index");

      filterThumbnailImages(el);

      el
        .closest("form")
        .querySelector(`select#Option${parseInt(optionIndex) + 1}`).value =
        el.value;
    })
  );

  const options = Array.from(
    document.getElementsByClassName("js-product-option")
  );

  options.forEach((el) =>
    el.addEventListener("change", () => {
      const product = window.meta.product;
      const variantName = `${product.name} ${options
        .map((o) => o.value)
        .join(" / ")}`;
      const variant = window.meta.product.variants.find(
        (v) => v.name === variantName
      );
    })
  );

  const loadProductRecommendationsIntoSection = async function () {
    const SELECTOR = ".js-productRecommendations";
    const productRecommendationsSection = document.querySelector(SELECTOR);
    if (!productRecommendationsSection) return;

    const { productId, baseUrl, limit } = productRecommendationsSection.dataset;
    // Build request URL
    const params = [
      "section_id=" + "product-recommendations",
      "product_id=" + productId,
      "limit=" + limit,
    ];
    const requestUrl = `${baseUrl}?${params.join("&")}`;
    // Create request and submit it using Fetch
    const req = await fetch(requestUrl);
    const html = await req.text();

    productRecommendationsSection.classList.add("has-loaded");
    const container = document.createElement("div");
    container.innerHTML = html;

    productRecommendationsSection.innerHTML = container.querySelector(
      SELECTOR
    ).innerHTML;
    document.dispatchEvent(new Event("product-recommendations:load"));
  };

  // Listen for changes done in the Theme Editor
  document.addEventListener("shopify:section:load", async function (event) {
    if (event.detail.sectionId === "product-recommendations") {
      await loadProductRecommendationsIntoSection();
    }
  });

  // Fetching the recommendations on page load
  await loadProductRecommendationsIntoSection();
});
