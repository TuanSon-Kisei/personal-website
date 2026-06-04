const darkModeToggle = document.getElementById("dark-mode-toggle");

function enableDarkMode() {
  document.body.setAttribute("data-theme", "dark");
  localStorage.setItem("theme", "dark");
}
function disableDarkMode() {
  document.body.removeAttribute("data-theme");
  localStorage.setItem("theme", "light");
}

function detectColorScheme() {
  let theme = "light";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  } else if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    theme = "dark";
  }

  theme === "dark" ? enableDarkMode() : disableDarkMode();
}

detectColorScheme();
if (darkModeToggle) {
  darkModeToggle.addEventListener("click", () => {
    localStorage.getItem("theme") === "light"
      ? enableDarkMode()
      : disableDarkMode();
  });
}
