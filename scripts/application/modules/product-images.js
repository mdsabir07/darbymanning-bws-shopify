document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-thumbnail-id]').forEach((el) =>
        el.addEventListener('click', (e) => {
            e.preventDefault();

            document
                .querySelectorAll('[data-media-id]')
                .forEach((el) => el.classList.add('invisible'));

            const id = e.currentTarget.getAttribute('data-thumbnail-id');

            document
                .querySelector(`[data-media-id="${id}"]`)
                .classList.remove('invisible');
        })
    );
    document.querySelectorAll('[data-gallery-direction]').forEach((el) =>
        el.addEventListener('click', (e) => {
            e.preventDefault();
            
            const selected = document
                .querySelector('[data-media-id]:not(.invisible)')
            
            document
                .querySelectorAll('[data-media-id]')
                .forEach((el) => el.classList.add('invisible'));
                
            const dir = e.currentTarget.getAttribute('data-gallery-direction');
            
            let newSelected = dir === 'prev' ? selected.previousElementSibling : selected.nextElementSibling
            
            newSelected = newSelected || ( dir === 'prev' ? selected.parentElement.lastElementChild : selected.parentElement.firstElementChild )
            
            newSelected.classList.remove('invisible')
            
		})
	);
});

window.addEventListener('load', () => {
    /* Product Zoom */
    CloudZoom.quickStart();
});
