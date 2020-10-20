document.addEventListener('DOMContentLoaded', () => {
	/* Toggle Menu Mobile */
	const toggleMenu = () => {
  const menu = document.querySelector('#SiteNav');
  const buttons = document.querySelectorAll('.nav__toggle, .nav__close');
  
  menu.classList.toggle('is-active');
  buttons[0].classList.toggle('is-active');  
	};

	const buttons = document.querySelectorAll('.nav__toggle, .nav__close');

	for(let i = 0; i < buttons.length; i++) {
	  buttons[i].addEventListener('click', toggleMenu);
	  console.log('cliked' + i);
	}
})


document.addEventListener('DOMContentLoaded', () => {
	// Dropdown Menu Mobile
	var dropdown = document.querySelectorAll('.site-nav--has-centered-dropdown');
	var dropdownArray = Array.prototype.slice.call(dropdown,0);
	dropdownArray.forEach(function(el){
		var button = el.querySelector('button[aria-expanded="false"]'),
				menu = el.querySelector('.nav__dropdown'),
				arrow = button.querySelector('i.icon-arrow');

		button.onclick = function(event) {
			if(!menu.hasClass('show')) {
				menu.classList.add('show');
				menu.classList.remove('hide');
				arrow.classList.add('open');
				arrow.classList.remove('close');
				event.preventDefault();
			}
			else {
				menu.classList.remove('show');
				menu.classList.add('hide');
				arrow.classList.remove('open');
				arrow.classList.add('close');
				event.preventDefault();
			}
		};
	})

	Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
	};
});