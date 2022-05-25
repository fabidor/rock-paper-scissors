let arr = ["rock", "paper", "scissors"]
function computerChoose(){
    return arr[Math.floor(Math.random()*arr.length)];
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
const gameWin = document.createElement('div');
gameWin.textContent=`You Win!`
const gameLose=document.createElement('div');
gameLose.textContent= `You Lose!`
const tieGame=document.createElement('div');
tieGame.textContent= `Tie Game!`

function removeGameResults(){
    if (scoreBoard.contains(gameWin)){
        scoreBoard.removeChild(gameWin);
    } if (scoreBoard.contains(gameLose)){
        scoreBoard.removeChild(gameLose);
    } if (scoreBoard.contains(tieGame)){
        scoreBoard.removeChild(tieGame);
    }
}
function RPS(personChoice){
    let compChoice = computerChoose();
    removeGameResults();
    if (personChoice == compChoice){
        scoreBoard.appendChild(tieGame);
        return;
    } else if(personChoice == "rock" && compChoice == "paper" || personChoice == "paper" && compChoice == "scissors" || personChoice == "scissors" && compChoice == "rock"){
        scoreBoard.appendChild(gameLose);
        return "CompWin";
    } else{
        scoreBoard.appendChild(gameWin);
        return "PersonWin";
    }
}
    

    const victoryMessage=document.createElement('div');
    victoryMessage.textContent="You Win!"
    const defeatMessage=document.createElement('div');
    defeatMessage.textContent="You Lose!"
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
            gameBoard.removeChild(scoreBoard);
            gameBoard.appendChild(defeatMessage);
        } else if(humScore == 3){
            gameBoard.removeChild(btns)
            gameBoard.removeChild(scoreBoard);
            gameBoard.appendChild(victoryMessage);
        }
    }));
    
}
fullGame();