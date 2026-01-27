import swup from "./page-transition.js";

function initTableOfContents() {
  const tocLinks = document.querySelectorAll("#table-of-contents a");
  const headings = document.querySelectorAll("h1, h2, h3, h4");

  if (window.tocObserver) {
    window.tocObserver.disconnect();
  }

  window.tocObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        const tocLink = document.querySelector(
          `#table-of-contents a[href="#${id}"]`,
        );

        if (entry.isIntersecting) {
          tocLinks.forEach((link) => link.classList.remove("active"));

          if (tocLink) {
            tocLink.classList.add("active");
          }
        }
      });
    },
    {
      rootMargin: "-70px 0px -80% 0px",
      threshold: 0,
    },
  );

  headings.forEach((heading) => {
    if (heading.id) {
      window.tocObserver.observe(heading);
    }
  });
}

initTableOfContents();
swup.hooks.on("content:replace", () => {
  initTableOfContents();
});
