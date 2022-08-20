const clockImage = document.querySelector(".image-container>img");
const theButtons = document.querySelectorAll("button");
let currentTime = document.querySelector(".current-time");

theButtons[0].addEventListener("click", () => {
  addAnotherTime();
});
