const TIE = 2
const PLAYER_WIN = 1;
const COMPUTER_WIN = 0;
const NUMBER_OF_ROUNDS = 5;


function getComputerChoice() {
  let computerChoice = Math.random();
  if (computerChoice <= (1 / 3)) {
    return "ROCK";
  } else if (computerChoice <= 2 / 3) {
    return "SCISSORS";
  } else {
    return "PAPER";
  }
}

function getHumanChoice() {
  return prompt("rock, paper, scissors: ").toUpperCase();
}


function playRound(humanChoice, computerChoice) {
  if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    return PLAYER_WIN;
  } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    return PLAYER_WIN;
  } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    return PLAYER_WIN;
  } else if (humanChoice === computerChoice) {
    console.log(`Tie! Both picked ${humanChoice}. Replaying round.`);
    return TIE;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    return COMPUTER_WIN;
  }
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
  for (let i = 1; i <= NUMBER_OF_ROUNDS; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let gameResult = playRound(humanChoice, computerChoice);
    if (gameResult === PLAYER_WIN) {
      humanScore += 1;
    } else if (gameResult === TIE) {
      i -= 1
    }
    else {
      computerScore += 1;
    }
  }
  console.log(`Won ${humanScore}. Lost ${computerScore}`)
  if (humanScore >= (NUMBER_OF_ROUNDS / 2)) {
    console.log("You win!")
  } else {
    console.log("You lose!")
  }
}

playGame()