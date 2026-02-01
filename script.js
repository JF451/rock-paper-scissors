//get ranomd computer choice
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else if (randomNumber === 2) {
    return 'scissors';
  }
}

function getHumanChoice() {
  return prompt('Enter a choice of rock, paper, or scissors');
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === 'rock' && computerChoice === 'paper') {
      computerScore++;
      console.log('You lose! Paper beats Rock');
    } else if (
      humanChoice.toLowerCase() === 'paper' &&
      computerChoice === 'scissors'
    ) {
      computerScore++;
      console.log('You lose! Scissors beats paper');
    } else if (
      humanChoice.toLowerCase() === 'scissors' &&
      computerChoice === 'rock'
    ) {
      computerScore++;
      console.log('You lose! Rock beats scissors');
    } else if (
      humanChoice.toLowerCase() === 'rock' &&
      computerChoice === 'scissors'
    ) {
      humanScore++;
      console.log('You win! Rock beats scissors');
    } else if (
      humanChoice.toLowerCase() === 'paper' &&
      computerChoice === 'rock'
    ) {
      humanScore++;
      console.log('You win! Paper beats rock');
    } else if (
      humanChoice.toLowerCase() === 'scissors' &&
      computerChoice === 'paper'
    ) {
      humanScore++;
      console.log('You win! Scissors beats paper');
    } else {
      console.log('Tie!');
    }
  }

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);
}

for (let i = 0; i < 5; ++i) {
  playGame();
}

if (computerScore < humanScore) {
  console.log('You win!');
} else if (computerScore > humanScore) {
  console.log('You lose!');
} else {
  console.log('Tie!');
}
