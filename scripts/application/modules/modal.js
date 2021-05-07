document.addEventListener("modal.close:before", () =>
  history.replaceState(null, null, " ")
);
