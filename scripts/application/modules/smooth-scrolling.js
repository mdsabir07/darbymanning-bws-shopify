document.addEventListener('DOMContentLoaded', () => {
	if(document.querySelector('.product-main__button')) {
		document.querySelector('.product-main__button').addEventListener('click', function(e) {
			e.preventDefault();
			var selection = document.querySelector('#footprint') !== null;
			if(selection) {
				document.querySelector('#footprint').scrollIntoView({ behavior: 'smooth' });
			}
		});
	}
	
	
});
