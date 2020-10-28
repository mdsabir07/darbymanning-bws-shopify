document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-thumbnail-id]').forEach((el) =>
        el.addEventListener('click', (e) => {
            e.preventDefault();

            document
                .querySelectorAll('[data-media-id]')
                .forEach((el) => el.classList.add('invisible'));
                
            const id = e.currentTarget.getAttribute(
                        'data-thumbnail-id'
                    )

            document
                .querySelector(
                    `[data-media-id="${id}"]`
                )
                .classList.remove('invisible');
        })
    );
    
  
});

window.addEventListener('load', () => {
	
	  /* Product Zoom */
	CloudZoom.quickStart();
	
})
