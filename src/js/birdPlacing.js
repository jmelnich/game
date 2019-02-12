// export const bird = document.getElementById("bird");
// const area = document.getElementById("area");
// const column = document.getElementById("column");

export function getTopDistance(point, place) {
  // console.log(point.offsetTop);
  // console.log(point.offsetHeight);
  // console.log(place.offsetTop);
  return point.offsetTop + point.offsetHeight - place.offsetTop;
}

export function getBottomDistance(point, place) {
  // console.log(place.offsetHeight);
  // console.log(point.offsetTop);
  // console.log(point.offsetHeight);
  return place.offsetHeight - point.offsetTop - point.offsetHeight;
}

function getRightDistance(point, block) {
  return block.offsetLeft - point.offsetLeft - point.offsetWidth;
}

// console.log(getTopDistance(bird, area));
// console.log(getBottomDistance(bird, area));
// console.log(getRightDistance(bird, column));
