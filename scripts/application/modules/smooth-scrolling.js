document.addEventListener('DOMContentLoaded', () => {
	var selection = document.querySelector('#footprint') !== null;
	if(document.querySelector('.product-main__button')) {
		document.querySelector('.product-main__button').addEventListener('click', function(e) {
			e.preventDefault();
			if(selection) {
				document.querySelector('#footprint').scrollIntoView({ behavior: 'smooth' });
			}
		});
	}
	
	if(selection) {
		document.querySelector('.product-main__button').style.display = 'flex';
	}
	else {
		document.querySelector('.product-main__button').remove();
	}
});
