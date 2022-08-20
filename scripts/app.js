const clockImage = document.querySelector(".image-container>img");
const theButtons = document.querySelectorAll("button");
let currentTime = document.querySelector(".current-time");
const ringtone = new Audio("../material/ringtone/alarm_clock_5.mp3");

theButtons[0].addEventListener("click", () => addAnotherTime());
setInterval(() => showtheTime(), 1000);
