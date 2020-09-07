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

// Listen for click on the document
document.addEventListener('click', function (event) {
  
  //Bail if our clicked element doesn't have the class
  if (!event.target.classList.contains('accordion__toggle')) return;
  
  // Get the target content
  var content = document.querySelector(event.target.hash);
  if (!content) return;
  
  // Prevent default link behavior
  event.preventDefault();
  
  // If the content is already expanded, collapse it and quit
  if (content.classList.contains('active')) {
    content.classList.remove('active');
    return;
  }
  
  // Get all open accordion content, loop through it, and close it
  var accordions = document.querySelectorAll('.accordion__content.active');
  for (var i = 0; i < accordions.length; i++) {
    accordions[i].classList.remove('active');
  }
  
  // Toggle our content
  content.classList.toggle('active');
});

/* Project Code */
const slider = new Slider();
const init = () => {
  slider.init();
};



document.addEventListener("DOMContentLoaded", init);