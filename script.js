console.log("Hello World")

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
    return prompt("rock, paper, scissors: ");
}

console.log(getHumanChoice())