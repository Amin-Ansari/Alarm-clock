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

showtheTime();
setInterval(showtheTime, 1000);
