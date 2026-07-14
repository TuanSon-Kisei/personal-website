function showTimeZoneGreeting() {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const now = new Date().toLocaleString("en-US", { timeZone: timezone });
  const hour = new Date(now).getHours();
  const greetingEl = document.getElementById("greeting");

  if (!greetingEl) return;

  let greeting, icon;
  if (hour < 12) {
    greeting = "Good morning";
    icon = "ri-bread-fill";
  } else if (hour < 18) {
    greeting = "Good afternoon";
    icon = "ri-sun-fill";
  } else {
    greeting = "Good evening";
    icon = "ri-moon-fill";
  }

  greetingEl.innerHTML = ` ${greeting} <i class="${icon}"></i>`;
}

showTimeZoneGreeting();
