document.addEventListener('DOMContentLoaded', () => {
	
	document.querySelector('#SiteNav').classList.toggle('loaded');

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
		var button = el.querySelector('button[aria-expanded="false"]')


		button.onclick = function(event) {
			let menu = el.querySelector('.nav__dropdown'),
			arrow = button.querySelector('i.icon-arrow');
			console.log(menu)
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

document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('.collection-header__more').classList.toggle('loaded');
	
	/* Toggle Content */
	const toggleContent = () => {
		const collectionContent = document.querySelector('.collection-header__more');
		const buttonsMore = document.querySelectorAll('.text-seemore');
		
		collectionContent.classList.toggle('is-active');
		buttonsMore[0].classList.toggle('is-active');
		if (buttonsMore[0].innerHTML === "See More") {
	    buttonsMore[0].innerHTML = "See Less";
	  } else {
	    buttonsMore[0].innerHTML = "See More";
	  }
	};

	const buttonsMore = document.querySelectorAll('.text-seemore');

	for(let i = 0; i < buttonsMore.length; i++) {
		buttonsMore[i].addEventListener('click', toggleContent);
	}
});