const GRAVITY = 1.1;

// Приймає початкову висоту і прапор.
// Якщо true = рух вгору, якщо нічого - рух вниз. Швидкість зростаюча, якщо підряд.
// Видає кінцеву висоту.

function calculateHeight() {
  let timeConstant = 0;
  let directionUp = false;
  function heightAdjustment(startHeight, up = false) {
    if (up !== directionUp) {
      directionUp = up;
      timeConstant = 1;
    } else timeConstant++;
    const heightDelta = (timeConstant * timeConstant * GRAVITY) / 2;
    let heightNew;
    if (up) {
      return (heightNew = Math.round(startHeight + heightDelta, 0));
    }
    return (heightNew = Math.round(startHeight - heightDelta, 0));
  }
  return heightAdjustment;
}

const newHeight = calculateHeight();

export default newHeight;
