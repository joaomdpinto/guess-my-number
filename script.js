'use strict';

let secretNumber = Math.trunc(Math.random() * 20);
let score = 20;
//console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = ' ⛔️ No number!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '⬆️ Too High! ';
    decreaseScore();
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '⬇️ Too Low!';
    decreaseScore();
  } else {
    document.querySelector('.message').textContent = 'Correct Number! 🎉';
    document.querySelector('.number').textContent = secretNumber;

    const highscore = Number(document.querySelector('.highscore').textContent);
    if (highscore < score)
      document.querySelector('.highscore').textContent = score;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.check').disabled = true;
    document.querySelector('.guess').readOnly = true;
  }
});

function decreaseScore() {
  if (score > 0) {
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'Game Over! 😭';
    document.querySelector('.check').disabled = true;
    document.querySelector('.guess').readOnly = true;
  }
}

document.querySelector('.again').addEventListener('click', function () {
  //style
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').disabled = false;
  document.querySelector('.guess').readOnly = false;

  //score
  score = 20;
  document.querySelector('.score').textContent = score;

  //message
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';

  //secret number
  secretNumber = Math.trunc(Math.random() * 20);
  document.querySelector('.number').textContent = '?';
});
