import { generateBlock } from "./blockGenerator";
import { move, createBlock } from "./move";
import { bird } from "./birdPlacing";
import newHeight from "./falling-bird";
//import * as placing from "./birdPlacing";


const start = document.getElementsByClassName('transition')[0];
const startImgBird = document.getElementById('start-img-bird');
const h1 = document.getElementsByTagName('h1')[0];
const arrPosition = ['upper'];
const arrSpeed = [15];
const area = document.getElementById('container');

function openField() {
  start.remove();
  h1.remove();
  bird.classList.remove('bird--is_disabled');
  startImgBird.classList.add('is_disabled');
  // window.addEventListener(
  //   lkeydownl,
  //   newHeight,
  //   placing.getTopDistance(bird, area),
  //   true
  // );



  setInterval(() => {
    //newHeight(placing.getTopDistance(bird, area));
    const block = generateBlock();
    const randomPosition = arrPosition[Math.floor(Math.random() * arrPosition.length)];
    const randomSpeed = arrSpeed[Math.floor(Math.random() * arrSpeed.length)];
    move(block, randomSpeed, randomPosition);
    setTimeout(() => {
      document.getElementsByClassName('blockContainer')[0].remove();
    }, 4000);
  }, 4000);
}


start.addEventListener('click', openField);

window.addEventListener('keydown', dealWithKeyboard);

function dealWithKeyboard() {
  bird.style.top = '10px';
}
start.addEventListener('click', openField);
