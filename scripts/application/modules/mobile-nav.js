document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("siteNav");
  const buttons = document.getElementsByClassName("js-nav-toggle");
  menu.classList.toggle("loaded");

  Array.from(buttons).forEach((el) =>
    el.addEventListener("click", () => {
      menu.classList.toggle("is-active");
      buttons[0].classList.toggle("is-active");
    })
  );

  Array.from(menu.getElementsByClassName("js-top-level-menu")).forEach((el) =>
    el.addEventListener("click", (event) => {
      let dropdown = el.parentElement.querySelector(".js-menu-dropdown"),
        arrow = el.querySelector("i");
      if (window.outerWidth < 1024) {
        event.preventDefault();
        if (!dropdown.classList.contains("show")) {
          dropdown.classList.add("show");
          dropdown.classList.remove("hide");
          arrow.classList.add("open");
          arrow.classList.remove("close");
        } else {
          dropdown.classList.remove("show");
          dropdown.classList.add("hide");
          arrow.classList.remove("open");
          arrow.classList.add("close");
        }
      }
    })
  );
});
