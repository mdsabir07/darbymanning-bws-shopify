document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector(".js-sort-and-tag");
  if (el) {
    el.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.currentTarget;
      const fields = form.elements;
      let path = form.dataset.collection;
      if (fields.tag.value) {
        path += "/" + fields.tag.value;
      }
      if (fields.sort_by.value) {
        path += "?sort_by=" + fields.sort_by.value;
      }
      window.location.href = "/collections/" + path;
    });
  }
});
