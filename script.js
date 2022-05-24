let arr = ["rock", "paper", "scissors"]
function computerChoose(){
    return arr[Math.floor(Math.random()*arr.length)];
}

//let result;
//let buttons = document.querySelectorAll('button');
//buttons.forEach((button) => button.addEventListener('click', () => {
    //result = RPS(button.id)
    //console.log(result)
//}));


function RPS(personChoice){
    let compChoice = computerChoose();
    console.log(compChoice);
    console.log(personChoice);
    if (personChoice == compChoice){
        console.log("Tie Game!");
        return;
    } else if(personChoice == "rock" && compChoice == "paper" || personChoice == "paper" && compChoice == "scissors" || personChoice == "scissors" && compChoice == "rock"){
        console.log(`You Lose! ${compChoice} beats ${personChoice}.`);
        return "CompWin";
    } else{
        console.log(`You Win! ${personChoice} beats ${compChoice}.`);
        return "PersonWin";
    }
}
    let compScore = 0;
    let humScore = 0;
    const scoreBoard = document.querySelector("#Scores");
    const compY = document.createElement('div');
    compY.textContent=`The Computer's Score is ${compScore}`;
    const persY = document.createElement('div');
    persY.textContent= `Your Score is ${humScore}`;
    scoreBoard.appendChild(compY);
    scoreBoard.appendChild(persY);
    let gameBoard = document.querySelector('#gameBoard');
    let btns = document.querySelector(".RPSButtons")


function fullGame(){
   
    let buttons = document.querySelectorAll('button');
    buttons.forEach((button) => button.addEventListener('click', () => { 
        let result = RPS(button.id)
        if(result == "CompWin"){
            compScore ++;
            console.log(compScore);
            compY.textContent = `The Computer's Score is ${compScore}`;
        } else if(result =="PersonWin"){
            humScore++;
            console.log(humScore);
            persY.textContent= `Your Score is ${humScore}`;
        }
        if(compScore == 3){
            gameBoard.removeChild(btns)
        } else if(humScore == 3){
            console.log("Ultimate Victory!!")
        }
    }));
    
}
fullGame();