import {generateBlock} from './blockGenerator';
import { move, createBlock } from './move';
import { bird } from './birdPlacing';

const start = document.getElementsByClassName('transition')[0];
const startImgBird = document.getElementById('start-img-bird');
const h1 = document.getElementsByTagName('h1')[0];
const arrPosition = ['upper'];
const arrSpeed = [15];

function openField() {
  bird.classList.remove('bird--is_disabled');
  startImgBird.classList.add('is_disabled');
  start.remove();
  h1.remove();

  setInterval(() => {
    const block = generateBlock();
    const randomPosition = arrPosition[Math.floor(Math.random() * arrPosition.length)];
    const randomSpeed = arrSpeed[Math.floor(Math.random() * arrSpeed.length)];
    move (block, randomSpeed, randomPosition);
    setTimeout(() => {
      document.getElementsByClassName('blockContainer')[0].remove();
    }, 4000);
  }, 4000);
}
start.addEventListener('click', openField);
