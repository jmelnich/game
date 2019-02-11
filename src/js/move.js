export function move(block, speed = 10, position = 'upper') {
  block.style.animationDuration = `${speed}s`;
  block.style.animationName = position;
};

export function createBlock() {
  const div = document.createElement('div');
  div.classList.add('block');
  const field = document.getElementsByClassName('container')[0];
  field.appendChild(div);
  return div;
}




