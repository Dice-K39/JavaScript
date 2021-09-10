'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;

const messageField = document.querySelector(".message");
const scoreField = document.querySelector(".score");
const numberField = document.querySelector(".number");
const guessField = document.querySelector(".guess");
const bodyField = document.querySelector("body");

const displayMessage = (message) =>
{
    messageField.textContent = message;
}
const displayScore = (score) =>
{
    scoreField.textContent = score;
}

document.querySelector(".check").addEventListener("click", () =>
{
    const guess = Number(guessField.value);

    if (!guess)
    {
        displayMessage("No Number!");
    }
    else if (guess === secretNumber)
    {
        numberField.textContent = secretNumber;
        displayMessage("Correct Number!");
        bodyField.style.backgroundColor = "#60b347";
        numberField.style.width = "30rem";

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
    numberField.textContent = "?";
    guessField.value = "";
    bodyField.style.backgroundColor = "#222";
    numberField.style.width = "15rem";
});