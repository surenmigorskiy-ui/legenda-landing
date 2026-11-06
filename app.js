const menuBtn = document.getElementById("menuBtn");
const drawer = document.getElementById("drawer");

if (menuBtn && drawer) {
  menuBtn.addEventListener("click", () => {
    const open = drawer.hasAttribute("hidden") === false;
    if (open) drawer.setAttribute("hidden", "");
    else drawer.removeAttribute("hidden");
  });

  drawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => drawer.setAttribute("hidden", ""));
  });
}
