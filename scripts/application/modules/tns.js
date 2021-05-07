import { tns } from "tiny-slider/src/tiny-slider";

const createStyleTag = (css) => {
  let head = document.head || document.getElementsByTagName("head")[0],
    style = document.createElement("style");

  head.appendChild(style);

  style.type = "text/css";
  if (style.styleSheet) {
    // This is required for IE8 and below.
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  return style;
};

const init = () => {
  let styleTag = createStyleTag("");

  Array.from(document.querySelectorAll(".js-slider:not(.tns-slider)")).forEach(
    (container) => {
      const controls = container.parentNode.querySelector(
        ".js-slider-controls"
      );
      const dots = controls ? controls.querySelector(".js-slider-dots") : null;
      const responsive = container.dataset.responsive;

      const loop =
        container.dataset.loop === undefined || Math.abs(container.dataset.loop)
          ? true
          : false;

      const slider = tns({
        container: container,
        items: container.dataset.items || 1,
        gutter: container.dataset.gutter || 0,
        controlsContainer: controls,
        controls: !!controls,
        responsive: responsive ? JSON.parse(responsive) : null,
        mouseDrag: true,
        loop,
      });

      slider.events.on("transitionEnd", (info) => {
        if (dots) {
          const active = dots.querySelector(".is-active");

          active && active.classList.remove("is-active");

          const dot = Array.from(dots.children)[info.displayIndex - 1];

          dot && dot.classList.add("is-active");
        }
        if (controls) {
          const prev = controls.querySelector(".js-slider-prev");
          if (prev && !loop) {
            if (info.index > 0) {
              prev.classList.add("visible");
            } else {
              prev.classList.remove("visible");
            }
          }
          const next = controls.querySelector(".js-slider-next");
          if (next && !loop) {
            if (info.index + info.items >= info.slideCount) {
              next.classList.add("invisible");
            } else {
              next.classList.remove("invisible");
            }
          }
        }
      });

      slider.events.on("indexChanged", (info) => {
        if (
          window.outerWidth >= 1024 &&
          container.querySelector("[data-size]")
        ) {
          styleTag.innerText = `#${container.getAttribute("id")} { transform: ${
            container.style.transform
          } !important; }`;
          setTimeout(() => {
            let totalSize = 0;
            Array.from(container.querySelectorAll("[data-size]")).every(
              (slide) => {
                if (slide === info.slideItems[info.index]) {
                  return false;
                }
                totalSize += parseInt(slide.dataset.size);
                return true;
              }
            );
            const perc =
              (totalSize * container.dataset.basis) /
              (container.childElementCount / container.dataset.items);
            const css = `translate3d(-${perc}%, 0px, 0px)`;
            container.style.transform = css;
            container.style.webkitTransform = css;
            styleTag.innerText = "";
          }, 1);
        }
      });

      if (dots) {
        dots.addEventListener("click", (e) => e.preventDefault());

        Array.from(dots.children).forEach((el) =>
          el.addEventListener("click", (e) => {
            e.preventDefault();

            const index = parseInt(e.currentTarget.dataset.goto) - 1;

            slider.goTo(index);
          })
        );
      }

      if (controls && !loop) {
        controls
          .querySelector('[data-controls="next"]')
          .addEventListener("click", (e) => {
            const info = slider.getInfo();

            if (info.displayIndex === info.slideCount) {
              e.preventDefault();

              slider.goTo(0);
            }
          });
      }

      let calculateWidths = () => {
        Array.from(container.querySelectorAll("[data-size]")).forEach(
          (slide) => {
            const size = slide.getAttribute("data-size");

            const perc =
              (size * container.dataset.basis) /
              (container.childElementCount / container.dataset.items);

            if (window.outerWidth >= 1024) {
              slide.style.width = perc + "%";
            } else {
              delete slide.style.width;
            }
          }
        );
      };

      window.addEventListener("resize", calculateWidths);

      calculateWidths();
    }
  );
};

document.addEventListener("shopify:section:load", init);
document.addEventListener("product-recommendations:load", init);

document.addEventListener("DOMContentLoaded", init);
