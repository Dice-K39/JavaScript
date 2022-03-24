"use strict";

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
};

const displayScore = function (score) {
    document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);

    // when there is no input
    if (!guess) {
        displayMessage("⛔️　No number!");
    }
    // when guess is correct
    else if (guess === secretNumber) {
        if (score > highScore) {
            highScore = score;

            document.querySelector(".highscore").textContent = highScore;
        }

        displayMessage("✅ Correct Number!");

        document.querySelector(".number").textContent = secretNumber;

        document.querySelector("body").style.backgroundColor = "#60b347";

        document.querySelector(".number").style.width = "30rem";
    }
    // when guess is wrong
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(
                guess > secretNumber ? "📈 Too high!" : "📉 Too low!"
            );

            score--;
            displayScore(score);
        } else {
            displayMessage("💥 You lost the game!");
            displayScore(0);
        }
    }
});

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".guess").value = "";
    displayMessage("Start guessing...");
    displayScore(0);
});
