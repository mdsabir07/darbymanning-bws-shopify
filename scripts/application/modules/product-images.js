document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-thumbnail-id]').forEach((el) =>
        el.addEventListener('click', (e) => {
            e.preventDefault();

            document
                .querySelectorAll('[data-media-id]')
                .forEach((el) => el.classList.add('u-hide'));

            document
                .querySelector(
                    `[data-media-id=${e.currentTarget.getAttribute(
                        'data-thumbnail-id'
                    )}]`
                )
                .classList.remove('u-hide');
        })
    );
});
