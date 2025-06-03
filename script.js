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

function getHumanChoice() {
    const message = "Enter your choice: ";
    return prompt(message).trim().toLowerCase();
}

function logHumanWin() {
    console.log("You Win!");
}

function logHumanLoss() {
    console.log("You Lose!");
}

function logTie() {
    console.log("Tie");
}
function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            logTie();
        }
        else if (computerChoice === "paper") {
            logHumanLoss();
            computerScore++;
        }
        else {
            logHumanWin();
            humanScore++;
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            logHumanWin();
            humanScore++;
        }
        else if (computerChoice === "paper") {
            logTie();
        }
        else {
            logHumanLoss();
            computerScore++;
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            logHumanLoss();
            computerScore++;
        }
        else if (computerChoice === "paper") {
            logHumanWin();
            humanScore++;
        }
        else {
            logTie();
        }
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++)
    {
        playRound(getHumanChoice(), getComputerChoice(), humanScore, computerScore);
    }
}

playGame();

