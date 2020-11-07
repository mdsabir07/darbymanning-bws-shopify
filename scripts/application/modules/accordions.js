document.addEventListener('DOMContentLoaded', () => {
    const ACCORDIONS = document.querySelectorAll('.js-accordion-toggle');
    ACCORDIONS.forEach((el) =>
        el.addEventListener('click', (e) => {
            const acc = el.closest('.js-accordion');
            let content = acc.querySelector(e.target.hash);
            if (!content) return;
            e.preventDefault();
            if (content.classList.contains('is-active')) {
                content.classList.remove('is-active');
                return;
            }
            Array.from(acc.getElementsByClassName('is-active')).forEach((el) =>
                el.classList.remove('is-active')
            );
            content.classList.add('is-active');
        })
    );
});
