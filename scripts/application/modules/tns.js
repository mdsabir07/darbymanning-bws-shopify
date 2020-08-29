import { tns } from "tiny-slider/src/tiny-slider";
export default function () {

  const init = () => {
    tns({
      container: ".hero-slider",
      items: 1,
      gutter: 0,
      slideBy: "page",
      autoplay: false,
      loop: true,
      controlsContainer: "#hero-controls",

    });

    tns({
      container: ".slider-4",
      items: 4,
      gutter: 10,
      slideBy: "page",
      autoplay: false,
      loop: true,
      controlsContainer: ".slider-4-controls",
      nav: false,
      responsive: {
        350: {
          items: 1,
        },
        700: {
          items: 3,
        },
        1000: {
          items: 4
        }
      },
    });

  };
  const destroy = () => {};
  const reinit = () => {};
  return { destroy, reinit, init };
}