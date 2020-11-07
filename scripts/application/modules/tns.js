import { tns } from 'tiny-slider/src/tiny-slider';

document.addEventListener('DOMContentLoaded', () => {
    Array.from(document.getElementsByClassName('js-slider')).forEach(
        (container) => {
            const controls = container.parentNode.querySelector(
                '.js-slider-controls'
            );
            const dots = controls.querySelector('.js-slider-dots');
            const responsive = container.dataset.responsive;

            const slider = tns({
                container: container,
                items: container.dataset.items || 1,
                gutter: container.dataset.gutter || 0,
                slideBy: 'page',
                controlsContainer: controls,
                responsive: responsive ? JSON.parse(responsive) : null,
                mouseDrag: true,
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
        }
    );
});
