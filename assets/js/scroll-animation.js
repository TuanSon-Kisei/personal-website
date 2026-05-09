import swup from "./page-transition";

function initScrollAnimation() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px",
    },
  );
  const projectItems = document.querySelectorAll(".projects-section li");
  projectItems.forEach((item) => {
    observer.observe(item);
  });
}
swup.hooks.on("enable", initScrollAnimation);
swup.hooks.on("content:replace", initScrollAnimation);
