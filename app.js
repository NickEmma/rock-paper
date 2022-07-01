// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **

function getComputerChoice() {
  let rpsChoices = ['Rock', 'Paper', 'Scissors'];
  let computerChoice = rpsChoices[Math.floor(Math.random() * 3)];
  return computerChoice;
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **

function getResult(playerChoice, computerChoice) {
  let score;

  if (playerChoice === computerChoice) {
    return (score = 0);
  } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
    return (score = 1);
  } else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
    return (score = 1);
  } else if (playerChoice === 'Scissors' && computerChoice === 'Paper') {
    return (score = 1);
  } else {
    return (score = -1);
  }
  return score;
}

// ** updates the DOM based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  let result = document.getElementById('result');
  switch (score) {
    case -1:
      result.innerText = `You Lose!`;
      break;
    case 0:
      result.innerText = `It's a Draw!`;
      break;
    case 1:
      result.innerText = `You Won!`;
      break;
  }

  let playerScore = document.getElementById('player-score');
  let hands = document.getElementById('hands');
  playerScore.innerText = `${Number(playerScore.innerText) + score}`;
  hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`;
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice.value, computerChoice);
  showResult(score, playerChoice.value, computerChoice);
}

// ** getting the event listener using the button**
function playGame() {
  let rpsButtons = document.querySelectorAll('.rpsButton');

  rpsButtons.forEach((rpsButton) => {
    rpsButton.onclick = () => onClickRPS(rpsButton);
  });
  let endGameButton = document.getElementById('endGameButton');
  endGameButton.onclick = () => endGame();
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  let playerScore = document.getElementById('player-score');
  let hands = document.getElementById('hands');
  let result = document.getElementById('result');
  playerScore.innerText = '';
  hands.innerText = '';
  result.innerText = '';
}

playGame();
