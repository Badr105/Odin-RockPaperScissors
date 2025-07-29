let humanScore = 0, computerScore = 0;

const result = document.querySelector("#result");

const HS = document.querySelector(".humanScore");
const CS = document.querySelector(".computerScore");

HS.textContent = "Your score: " + humanScore;
CS.textContent = "Opponent's score: " + computerScore;

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    let choice;
    if (num === 0) {
        choice = "rock";
    }
    else if (num === 1) {
        choice = "paper";
    }
    else if (num === 2) {
        choice = "scissors";
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        result.textContent = "It's a draw! You both chose " + humanChoice;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        result.textContent = "You lose! " + computerChoice + " beats " + humanChoice;
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        result.textContent = "You win! " + humanChoice + " beats " + computerChoice;
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        result.textContent = "You win! " + humanChoice + " beats " + computerChoice;
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        result.textContent = "You lose! " + computerChoice + " beats " + humanChoice;
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        result.textContent = "You win! " + humanChoice + " beats " + computerChoice;
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        result.textContent = "You lose! " + computerChoice + " beats " + humanChoice;
        computerScore++;
    }
    HS.textContent = "Your score: " + humanScore;
    CS.textContent = "Opponent's score: " + computerScore;

    checkWinner();
}

function checkWinner() {
    if (humanScore === 5) {
        result.textContent = "YOU WON WITH A SCORE OF: " + humanScore + "/" + computerScore;
        humanScore = 0, computerScore = 0;
    }
    else if (computerScore === 5){
        result.textContent = "YOU LOST WITH A SCORE OF: " + humanScore + "/" + computerScore;
        humanScore = 0, computerScore = 0;
    }
}


