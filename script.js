console.log("Hello world")

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

var humanChoice;
var computerChoice;
var humanScore = 0;
var computerScore = 0;

function getHumanChoice(){
    humanChoice = parseInt(prompt("Enter you choice: (0 for rock, 1 for paper and 2 for scissor"))
}



function evaluate(humanChoice, computerChoice){
    
    if(humanChoice == computerChoice){
        humanScore++;
        computerScore++;
        console.log("It's a draw!")
    }

    if(humanChoice == (computerChoice + 1) %3){
        humanScore++;
        console.log("You win!")
    }

    if(humanChoice == (computerChoice + 2) % 3){
        computerScore++;
        console.log("You lost!")
    }
}

function playRound(humanChoice, computerChoice){
    evaluate(humanChoice, computerChoice)
}

var i = 0;
while(i < 6) {
    getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    i++;
}

if(humanScore > computerScore){
    console.log("You won it all!")
}

if(computerScore > humanScore){
    console.log("Better luck next time!")
}

if( humanScore == computerScore){
    console.log("It's a draw")
}