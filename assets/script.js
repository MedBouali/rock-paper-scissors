function getComputerChoice() {
    let compuerChoice = "";
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0){
        compuerChoice = "Rock";
    }
    else if (randomNumber === 1){
        compuerChoice = "Paper";
    }
    else {
        compuerChoice = "Scissors";
    }

    return compuerChoice;
}

function getHumanChoice() {
    let humanChoice = "";
    let choices = ["rock", "paper", "scissors"];
    
    do {
        humanChoice = prompt("Please choose Rock, Paper, or Scissors:");
        
        if (humanChoice === null) {
            break;
        }
        
    } while (!choices.includes(humanChoice.toLocaleLowerCase()));
    
    return humanChoice;
}