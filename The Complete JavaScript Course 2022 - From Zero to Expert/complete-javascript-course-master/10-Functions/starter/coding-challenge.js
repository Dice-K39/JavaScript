"use strict";

console.log("--------------- Coding Challenge ---------------");

/*
/////////////////////////////////////////////////////////////////
// Coding Challenge 1
const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),

    registerNewAnswer() {
        const answer = Number(
            prompt(
                `${this.question}\n${this.options.join(
                    "\n"
                )}\n(Write option number)`
            )
        );
        console.log(answer);

        typeof answer === "number" &&
            answer < this.answers.length &&
            answer >= 0 &&
            this.answers[answer]++;

        this.displayResults();
        this.displayResults("string");
    },
    // // 1.1
    // registerNewAnswer() {
    //     const answer = prompt(`${this.question}\n${this.printOptions()}`);

    //     // 1.2
    //     if (answer < this.options.length && answer >= 0) {
    //         this.answers[answer]++;
    //     } else {
    //         console.log("Please choose a valid option.");
    //     }
    //     console.log(this.displayResults());
    // },
    // printOptions() {
    //     let str = "";

    //     for (const o of this.options) {
    //         str += `${o}\n`;
    //     }

    //     return str + "(Write option number)";
    // },
    displayResults(type = "array") {
        if (type === "array") {
            console.log(this.answers);
        } else if (type === "string") {
            console.log(`Poll results are ${this.answers.join(", ")}`);
        }
    },
    // // 3
    // displayResults(type = "array") {
    //     let str = "";

    //     if (type.toLowerCase() === "array") {
    //         str = this.answers;
    //     } else if (type.toLowerCase() === "string") {
    //         str = `Poll results are ${this.answers.join(",")}`;
    //     }

    //     return str;
    // },
};

// 2
document
    .querySelector(".poll")
    .addEventListener("click", poll.registerNewAnswer.bind(poll));

// // 4
// const arrayResults1 = poll.displayResults.bind("array", [5, 2, 3]);
// const stringResults1 = poll.displayResults.bind("string", [5, 2, 3]);

poll.displayResults.call({ answers: [5, 2, 3] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
/////////////////////////////////////////////////////////////////
*/
