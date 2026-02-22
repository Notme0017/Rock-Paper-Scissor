
function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

var humanScore = 0;
var computerScore = 0;

const buttons = document.querySelectorAll(".btn");
const result = document.querySelector(".results");

function playRound(humanChoice, computerChoice){
    
    if(humanChoice === computerChoice){
        result.textContent = "It's a draw!";
    } else if(humanChoice === (computerChoice + 1) % 3){
        humanScore++;
        result.textContent = "You won!";
    } else {
        computerScore++;
        result.textContent = "You Lost!";
    }
    
    // Update score display
    result.textContent += ` Human: ${humanScore}, Computer: ${computerScore}`;
}

let i = 0;
buttons.forEach(button => {
    button.addEventListener("click", function(e){
        const humanChoice = parseInt(e.target.id);
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        i++;
        if(i ===5){
            if(humanScore > computerScore){
                result.textContent = "Congratulations! You won the game!";
            } else if(computerScore > humanScore){
                result.textContent = "Sorry! You lost the game!";
            } else {
                result.textContent = "The game is a draw!";
            }
            buttons.forEach(btn =>btn.disabled = true);
        }
    });
});