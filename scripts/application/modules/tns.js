import { tns } from "tiny-slider/src/tiny-slider";
export default function () {

  const init = () => {
	  
	Array.from(document.querySelectorAll('.js-slider')).forEach(el => {
		
		const controls = el.parentNode.querySelector('.js-slider-controls')
		const dots = controls.querySelector('.js-slider-dots')
		
		const slider = tns({
	      container: el,
	      items: el.getAttribute('data-items') || 1,
	      gutter: el.getAttribute('data-gutter') || 0,
	      slideBy: "page",
	      controlsContainer: controls,
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
  
  Array.from(document.querySelectorAll('.home-slide-1')).forEach(el => {
		
		const controls = el.parentNode.querySelector('.home-slide-1-controls')		
		
		const slider = tns({
	      container: el,
	      items: el.getAttribute('data-items') || 4,
	      gutter: el.getAttribute('data-gutter') || 10,
        slideBy: "page",
        autoplay: false,
        loop: true,
        controlsContainer: controls,
        nav: false,
        responsive: {
          350: {
            items: 2,
          },
          700: {
            items: 3,
          },
          1000: {
            items: 4
          }
        },
	    });
	    	    		
	})
    
    tns({
      container: ".home-slide-2",
      items: 4,
      gutter: 10,
      slideBy: "page",
      autoplay: false,
      loop: true,
      controlsContainer: ".home-slide-2-controls",
      nav: false,
      responsive: {
        350: {
          items: 2,
        },
        700: {
          items: 3,
        },
        1000: {
          items: 4
        }
      },
    });
    
    tns({
      container: ".home-slide-3",
      items: 4,
      gutter: 10,
      slideBy: "page",
      autoplay: false,
      loop: true,
      controlsContainer: ".home-slide-3-controls",
      nav: false,
      responsive: {
        350: {
          items: 2,
        },
        700: {
          items: 3,
        },
        1000: {
          items: 4
        }
      },
    });

    tns({
      container: ".collection-list-slide",
      items: 12,
      gutter: 10,
      slideBy: "page",
      autoplay: false,
      loop: true,
      controlsContainer: ".collection-list-controls",
      nav: false,
      responsive: {
        350: {
          items: 3,
        },
        700: {
          items: 6,
        },
        1000: {
          items: 12
        }
      },
    });
    

  };
  const destroy = () => {};
  const reinit = () => {};
  return { destroy, reinit, init };
}