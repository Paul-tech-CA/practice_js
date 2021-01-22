const dino = document.querySelector('.dino');
const cactus = document.querySelector('.cactus');
const counterRef = document.querySelector('.counter');

let score = 0;
function dinoJump() {
  dino.classList.add('dino-jump');
  setTimeout(() => {
    dino.classList.remove('dino-jump');
  }, 600);
}

window.addEventListener('keypress', dinoJump);
setInterval(() => {
  let dinoCoord = parseInt(
    window.getComputedStyle(dino).getPropertyValue('bottom'),
  );
  //   console.log(dinoCoord);
  let cactusCoord = parseInt(
    window.getComputedStyle(cactus).getPropertyValue('right'),
  );
  //   console.log(cactusCoord);
  if (cactusCoord > 800 && dinoCoord < 100) {
    score = -1;

    alert('You are Dead!');
  }
}, 10);

setInterval(() => {
  score += 1;
  !score
    ? (counterRef.textContent = '000')
    : score > 9
    ? (counterRef.textContent = '0' + score)
    : score > 99
    ? (counterRef.textContent = score)
    : (counterRef.textContent = '00' + score);

  console.log(score);
}, 3200);
console.log('score', score);
