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

function getHumanChoice() {
    let humanChoice = "";
    let choices = ["rock", "paper", "scissors"];
    
    do {
        userPrompt = prompt("Please choose Rock, Paper, or Scissors:");
        if (userPrompt === null) {
            break;
        }
        humanChoice = userPrompt.toLocaleLowerCase();
    } while (!choices.includes(humanChoice));
    
    return humanChoice;
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

function playGame() {
    for (let i=1 ; i<6 ; i++) {
        console.log("Round " + i + ":");
        
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        if (humanSelection === null) {
            console.log("Canceled.");
        } else {
            playRound(humanSelection, computerSelection);
        }
    }

    console.log("Final score:");
    console.log("You: " + humanScore);
    console.log("Computer: " + computerScore);

    if (humanScore === computerScore) {
        console.log("It's a tie! You both are equally awesome... or equally bad, depending on how you look at it!");
        
    } else if (humanScore < computerScore) {
        console.log("The computer wins... Looks like it’s time to unplug and reset its ego!");
    } else {
        console.log("Congratulations! You crushed the computer like a rock against scissors!");
    } 
}

playGame();