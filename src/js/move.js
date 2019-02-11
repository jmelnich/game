export function move(block, speed = 10, position = 'upper') {
  block.style.animationDuration = `${speed}s`;
  block.style.animationName = position;
};

function createBlock() {
  const div = document.createElement('div');
  div.classList.add('block');
  const field = document.getElementsByClassName('field')[0];
  field.appendChild(div);
  return div;
}

const arrPosition = ['upper', 'medium', 'lower', 'bottom'];
const arrSpeed = [10];

setInterval(() => {
  const block = createBlock();
  const randomPosition = arrPosition[Math.floor(Math.random() * arrPosition.length)];
  const randomSpeed = arrSpeed[Math.floor(Math.random() * arrSpeed.length)];
  move (block, randomSpeed, randomPosition);
  setTimeout(() => {
    document.getElementsByClassName('block')[0].remove();
  }, 4000);
}, 4000);


