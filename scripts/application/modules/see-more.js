document.addEventListener('DOMContentLoaded', () => {
    /* Toggle Content */
    const toggleContent = () => {
        const collectionContent = document.querySelector(
            '.collection-header__more'
        );
        const buttonsMore = document.querySelectorAll('.text-seemore');

        collectionContent.classList.toggle('is-active');
        buttonsMore[0].classList.toggle('is-active');
        if (buttonsMore[0].innerHTML === 'See More') {
            buttonsMore[0].innerHTML = 'See Less';
        } else {
            buttonsMore[0].innerHTML = 'See More';
        }
    };

    const buttonsMore = document.querySelectorAll('.text-seemore');

    for (let i = 0; i < buttonsMore.length; i++) {
        buttonsMore[i].addEventListener('click', toggleContent);
    }
});
