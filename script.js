'use strict';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = ' ⛔️ No number!';
  } else if (guess != secretNumber) {
    document.querySelector('.message').textContent =
      guess > secretNumber ? '⬆️ Too High!' : '⬇️ Too Low!';
    decreaseScore();
  } else {
    gameState('WIN');
    const highscore = Number(document.querySelector('.highscore').textContent);
    if (highscore < score)
      document.querySelector('.highscore').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  gameState('START');
});

function decreaseScore() {
  if (score > 0) {
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    gameState('GAME OVER');
  }
}

function gameState(state) {
  if (state === 'STOP') {
    document.querySelector('.check').disabled = true;
    document.querySelector('.guess').readOnly = true;
  } else if (state === 'START') {
    secretNumber = Math.trunc(Math.random() * 20);
    score = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.check').disabled = false;
    document.querySelector('.guess').readOnly = false;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
  } else if (state === 'WIN') {
    gameState('STOP');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.message').textContent = 'Correct Number! 🎉';
    document.querySelector('.number').textContent = secretNumber;
  } else if (state === 'GAME OVER') {
    gameState('STOP');
    document.querySelector('.message').textContent = 'Game Over! 😭';
  }
}

let secretNumber;
let score;
gameState('START');
//console.log(secretNumber);
