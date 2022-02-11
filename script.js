"use strict";

let currScore = 20;
let highScore = 0;
let randNum = Math.trunc(Math.random() * 20) + 1;

function changeText(target, input){
    document.querySelector(target).textContent = input;
}

document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess);
    //incorrect guess
    if(!guess){
        if(currScore<=1){
            changeText(".message","You lost, try again!")
            return;
        }
        changeText(".message","No input");
        //correct guess
    }else if(guess === randNum){
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        changeText(".number", String(randNum));
        changeText(".message", "Correct");
        if(currScore>highScore){
            highScore = currScore;
            changeText(".highscore", String(currScore));
        }
    }else if(guess > randNum){
        if(currScore<=1){
            changeText(".message","You lost, try again!");
            changeText(".score", "0");
            return;
        }   
        changeText(".message", "Too big");
        currScore--;
        changeText(".highscore", String(currScore));
    }else if(guess < randNum){
        if(currScore<=1){
            changeText(".message","You lost, try again!")
            changeText(".score", "0");
            return;
        }
        changeText(".message","Too small");
        currScore--;
        changeText(".highscore", String(currScore));
    }
});

document.querySelector(".again").addEventListener("click",function() {
    currScore = 20;
    randNum = Math.trunc(Math.random() * 20) + 1;
    changeText(".number", "?");
    changeText(".score", "20");
    changeText(".guess", " ");
    changeText(".message", "Start guessing...");
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});