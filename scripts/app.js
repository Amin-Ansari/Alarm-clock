const clockImage = document.querySelector(".image-container>img");
const theButton = document.querySelector("button");
let currentTime = document.querySelector(".current-time");
const selectElements = document.querySelectorAll("select");
const ringtone = new Audio("../material/ringtone/alarm_clock_5.mp3");

theButton.addEventListener("click", () => setTheTime());
setInterval(() => showtheTime(), 1000);
setInterval(() => checkTheTime(), 1000);
