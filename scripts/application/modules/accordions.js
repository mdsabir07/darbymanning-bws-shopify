document.addEventListener("DOMContentLoaded", () => {
  const ACCORDIONS = document.querySelectorAll(".js-accordion-toggle");
  ACCORDIONS.forEach((el) =>
    el.addEventListener("click", (event) => {
      event.stopPropagation();
      const accordion = event.target.closest(".js-accordion-toggle");
      const accordionGroup = accordion.closest(".js-accordion");

      const content = accordionGroup.querySelector(accordion.hash);
      if (!content) return;

      event.preventDefault();

      if (content.classList.contains("is-active")) {
        content.classList.remove("is-active");
        accordion.classList.remove("is-active");
        return;
      }

      Array.from(
        accordionGroup.getElementsByClassName("is-active")
      ).forEach((el) => el.classList.remove("is-active"));
      content.classList.add("is-active");
      accordion.classList.add("is-active");
    })
  );
});
