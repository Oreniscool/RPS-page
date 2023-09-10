//div declarations
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorBtn = document.querySelector('.scissor');
const promtDiv = document.querySelector('.promt');
const btns = document.querySelectorAll('button')
const computerScoreDiv = document.querySelector('.computer-score');
const reloadBtn = document.querySelector('.reload')
const userScoreDiv = document.querySelector('.user-score');


rockBtn.addEventListener('click', function() {
    playGround('rock');
});
paperBtn.addEventListener('click', function() {
    playGround('paper');
});
scissorBtn.addEventListener('click', function() {
    playGround('scissor');
});
reloadBtn.addEventListener('click', function() {
    window.location.reload();
});



//logic to decide winner
function gameLogic(computerChoice, userChoice) {
    if (computerChoice===userChoice) {
        return "tie";
    }
    else if (computerChoice===choices[0] && userChoice===choices[2]) {
        return "loss";
    }
    else if (computerChoice===choices[1] && userChoice===choices[0]) {
        return "loss";
    }
    else if (computerChoice===choices[2] && userChoice===choices[1]) {
        return "loss";
    }
    else {
        return "win";
    }
};

//edits message above buttons
function promtEditor(result, computerChoice) {
    promtDiv.style.setProperty('margin-right', '5%')
    if (result==="tie") {
        promtDiv.textContent = `The computer chose ${computerChoice}, it's a tie!`;
    }
    else if (result==="win") {
        promtDiv.textContent = `The computer chose ${computerChoice}, you win!`;
    }
    else {
        promtDiv.textContent = `The computer chose ${computerChoice}, you lose!`;
    }
};

//Keeping scores
let computerScore = 0;
let userScore = 0;
function scoreboardEditor(result) {
    if (result==="win") {
        userScore+=1;
        userScoreDiv.textContent= userScore;
    }
    else if (result==="loss"){
        computerScore+=1;
        computerScoreDiv.textContent= computerScore;
    }
};


//disables buttons after win or loss
function disableBtn() {
    for (let btn of btns) {
        if (btn != reloadBtn) {
        btn.disabled = true;
        btn.style.setProperty('cursor', 'not-allowed');
        btn.style.setProperty('color', '#808080');
        }
    }
};


//main function
let choices = ["rock", "paper", "scissor"];
function playGround(userChoice) {
    //computer choice gen
    let computerChoice = choices[Math.floor(Math.random()*3)];

    result = gameLogic(computerChoice, userChoice);


    scoreboardEditor(result);

    if (computerScore==5) {
        promtDiv.textContent= `The computer chose ${computerChoice} and won this round!`
        promtDiv.style.setProperty('margin-right', '1.2%')
        disableBtn();
    }
    else if (userScore==5) {
        promtDiv.textContent= `You chose ${userChoice} and won this round!`;
        promtDiv.style.setProperty('margin-right', '5%')
        disableBtn();
    }
    else {
        promtEditor(result,computerChoice);
    }
};