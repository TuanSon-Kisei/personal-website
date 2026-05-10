import { animate, splitText, stagger } from "animejs";

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

function initIntroAnimation() {
  splitText(".home-intro", {
    lines: { wrap: "clip" },
  }).addEffect(({ lines }) =>
    animate(lines, {
      y: [{ to: ["100%", "-10%"] }],
      duration: prefersReducedMotion ? 300 : 750,
      ease: prefersReducedMotion ? "linear" : "out(3)",
      delay: prefersReducedMotion ? 0 : stagger(250),
      loop: false,
    }),
  );
}

initIntroAnimation();
