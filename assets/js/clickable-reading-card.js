document.querySelectorAll(".reading-card").forEach((card) => {
  const readingLink = card.querySelector(".reading-card_link");
  if (!readingLink) return;
  card.setAttribute("role", "link");
  card.setAttribute("tabindex", "0");

  const readingLinkNavigate = () =>
    window.open(readingLink.href, "_blank", "noopener noreferrer");

  card.addEventListener("click", readingLinkNavigate);

  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      readingLinkNavigate();
    }
  });
});
