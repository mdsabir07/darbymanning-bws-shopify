import 'smoothscroll-polyfill';

document.addEventListener('DOMContentLoaded', () => {
    Array.from(document.getElementsByClassName('js-smooth-scroll')).forEach(
        (el) =>
            el.addEventListener('click', (e) => {
                e.preventDefault();
                document
                    .querySelector(el.getAttribute('href'))
                    .scrollIntoView({ behavior: 'smooth' });
            })
    );
});
