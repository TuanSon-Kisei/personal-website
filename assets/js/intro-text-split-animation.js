import { animate, splitText, stagger } from "animejs";
import swup from "./page-transition";

function initIntroAnimation() {
  const { words } = splitText(".text-intro", {
    words: { wrap: "clip" },
  });

  animate(words, {
    y: [{ to: ["100%", "0%"] }],
    duration: 400,
    ease: "out(3)",
    delay: stagger(100),
    loop: false,
  });
}

initIntroAnimation();
swup.hooks.on("page:view", initIntroAnimation);
