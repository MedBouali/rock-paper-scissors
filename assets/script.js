let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let compuerChoice = "";
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0){
        compuerChoice = "rock";
    }
    else if (randomNumber === 1){
        compuerChoice = "paper";
    }
    else {
        compuerChoice = "scissors";
    }

    return compuerChoice;
}

function playRound(humanChoice, compuerChoice) {
    if (humanChoice !== "") {
        console.log("You chose: " + humanChoice);
        console.log("The computer chose: " + compuerChoice);

        if (humanChoice === compuerChoice) {
            console.log("Its a tie!");
        }
        else if((humanChoice === "rock" && compuerChoice === "paper") || (humanChoice === "scissors" && compuerChoice === "rock") || (humanChoice === "paper" && compuerChoice === "scissors")) {
            console.log("You lose! " + compuerChoice + " beats " + humanChoice + ".");
            computerScore++;
        } else {
            console.log("You win! " + humanChoice + " beats " + compuerChoice + ".");
            humanScore++;
        }
    }
}

const body = document.body;
body.style = "text-align: center; ";

const rockButton = document.createElement("button");
rockButton.textContent = "Rock";
rockButton.style = "margin: 10px;";

const paperButton = document.createElement("button");
paperButton.textContent = "Paper";
paperButton.style = "margin: 10px;";

const scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";
scissorsButton.style = "margin: 10px;";

body.append(rockButton, paperButton, scissorsButton);

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if(button.textContent === "Rock") {
            const humanSelection = "rock";
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
        } else if (button.textContent === "Paper") {
            const humanSelection = "paper";
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
        } else {
            const humanSelection = "scissors";
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
        }
    });
});
