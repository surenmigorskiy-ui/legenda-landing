const menuBtn = document.getElementById("menuBtn");
const drawer = document.getElementById("drawer");
const desktopQuery = window.matchMedia("(min-width: 768px)");

if (menuBtn && drawer) {
  const setExpanded = (open) => {
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  };

  menuBtn.addEventListener("click", () => {
    if (desktopQuery.matches) return;
    const open = drawer.classList.toggle("is-open");
    setExpanded(open);
  });

  drawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (desktopQuery.matches) return;
      drawer.classList.remove("is-open");
      setExpanded(false);
    });
  });

  desktopQuery.addEventListener("change", () => {
    if (desktopQuery.matches) {
      drawer.classList.remove("is-open");
      setExpanded(false);
    }
  });
}
