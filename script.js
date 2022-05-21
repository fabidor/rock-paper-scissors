let arr = ["rock", "paper", "scissors"]
function computerChoose(){
    return arr[Math.floor(Math.random()*arr.length)];
}

function RPS(){
    let compChoice = computerChoose();
    console.log(compChoice);
    let personChoice = prompt("Choose Rock, Paper, or Scissors", "").toLowerCase();
    console.log(personChoice);
    if (personChoice != "rock" && personChoice != "paper" && personChoice != "scissors"){
        console.log("You didn't put in one of the choices, numbnuts.");
        return;
    } else if (personChoice == compChoice){
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

function fullGame(){
    let compScore = 0;
    let humScore = 0;
    while(compScore < 3 && humScore < 3){
        let result = RPS();
        if (result == "CompWin"){
            compScore ++;
        } else if (result == "PersonWin"){
            humScore ++;
        }
    }
    if (compScore>humScore){
        console.log("Computer Wins!")
    } else{
        console.log("You Win!")
    }
}
fullGame();