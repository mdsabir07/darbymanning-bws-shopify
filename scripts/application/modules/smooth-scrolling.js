window.addEventListener('load', function() {
	document.querySelector('.product-main__button').addEventListener('click', function(e) {
		e.preventDefault();
		var selection = document.querySelector('#footprint') !== null;
		if(selection) {
			document.querySelector('#footprint').scrollIntoView({ behavior: 'smooth' });
		}
	});
	
	/* Product Zoom */
	CloudZoom.quickStart();
});
