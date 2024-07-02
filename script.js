function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


function updateTimeAndDay() {
  const timeElement = document.getElementById('time');
  const dayElement = document.getElementById('day');

  const now = new Date();
  const hours = String(now.getUTCHours()).padStart(2, '0');
  const minutes = String(now.getUTCMinutes()).padStart(2, '0');
  const seconds = String(now.getUTCSeconds()).padStart(2, '0');

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfWeek = days[now.getUTCDay()];

  timeElement.textContent = `${hours}:${minutes}:${seconds} UTC`;
  dayElement.textContent = dayOfWeek;
}

setInterval(updateTimeAndDay, 1000);
updateTimeAndDay(); // Initial call to display time immediately
