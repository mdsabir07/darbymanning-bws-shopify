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
import Slider from "./modules/tns.js";
import formElement from "./modules/section.js";
import productHandle from "./modules/section.js";

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
  if (content.classList.contains('accordion__content--active')) {
    content.classList.remove('accordion__content--active');
    return;
  }
  
  // Get all open accordion content, loop through it, and close it
  var accordions = document.querySelectorAll('.accordion__content.accordion__content--active');
  for (var i = 0; i < accordions.length; i++) {
    accordions[i].classList.remove('accordion__content--active');
  }
  
  // Toggle our content
  content.classList.toggle('accordion__content--active');
});



/* Project Code */
const slider = new Slider();
const init = () => {
  slider.init();
};



document.addEventListener("DOMContentLoaded", init);