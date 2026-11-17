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

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion && "IntersectionObserver" in window) {
  const motionNodes = document.querySelectorAll(".stat, .slide");
  const motionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        motionObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.05 }
  );

  motionNodes.forEach((node) => motionObserver.observe(node));
}
