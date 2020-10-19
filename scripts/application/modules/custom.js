document.addEventListener('DOMContentLoaded', () => {

	document.getElementById('ToggleMenu').addEventListener('click', () => {
		[].map.call(document.querySelectorAll('.nav__menu'), function(el) {
	    el.classList.toggle('toggled');
	  });
	})
})