let levo = document.getElementById("levo");
let pravo = document.getElementById("pravo");

var counter = 0;
let value = 0;
pravo.onclick = function () {
  let element = document.querySelector(".krut");
  value -= 1500;
  if (value < -3000) {
    return;
  }
  element.style.left = value + "px";
};
levo.onclick = function () {
  let element = document.querySelector(".krut");
  if (value == 0) {
    return;
  }
  value += 1500;
  element.style.left = value + "px";
};
