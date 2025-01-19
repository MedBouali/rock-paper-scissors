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
        humanChoiceDiv.textContent = "You chose: " + humanChoice;
        computerChoiceDiv.textContent = "The computer chose: " + compuerChoice;

        if (humanChoice === compuerChoice) {
            roundResultDiv.textContent = "Its a tie!";
            computerScore++;
            humanScore++;
            
            humanScoreDiv.textContent = "You: " + humanScore;
            computerScoreDiv.textContent = "Computer: " + computerScore;
        }
        else if((humanChoice === "rock" && compuerChoice === "paper") || (humanChoice === "scissors" && compuerChoice === "rock") || (humanChoice === "paper" && compuerChoice === "scissors")) {
            roundResultDiv.textContent = "You lose! " + compuerChoice + " beats " + humanChoice + ".";
            computerScore++;

            humanScoreDiv.textContent = "You: " + humanScore;
            computerScoreDiv.textContent = "Computer: " + computerScore;
        } else {
            roundResultDiv.textContent = "You win! " + humanChoice + " beats " + compuerChoice + ".";
            humanScore++;

            humanScoreDiv.textContent = "You: " + humanScore;
            computerScoreDiv.textContent = "Computer: " + computerScore;
        }

        if(humanScore === 5 || computerScore === 5) {
            if (humanScore === computerScore) {
                winnerDiv.textContent = "It's a tie! You both are equally awesome... or equally bad, depending on how you look at it!";
                
            } else if (humanScore < computerScore) {
                winnerDiv.textContent = "The computer wins... Looks like it’s time to unplug and reset its ego!";
            } else {
                winnerDiv.textContent = "Congratulations! You crushed the computer like a rock against scissors!";
            } 

            humanScore = 0;
            computerScore = 0;
        }

        resultsDiv.textContent = "";
        resultsDiv.append(humanChoiceDiv, computerChoiceDiv, roundResultDiv, scoreDiv, winnerDiv);
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

const resultsDiv = document.createElement("div");

body.append(rockButton, paperButton, scissorsButton, resultsDiv);

const humanChoiceDiv = document.createElement("div");
const computerChoiceDiv = document.createElement("div");

const humanScoreDiv = document.createElement("div");
humanScoreDiv.style = "font-weight: bold;";
const computerScoreDiv = document.createElement("div");
computerScoreDiv.style = "font-weight: bold;";

const scoreDiv = document.createElement("div");
scoreDiv.style = "margin-top: 30px;";
scoreDiv.append(humanScoreDiv, computerScoreDiv);

const roundResultDiv = document.createElement("div");
roundResultDiv.style = "margin-top: 10px;";

const winnerDiv = document.createElement("div");
winnerDiv.style = "margin-top: 30px; font-weight: bold;";

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
