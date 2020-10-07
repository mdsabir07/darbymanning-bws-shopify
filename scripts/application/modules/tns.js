import { tns } from "tiny-slider/src/tiny-slider";
export default function () {

  const init = () => {
	  
	Array.from(document.querySelectorAll('.js-slider')).forEach(el => {
		
		const controls = el.parentNode.querySelector('.js-slider-controls')
		const dots = controls.querySelector('.js-slider-dots')
		const responsive = el.getAttribute('data-responsive')
		
		const slider = tns({
	      container: el,
	      items: el.getAttribute('data-items') || 1,
	      gutter: el.getAttribute('data-gutter') || 0,
	      slideBy: "page",
	      controlsContainer: controls,
	      responsive: responsive ? JSON.parse(responsive) : null
	    });
	    
	    slider.events.on('transitionEnd', (info) => {
		    
		    if(dots) {
			    
			    const active = dots.querySelector('.active')
			    
			    active && active.classList.remove('active')
			    
			    const dot = Array.from(dots.children)[info.displayIndex-1]
			    
			    dot && dot.classList.add('active')
			    
		    }
		    
	    });
		
  })
    

  };
  const destroy = () => {};
  const reinit = () => {};
  return { destroy, reinit, init };
}