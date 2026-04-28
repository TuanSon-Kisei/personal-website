const hamburger = document.getElementById("menu");
const navLinks = document.getElementById("nav-links");
const closeMenuBtn = document.querySelector(".close-menu-btn");

const openMenu = () => {
  navLinks.classList.add("active");
  hamburger.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
};

const closeMenu = () => {
  navLinks.classList.remove("active");
  hamburger.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "auto";
};

hamburger.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);

const links = document.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
