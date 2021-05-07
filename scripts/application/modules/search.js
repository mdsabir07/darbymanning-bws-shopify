document.addEventListener("DOMContentLoaded", () => {
  Array.from(document.getElementsByClassName("js-search-icon")).forEach((el) =>
    el.addEventListener("click", (e) => {
      e.preventDefault();

      const overlay = document.getElementById("searchOverlay");

      overlay.classList.add("visible");
      overlay.classList.add("opaque");
    })
  );

  document.getElementById("searchClose").addEventListener("click", (e) => {
    e.preventDefault();

    const overlay = document.getElementById("searchOverlay");

    overlay.classList.remove("opaque");

    setTimeout(() => overlay.classList.remove("visible"), 500);
  });
});
