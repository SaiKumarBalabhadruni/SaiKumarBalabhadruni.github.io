const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i * 45, 260)}ms`;
  observer.observe(el);
});

const topbar = document.querySelector(".topbar");
let lastY = 0;
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  if (y > 12) topbar.style.boxShadow = "0 12px 40px rgba(0,0,0,.22)";
  else topbar.style.boxShadow = "none";
  lastY = y;
}, { passive: true });

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
