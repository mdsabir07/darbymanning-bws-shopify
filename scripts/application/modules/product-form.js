import { register } from '@shopify/theme-sections';
import * as product from '@shopify/theme-product';
import { getUrlWithVariant, ProductForm } from '@shopify/theme-product-form';

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
    window.history.replaceState({ path: url }, '', url);
}

document.addEventListener('DOMContentLoaded', () => {
    const formElement = document.querySelector('[data-product-form]');
    const productHandle = formElement
        ? formElement.dataset.productHandle
        : null;

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

    Array.from(document.getElementsByClassName('js-swatch-item')).forEach(
        (el) =>
            el.addEventListener('click', () => {
	            const swatch = el.closest('.js-swatch')
	            Array.from(swatch.getElementsByClassName('js-swatch-item')).forEach(el => el.classList.remove('active'))
	            el.classList.add('active')
                const optionIndex = swatch.getAttribute('data-option-index');

                el
                    .closest('form')
                    .querySelector(
                        `select#Option${parseInt(optionIndex) + 1}`
                    ).value = el.value;
            })
    );
    
    const options = Array.from(document.getElementsByClassName('js-product-option'))
    
    options.forEach((el) => el.addEventListener('change', () => {
	    
	   const product = window.meta.product
	   const variantName = `${product.name} ${options.map(o => o.value).join(' / ')}`
	   console.log(variantName)
	   const variant = window.meta.product.variants.find(v => v.name === variantName) 
	   
	   console.log(variant)
	    
    }))
    
    const loadProductRecommendationsIntoSection = function() {
	  // Look for an element with class 'product-recommendations'
	  const productRecommendationsSection = document.querySelector(".product-recommendations");
	  if (productRecommendationsSection === null) { return; }
	  // Read product id from data attribute
	  const productId = productRecommendationsSection.dataset.productId;
	  // Read base URL from data attribute
	  const baseUrl = productRecommendationsSection.dataset.baseUrl;
	  // Read limit from data attribute
	  const limit = productRecommendationsSection.dataset.limit;
	  // Build request URL
	  const requestUrl = baseUrl + "?section_id=product-recommendations&product_id=" + productId + "&limit=" + limit;
	  // Create request and submit it using Fetch
	  fetch(requestUrl).then(res => res.text()).then(html => {
		  let container = document.createElement("div")
		  container.innerHTML = html
	      productRecommendationsSection.parentElement.innerHTML = container.querySelector(".product-recommendations").innerHTML
	  })
	};

	// Listen for changes done in the Theme Editor
	document.addEventListener("shopify:section:load", function(event) {
	  if (event.detail.sectionId === "product-recommendations") {
	    loadProductRecommendationsIntoSection();
	  }
	});
	
	// Fetching the recommendations on page load
	loadProductRecommendationsIntoSection();
    
});
