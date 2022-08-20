const clockImage = document.querySelector("img");
const theButton = document.querySelector("button");
let currentTime = document.querySelector(".current-time");
const selectElements = document.querySelectorAll("select");
const ringtone = new Audio("../material/ringtone/alarm_clock_5.mp3");

theButton.addEventListener("click", () => setTheTime());
setInterval(() => showtheTime(), 1000);
var alarmCheck = setInterval(function () {
  if (checkTheTime() == true) {
    if (!clockImage.classList.contains("ringin-animation")) {
      clockImage.classList.add("ringin-animation");
    }
    clearInterval(alarmCheck);
  }
}, 1000);
