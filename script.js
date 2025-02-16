let humanSelection;
let computerSelection;
let humanScore = 0;
let computerScore = 0;
const WINNING_SCORE = 5;
let count = 1;

console.log("★☆★☆★☆★ Rock, Paper, Scissors Game ★☆★☆★☆★");

const round = document.querySelector("#round");
const versus = document.querySelector("#versus");
const results = document.querySelector("#result");
const scores = document.querySelector("#scores");
const log = document.querySelector("#log");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let btnTxt = button.textContent.toLowerCase();

        if (humanScore < WINNING_SCORE && computerScore < WINNING_SCORE) {
            console.log(humanScore + " " + computerScore);
            playGame(btnTxt);
        }
        else {
            checkScore();
        }
    });
});

// computer randomly returns rock, paper, or scissors
function getComputerChoice(){
    let choice;
    let randomNum = Math.floor(Math.random() * 3); // randomizes a number between 0-2

    if (randomNum === 0){
        return choice = "rock";
    }
    else if(randomNum === 1){
        return choice = "paper";
    }
    else {
        return choice = "scissors";
    }
}

function playGame(humanSelection) {
    let computerSelection = getComputerChoice();
    let versusTxt = "Human: " + humanSelection + " ★ " + "Computer: " + computerSelection;
    let logTxt = document.createElement("p");

    logTxt.textContent = "ROUND " + count + ": " + humanSelection + " vs. " + computerSelection;

    console.log("★☆★☆★☆★ ROUND " + count + " ★☆★☆★☆★");
    console.log("Human: " + humanSelection + " ★ " + "Computer: " + computerSelection);

    // clears divs and updates with rounds information and player selections
    updateDiv();
    round.append("★☆★☆★☆★ ROUND " + count + " ★☆★☆★☆★");
    versus.append(versusTxt);
    log.appendChild(logTxt);

    playRound(humanSelection, computerSelection);

    count++;
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock" && computerChoice === "paper"){
        results.append("You lose! Paper beats rock!");
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        results.append("You win! Rock beats scissors!");
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        results.append("You lose! Scissors beats paper!");
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        results.append("You win! Paper beats rock!");
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        results.append("You lose! Rock beats scissors!");
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        results.append("You win! Scissors beats paper!");
        humanScore++;
    }
    else if (humanChoice === computerChoice){
        results.append("It's a tie. Try again!");
    }
    let scoresTxt = "Human: " + humanScore + " ★ " + "Computer: " + computerScore;
    scores.append(scoresTxt);

    console.log("Human: " + humanScore + " ★ " + "Computer: " + computerScore);

}

// clears divs
function updateDiv(){
    results.replaceChildren();
    versus.replaceChildren();
    scores.replaceChildren();
    round.replaceChildren();
}

function checkScore(){
    let winner = "";
    let scoresTxt = "Human: " + humanScore + " ★ " + "Computer: " + computerScore;

    if(computerScore === WINNING_SCORE){
        winner = "Sorry. Computer wins this game!";
    }
    else if (humanScore === WINNING_SCORE){
        winner = "You beat the computer. Congratulations!";
    }
    
    updateDiv();
    round.append("GAME OVER");
    scores.append(scoresTxt);
    results.append(winner);

    console.log("★☆★ RESULTS ★☆★");
    console.log("Human: " + humanScore + " Computer: " + computerScore);
    console.log("★☆★☆★☆★ END GAME ★☆★☆★☆★");
}