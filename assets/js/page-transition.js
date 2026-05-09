import gsap from "gsap";
import Swup from "swup";
import SwupJsPlugin from "@swup/js-plugin";

const swup = new Swup({
  plugins: [
    new SwupJsPlugin({
      animations: [
        {
          from: "(.*)",
          to: "(.*)",
          out(done) {
            gsap.to("#swup", {
              opacity: 0,
              y: -20,
              duration: 0.2,
              ease: "power1.inOut",
              onComplete: done,
            });
          },
          in(done) {
            gsap.fromTo(
              "#swup",
              {
                opacity: 0,
                y: 30,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.2,
                ease: "power1.inOut",
                onComplete: done,
              },
            );
          },
        },
      ],
    }),
  ],
});

swup.hooks.on("page:view", () => {
  window.scrollTo(0, 0);
});

export default swup;
