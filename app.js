let userScore = 0;
let cpuScore = 0;
const userScore_span = document.getElementById("user-score");
const cpuScore_span = document.getElementById("cpu-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertWord(char){
    switch(char){
        case "r":
            return "Rock";
        case "p":
            return "Paper";
        case "s":
            return "Scissors";    
    }
}

function win(user, computer){
    //console.log("w")
    userScore++;
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
    result_p.innerHTML = convertWord(user) + " es mejor que " + convertWord(computer) + ". You WIN."
}

function lose(user, computer){
    //console.log("l")
    cpuScore++;
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
    result_p.innerHTML = convertWord(user) + " es peor que " + convertWord(computer) + ". You LOSE."
}

function tie(user, computer){
    //console.log("t")
    //console.log(userScore + " " + cpuScore);
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
    result_p.innerHTML = convertWord(user) + " es igual que " + convertWord(computer) + ". You TIE."
}


function game(userChoice){
    //console.log("user: " + userChoice + " cpu: " + getComputerChoice());
    const cpuChoice = getComputerChoice();
    switch(userChoice + cpuChoice){
        case "rs":
        case "pr":
        case "sp":
            //console.log("You WIN.");
            win(userChoice, cpuChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            //console.log("You LOSE.");
            lose(userChoice, cpuChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            //console.log("You TIE.");
            tie(userChoice, cpuChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function(){
        //console.log("press on rock")
        game("r");
    })


    paper_div.addEventListener('click', function(){
        //console.log("press on paper")
        game("p");
    })


    scissors_div.addEventListener('click', function(){
        //console.log("press on scissors")
        game("s");
    })
}


main();