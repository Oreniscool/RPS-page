
let choices = ["rock", "paper", "scissor"];

function getComputerChoice() {
    return Math.floor(Math.random()*3);
}
function getUserChoice() {
    let choice=prompt("Enter either rock, paper or scissors: ");
    if (choices.includes(choice)) {
        return choice;
    }
    else {
        console.log('Please enter the correct choice in lowercase.');
        getUserChoice();
    }
}

let computerChoice = choices[getComputerChoice()];
console.log(computerChoice)
let userChoice = getUserChoice();
console.log(userChoice)

playGround(computerChoice, userChoice);
function playGround(computerChoice, userChoice) {
    let loss = "You lose.";
    let win = "You win!";
    if (computerChoice===userChoice) {
        console.log("It\'s a tie!");
    }
    else if (computerChoice===choices[0] && userChoice===choices[2]) {
        console.log(loss);
    }
    else if (computerChoice===choices[1] && userChoice===choices[0]) {
        console.log(loss);
    }
    else if (computerChoice===choices[2] && userChoice===choices[1]) {
        console.log(loss);
    }
    else {
        console.log(win);
    }
}