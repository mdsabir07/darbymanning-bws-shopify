import { tns } from 'tiny-slider/src/tiny-slider';

const init = () => {
    Array.from(document.querySelectorAll('.js-slider:not(.tns-slider)')).forEach(
        (container) => {
            const controls = container.parentNode.querySelector(
                '.js-slider-controls'
            );
            const dots = controls ? controls.querySelector('.js-slider-dots') : null;
            const responsive = container.dataset.responsive;
            
            const loop = container.dataset.loop === undefined || Math.abs(container.dataset.loop) ? true : false

            const slider = tns({
                container: container,
                items: container.dataset.items || 1,
                gutter: container.dataset.gutter || 0,
                controlsContainer: controls,
                controls: !!controls,
                responsive: responsive ? JSON.parse(responsive) : null,
                mouseDrag: true,
                loop
            });

            slider.events.on('transitionEnd', (info) => {
                if (dots) {
                    const active = dots.querySelector('.is-active');

                    active && active.classList.remove('is-active');

                    const dot = Array.from(dots.children)[
                        info.displayIndex - 1
                    ];

                    dot && dot.classList.add('is-active');
                }
            });
            
            if(dots) {
	            
	            dots.addEventListener('click', e => e.preventDefault())
            
	            Array.from(dots.children).forEach(el => el.addEventListener('click', (e) => {
		            
		            e.preventDefault()
		            
		            const index = parseInt(e.currentTarget.dataset.goto)-1
		            
		            slider.goTo(index)
		            
				}))
			
			}
            
            if(controls && !loop) {
            
	            controls.querySelector('[data-controls="next"]').addEventListener('click', (e) => {
		            
		            const info = slider.getInfo()
		            
		            if(info.displayIndex === info.slideCount) {
			            
			            e.preventDefault()
			            
			            slider.goTo(0)
			            
		            }
		            
	            })
	            
			}
            
        }
    );

}

document.addEventListener('shopify:section:load', init)

document.addEventListener('DOMContentLoaded', init);
