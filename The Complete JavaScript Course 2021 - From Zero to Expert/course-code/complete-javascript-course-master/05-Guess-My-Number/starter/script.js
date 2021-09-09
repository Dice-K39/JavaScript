'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;

const displayMessage = (message) =>
{
    document.querySelector(".message").textContent = message;
}
const displayScore = (score) =>
{
    document.querySelector(".score").textContent = score;
}

document.querySelector(".check").addEventListener("click", () =>
{
    const guess = Number(document.querySelector(".guess").value);

    if (!guess)
    {
        displayMessage("No Number!");
    }
    else if (guess === secretNumber)
    {
        document.querySelector(".number").textContent = secretNumber;
        displayMessage("Correct Number!");
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";

        if (score > highscore)
        {
            highscore = score;

            document.querySelector(".highscore").textContent = highscore
        }
    }
    else if (guess !== secretNumber)
    {
        if (score > 1)
        {
            displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
    
            score--;
    
            displayScore(score);
        }
        else
        {
            displayMessage("You lost the game!");
            displayScore(0);
        }
    }
});

document.querySelector(".again").addEventListener("click", () =>
{
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayScore(score);
    displayMessage("Start guessing...");
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});