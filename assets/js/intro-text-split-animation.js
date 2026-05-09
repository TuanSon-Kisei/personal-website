import { animate, splitText, stagger } from "animejs";

function initIntroAnimation() {
  splitText(".home-intro", {
    lines: { wrap: "clip" },
  }).addEffect(({ lines }) =>
    animate(lines, {
      y: [{ to: ["100%", "-10%"] }],
      duration: 750,
      ease: "out(3)",
      delay: stagger(250),
      loop: false,
    }),
  );
}

initIntroAnimation();
