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