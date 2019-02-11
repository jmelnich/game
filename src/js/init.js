import {generateBlock} from './blockGenerator';
import { move, createBlock } from './move';
import { bird } from './birdPlacing';

const start = document.getElementsByClassName('transition')[0];
const arrPosition = ['upper'];
const arrSpeed = [10];

function openField() {
  bird.classList.remove('bird--is_disabled');
  start.remove();

  setInterval(() => {
    const block = generateBlock();
    const randomPosition = arrPosition[Math.floor(Math.random() * arrPosition.length)];
    const randomSpeed = arrSpeed[Math.floor(Math.random() * arrSpeed.length)];
    move (block, randomSpeed, randomPosition);
    // setTimeout(() => {
    //   document.getElementsByClassName('block')[0].remove();
    // }, 4000);
  }, 1000);
}
start.addEventListener('click', openField);
