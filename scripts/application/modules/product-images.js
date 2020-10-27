document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-thumbnail-id]').forEach((el) =>
        el.addEventListener('click', (e) => {
            e.preventDefault();

            document
                .querySelectorAll('[data-media-id]')
                .forEach((el) => el.classList.add('invisible'));

            document
                .querySelector(
                    `[data-media-id=${e.currentTarget.getAttribute(
                        'data-thumbnail-id'
                    )}]`
                )
                .classList.remove('invisible');
        })
    );
    
  
});

window.addEventListener('load', () => {
	
	  /* Product Zoom */
	CloudZoom.quickStart();
	
})
