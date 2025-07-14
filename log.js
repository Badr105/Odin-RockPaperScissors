let humanScore = 0, computerScore = 0;

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

function getHumanChoice() {
    return prompt("Choose Rock, Paper, or Scissors: ").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a draw! You both chose " + humanChoice);
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }
    if (humanScore > computerScore) {
        console.log("YOU WON WITH A SCORE OF: " + humanScore + "/" + computerScore);
    }
    else if (humanScore < computerScore){
        console.log("YOU LOST WITH A SCORE OF: " + humanScore + "/" + computerScore);
    }
    else {
        console.log("IT'S DRAW!!")
    }
}

playGame()


