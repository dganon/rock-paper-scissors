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
        console.log("Human: " + humanChoice);
        console.log("Computer: " + computerChoice);
        console.log("You lose! Paper beats rock!");
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("Human: " + humanChoice);
        console.log("Computer: " + computerChoice);
        console.log("You win! Rock beats scissors!");
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log("Human: " + humanChoice);
        console.log("Computer: " + computerChoice);
        console.log("You lose! Scissors beats paper!");
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("Human: " + humanChoice);
        console.log("Computer: " + computerChoice);
        console.log("You win! Paper beats rock!");
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("Human: " + humanChoice);
        console.log("Computer: " + computerChoice);
        console.log("You lose! Rock beats scissors!");
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("Human: " + humanChoice);
        console.log("Computer: " + computerChoice);
        console.log("You win! Scissors beats paper!");
        humanScore++;
    }
    else if (humanChoice === computerChoice){
        console.log("Human: " + humanChoice);
        console.log("Computer: " + computerChoice);
        console.log("It's a tie. Try again!");
    }
    else {
        console.log("Not valid. Try again!");
    }

    console.log("Human: " + humanScore);
    console.log("Computer: " + computerScore);
}

function playGame(){
    for(i=0; i<5; i++){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

let humanScore = 0;
let computerScore = 0;

let humanSelection;
let computerSelection;

playGame();