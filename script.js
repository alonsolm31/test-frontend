let car_1 = document.querySelector("#car_1");
let row = document.querySelector("#row");
const card_section = document.querySelector("#card_section");

let startX;
let scrollTop;
let isDown = false;

row.addEventListener("mousedown", (e) => mouseDown(e));
row.addEventListener("touchstart", (e) => mouseDown(e));
card_section.addEventListener("mouseup", (e) => mouseUp(e));
card_section.addEventListener("mouseleave", (e) => mouseLeave(e));

window.addEventListener("mousemove", function (e) {
  if (!isDown) return;
  let pixel = e.clientX + "px";
  car_1.style.width = pixel;
});

window.addEventListener("touchmove", function (e) {
  if (!isDown) return;
  let pixel = e.touches[0].clientX + "px";
  car_1.style.width = pixel;
});

function mouseDown(e) {
  isDown = true;
  startX = e.pageX;
}

function mouseLeave(e) {
  isDown = false;
}

function mouseUp(e) {
  isDown = false;
}
