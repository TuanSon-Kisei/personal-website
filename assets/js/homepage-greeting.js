function showTimeZoneGreeting() {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const now = new Date().toLocaleString("en-US", { timeZone: timezone });
  const hour = new Date(now).getHours();

  let greeting, icon;
  if (hour < 12) {
    greeting = "Good morning, how was your sleep?";
    icon = "ri-bread-fill";
  } else if (hour < 18) {
    greeting = "Good afternoon, have you had your lunch yet?";
    icon = "ri-sun-fill";
  } else {
    greeting = "Good evening, it's time to take a rest";
    icon = "ri-moon-fill";
  }

  document.getElementById("greeting").innerHTML =
    ` ${greeting} <i class="${icon}"></i>`;
}

showTimeZoneGreeting();
