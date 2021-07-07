function boot() {
  // Grab sliders and iterate over them
  for (const $slider of document.querySelectorAll('.js-mp-slider')) {

    // Grab required elements
    const $slide = $slider.querySelector('.js-mp-slide')
    const $prev = $slider.parentElement.querySelector('.js-mp-prev')
    const $next = $slider.parentElement.querySelector('.js-mp-next')

    // Move fn
    const move = (left) => $slider.scrollBy({ top: 0, left, behavior: 'smooth' })

    // Events
    $prev.addEventListener('click', () => move(-Math.abs($slide.offsetWidth)))
    $next.addEventListener('click', () => move($slide.offsetWidth))
    $slider.addEventListener('scroll', () => {
      $prev.classList.toggle('mp-show', $slider.scrollLeft > 10)
      $next.classList.toggle('invisible', ($slider.scrollWidth - ($slider.scrollLeft + $slider.clientWidth)) < 10)
    })
  }
}

// Wait for things to load
document.addEventListener('DOMContentLoaded', boot)
document.addEventListener('product-recommendations:load', boot)
