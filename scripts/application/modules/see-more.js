document.addEventListener('DOMContentLoaded', () => {
    Array.from(document.getElementsByClassName('js-see-more')).forEach((el) =>
        el.addEventListener('click', (e) => {
            e.preventDefault();
            el.previousElementSibling.classList.toggle('is-active');

            el.classList.toggle('is-active');

            if (el.innerHTML === 'See More') {
                el.innerHTML = 'See Less';
            } else {
                el.innerHTML = 'See More';
            }
        })
    );
});
