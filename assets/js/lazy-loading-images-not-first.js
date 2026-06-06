const otherListItems = document.querySelectorAll("li:not(:first-child)");
const firstItem = document.querySelector("li:first-child");

firstItem.querySelectorAll("img").forEach((img) => {
  img.loading = "eager";
  img.fetchPriority = "high";
});

otherListItems.forEach((item) => {
  const images = item.querySelectorAll("img");
  images.forEach((img) => {
    img.loading = "lazy";
    img.fetchPriority = "low";
  });
});
