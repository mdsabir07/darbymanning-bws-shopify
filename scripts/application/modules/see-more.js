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

$(document).ready(function() {
    var carLmt = 280;

    $(".section-header__content").each(function() {
        if ($(this).find(".firstSec").length)
            return;

        var allstr = $(this).text();
        if (allstr.length > carLmt) {
            var firstSet = allstr.substring(0, carLmt);
            var secdHalf = allstr.substring(carLmt, allstr.length);
            var strtoadd = firstSet + "<span class='content__hide'>" + secdHalf + "</span>";
            $(this).html(strtoadd);
        }

    });
    $(document).on("click", ".js-see-more", function() {
        $(this).prev(".section-header__content").toggleClass("showmorecontent");
    });
});