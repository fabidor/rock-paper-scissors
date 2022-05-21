let arr = ["rock", "paper", "scissors"]
function computerChoose(){
    return arr[Math.floor(Math.random()*arr.length)];
}
let compChoice = computerChoose();
console.log(compChoice);
let personChoice = prompt("Choose Rock, Paper, or Scissors", "").toLowerCase();

function RPS(compChoice, personChoice){
    console.log(personChoice);
    if (personChoice != "rock" && personChoice != "paper" && personChoice != "scissors"){
        console.log("You didn't put in one of the choices, numbnuts.");
    } else if (personChoice == "rock"){
        switch(compChoice){
            case "rock": 
                console.log("We are Evenly Matched I see");
                break;
            case "paper":
                console.log("You Lose! Paper beats Rock");
                break;
            case "scissors":
                console.log("You Win! Rock Beats Scissors");
                break;
        }
    } else if(personChoice == "paper"){
        switch(compChoice){
            case "rock": 
                console.log("You Win! Paper Beats Rock");
                break;
            case "paper":
                console.log("We are Evenly Matched I see");
                break;
            case "scissors":
                console.log("You Lose! Scissors beats Paper");
                break;
        }
    } else if(personChoice == "scissors"){
        switch(compChoice){
            case "rock": 
                console.log("You Lose! Rock Beats Scissors");
                break;
            case "paper":
                console.log("You Win! Scissors Beats Paper");
                break;
            case "scissors":
                console.log("We are Evenly Matched I see");
                break;
        }
    }
}

RPS(compChoice, personChoice);