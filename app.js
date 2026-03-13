(() => {
  const page = document.body.dataset.page;
  if (!page) {
    return;
  }
  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.dataset.nav === page) {
      link.classList.add("is-active");
    }
  });
})();
