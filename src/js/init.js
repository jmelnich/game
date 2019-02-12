import { generateBlock } from "./blockGenerator";
import { move, createBlock } from "./move";
// import { bird } from "./birdPlacing";
import newHeight from "./falling-bird";
import { getBottomDistance, getTopDistance } from "./birdPlacing";

const start = document.getElementsByClassName("transition")[0];
const startImgBird = document.getElementById("start-img-bird");
const h1 = document.getElementsByTagName("h1")[0];
const arrPosition = ["upper"];
const arrSpeed = [15];
const area = document.querySelector(".container");
let bird = document.getElementById("bird");
var intervalFalling;

function increaseHeight() {
  //removing a constant falling
  clearInterval(intervalFalling);

  // checking the height
  const oldHeight = 700 - parseInt(bird.dataset.top, 10);

  console.log("oldHeight - dataset", oldHeight);

  const updatedHeight = newHeight(oldHeight, true);
  console.log(updatedHeight);
  bird.dataset.top = 700 - updatedHeight;
  bird.style.top = `${bird.dataset.top}px`;

  //setting the contant falling again(if the user stops pressing the button again)
  setFalling();
}

function openField() {

  // the current top we save in a dataset, so in any point of time we can use this value.
  bird.dataset.top = 0;
  start.remove();
  h1.remove();
  bird.classList.remove("bird--is_disabled");
  startImgBird.classList.add("is_disabled");
  window.addEventListener("keydown", increaseHeight);

  setFalling();


  setInterval(() => {
    const block = generateBlock();
    const randomPosition =
      arrPosition[Math.floor(Math.random() * arrPosition.length)];
    const randomSpeed = arrSpeed[Math.floor(Math.random() * arrSpeed.length)];
    move(block, randomSpeed, randomPosition);

    setTimeout(() => {
      document.getElementsByClassName("blockContainer")[0].remove();
    }, 4000);
  }, 4000);
}

function setFalling() {
  intervalFalling = setInterval(() => {
    const oldHeight = 700 - parseInt(bird.dataset.top, 10);
    const updatedHeight = newHeight(oldHeight);
    bird.dataset.top = 700 - updatedHeight;
    bird.style.top = `${bird.dataset.top}px`;
  }, 500);
}

start.addEventListener("click", openField);

window.addEventListener("keydown", dealWithKeyboard);

function dealWithKeyboard() {
  bird.style.top = "10px";
}
start.addEventListener("click", openField);
