function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
document.querySelector('.score').textContent = score;
document.querySelector('.check').addEventListener('click', function () {
  //console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    //document.querySelector(".message").textContent = "no number";
    displayMessage('no number');
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    //document.querySelector(".message").textContent = "correct number";
    displayMessage('correct number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
  // else if (guess > secretNumber) {
  //   //document.querySelector(".message").textContent = "guess is too high";
  //   displayMessage('guess is too high');
  //   score--;
  //if(score===0) displayMessage('you lost the game :(');
  //   document.querySelector('.score').textContent = score;
  // } else if (guess < secretNumber) {
  //   //document.querySelector(".message").textContent = "guess is too low";
  //   displayMessage('guess is too low');
  //   score--;
  //if(score===0) displayMessage('you lost the game :(');
  //   document.querySelector('.score').textContent = score;
  // }
  else {
    guess > secretNumber
      ? displayMessage('guess is too high')
      : displayMessage('guess is too low');
    score--;
    document.querySelector('.score').textContent = score;
    if (score === 0) displayMessage('you lost the game :(');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  score = 20;
  document.querySelector('.score').textContent = score;
});
