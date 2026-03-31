console.log("Hello World")

function getComputerChoice() {
    let computerChoice = Math.random();
    if (computerChoice <= (1 / 3)) {
        return "rock";
    }
    else if (computerChoice <= 2/3) {
        return "scissors";
    }
    else {
        return "paper";
    }
}