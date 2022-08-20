function showtheTime() {
  var dateObject = new Date();
  let time = getEachTime(dateObject);
  currentTime.innerHTML = time.join(":");
}
function getEachTime() {
  let value = new Date();
  let list = [];
  list.push(ifOddIfEven(value.getHours()));
  list.push(ifOddIfEven(value.getMinutes()));
  list.push(ifOddIfEven(value.getSeconds()));
  return list;
}
function ifOddIfEven(givvenNumber) {
  if (givvenNumber <= 9) {
    return "0" + givvenNumber;
  } else {
    return givvenNumber;
  }
}
function fillTheSelectElements() {
  const selectElements = document.querySelectorAll("select");
  for (let element of selectElements) {
    if (element.id == "hour") {
      for (let i = 1; i <= 24; i++) {
        if (i <= 9) {
          var theHourOption = `<option value="0${i}">0${i}</option>`;
          element.insertAdjacentHTML(
            "beforeend",
            `<option value="0${i}">0${i}</option>`
          );
        } else {
          var theHourOption = `<option value="${i}">${i}</option>`;
          element.insertAdjacentHTML("beforeend", theHourOption);
        }
      }
    } else {
      for (let i = 0; i <= 60; i++) {
        if (i <= 9) {
          var theHourOption = ` <option value="0${i}">0${i}</option>`;
          element.insertAdjacentHTML("beforeend", theHourOption);
        } else {
          var theHourOption = ` <option value="${i}">${i}</option>`;
          element.insertAdjacentHTML("beforeend", theHourOption);
        }
      }
    }
  }
}
function addAnotherTime() {
  var alarmTimeContainer = document.querySelector(".alarm-time-container");
  alarmTimeContainer.insertAdjacentHTML("beforeend", formCreator());
  fillTheSelectElements();
}
function formCreator() {
  var timeForm = ` <form class="alarm-times" action="javascript:void(0)" method="post">
    <select name="alarm-time-selector" id="hour">
      <option value="unselected" selected hidden>Hour</option>
    </select>
    <select name="alarm-time-selector" id="minute">
      <option value="unselected" selected hidden>Minute</option>
    </select>
  </form>`;
  return timeForm;
}
showtheTime();
fillTheSelectElements();
setInterval(showtheTime, 1000);
