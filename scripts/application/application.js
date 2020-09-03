/*!---------------------------------------------------------------------------*\
    Project Name
    - Version:      1.0
    - Author:       YOUR NAME
    - Site:         http://YOUR_SITE
    - Copyright:    2019, YOUR COMPANY
    – License:      YOUR LICENSE
\*----------------------------------------------------------------------------*/
/* Imports */
import NeueKit from "@neuekit/neuekit/src/scripts/neuekit";
import * as util from "./modules/utilities";
import Slider from "./modules/tns.js";

/* Neue Kit */
const neuekit = new NeueKit();
window.neuekit = neuekit;

/* Project Code */
const slider = new Slider();
const init = () => {
  slider.init();
};

document.addEventListener("DOMContentLoaded", init);