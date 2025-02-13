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

// takes user choice and returns it
function getHumanChoice(){
    let choice = prompt("Rock,  paper, or scissors?", "");

    if (choice.toLowerCase() === "rock"){
        return choice = "rock";
    }
    else if(choice.toLowerCase() === "paper"){
        return choice = "paper";
    }
    else if(choice.toLowerCase() === "scissors"){
        return choice = "scissors";
    }
    else{
        return choice = "Input not valid. Please pick rock, paper, or scissors!"
    }
}

// lets game be played in rounds
function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("You lose! Paper beats rock!");
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors!");
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You lose! Scissors beats paper!");
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win! Paper beats rock!");
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose! Rock beats scissors!");
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win! Scissors beats paper!");
        humanScore++;
    }
    else if (humanChoice === computerChoice){
        results.append("It's a tie. Try again!");
    }
}

/*
function playGame(){
    console.log("★☆★☆★☆★ Rock, Paper, Scissors Game ★☆★☆★☆★");

    for(count; count<6; count++){
        console.log("★☆★☆★☆★ ROUND " + count + " ★☆★☆★☆★");
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        console.log("Human: " + humanSelection + " vs. " + "Computer: " + computerSelection);
        playRound(humanSelection, computerSelection);

        console.log("Human: " + humanScore);
        console.log("Computer: " + computerScore);
    }

    checkScore();
}
*/

function checkScore(){
    console.log("★☆★ RESULTS ★☆★");
    console.log("Human: " + humanScore + " Computer: " + computerScore);

    let winner = "";

    if(humanScore < computerScore){
        winner = "Sorry, human. Computer wins this game!";
    }
    else if (humanScore === computerScore){
        winner = "No winners this game. Try again!";
    }
    else {
        winner = "Congratulations, human!";
    }
    return winner;
    console.log("★☆★☆★☆★ END ROUND ★☆★☆★☆★");
}

function playGame(humanSelection) {
    let computerSelection = getComputerChoice();
    let versusTxt = "Human: " + humanSelection + " vs. " + "Computer: " + computerSelection;
    let scoresTxt = "Human: " + humanScore + " vs. " + "Computer: " + computerScore;
    
    if(count < 6) {
        console.log("★☆★☆★☆★ ROUND " + count + " ★☆★☆★☆★");
        console.log("Human: " + humanSelection + " vs. " + "Computer: " + computerSelection);
        console.log("Human: " + humanScore + " vs. " + "Computer: " + computerScore);
        
        updateDiv();
        versus.append(versusTxt);
        scores.append(scoresTxt);

        playRound(humanSelection, computerSelection);

        round.append("★☆★☆★☆★ ROUND " + count + " ★☆★☆★☆★");

        count++;
    }
    else {
        updateDiv();
        round.append("★☆★☆★☆★ GAME OVER ★☆★☆★☆★");
        results.append(checkScore());
        scores.append(scoresTxt);
    }
}

// clears divs
function updateDiv(){
    results.replaceChildren();
    versus.replaceChildren();
    scores.replaceChildren();
    round.replaceChildren();
}

let humanScore = 0;
let computerScore = 0;
let count = 1;
const clear = "";

let humanSelection;
let computerSelection;

console.log("★☆★☆★☆★ Rock, Paper, Scissors Game ★☆★☆★☆★");

const results = document.querySelector("#result");
const versus = document.querySelector("#versus");
const scores = document.querySelector("#scores");
const round = document.querySelector("#round");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let btnTxt = button.textContent.toLowerCase();

        playGame(btnTxt);
    });
});



//playGame();