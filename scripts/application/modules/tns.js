import { tns } from "tiny-slider/src/tiny-slider";
export default function () {

  const init = () => {
    tns({
      container: ".hero-slider",
      items: 1,
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

    });

  };
  const destroy = () => {};
  const reinit = () => {};
  return { destroy, reinit, init };
}