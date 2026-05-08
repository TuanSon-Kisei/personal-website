import Swup from "swup";
import gsap from "gsap";

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

const swup = new Swup({
  animationSelector: false,
});

swup.hooks.replace("animation:out:await", async () => {
  await gsap.to("#swup", {
    opacity: 0,
    y: prefersReducedMotion ? 0 : -20,
    duration: prefersReducedMotion ? 0 : 0.4,
    ease: "power2.inOut",
  });
});

swup.hooks.replace("animation:in:await", async () => {
  await gsap.fromTo(
    "#swup",
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: prefersReducedMotion ? 0 : 0.4,
      ease: "power2.out",
    },
  );
});

export default swup;
