function getComputerChoice() {
    const randomNumber = Math.random() * 3;
    if (randomNumber < 1) {
        return "rock";
    }
    else if (randomNumber < 2) {
        return "paper";
    }
    else {
        return "scissors";
    }   
}

function displayResults(message) {
    resultsDisplay.textContent = 
        message +
        `\nYour Score: ${humanScore}\n
        Computer Score: ${computerScore}`;
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let message;
    if (humanChoice === computerChoice) {
        message = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        message = "You win this round!";
        humanScore++;
    } else {
        message = "Computer wins this round!";
        computerScore++;
    }
    displayResults(message)
}

let humanScore = 0;
let computerScore = 0;
let rockButton = document.querySelector("#rock-button");
let paperButton = document.querySelector("#paper-button");
let scissorsButton = document.querySelector("#scissors-button");
let resultsDisplay = document.querySelector("#results-display");

rockButton.addEventListener('click', () => {
    playRound(rockButton.name)});

paperButton.addEventListener('click', () => {
    playRound(paperButton.name)});

scissorsButton.addEventListener('click', () => {
    playRound(scissorsButton.name)});