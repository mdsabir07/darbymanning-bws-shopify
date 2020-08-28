import { tns } from "tiny-slider/src/tiny-slider"


const slider = tns({
    container: '.hero-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true
});

export default slider;