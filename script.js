const PLAYER_WIN = 1;
const COMPUTER_WIN = 0;
const NUMBER_OF_ROUNDS = 5;

let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
  let computerChoice = Math.random();
  if (computerChoice <= (1 / 3)) {
    return "rock";
  } else if (computerChoice <= 2 / 3) {
    return "scissors";
  } else {
    return "paper";
  }
}

function getHumanChoice() {
  return prompt("rock, paper, scissors: ").toUpperCase();
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "ROCK" && (computerChoice === "PAPER" || computerChoice === "SCISSORS")) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    return PLAYER_WIN;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    return COMPUTER_WIN;
  }
}


console.log(getHumanChoice())