const poll = 
{
    question: "What is your favorite programming language?",
    options: 
    [
        "0: JavaScript",
        "1: Python",
        "2: Rust",
        "3: C++"
    ],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    // 1
    registerNewAnswer()
    {
        // 1.1
        const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));

        typeof answer === "number" && (answer <= 3 && answer >= 0) && this.answers[answer]++;
        
        // 4
        this.displayResults();
        this.displayResults("string");
    },
    // 3
    displayResults(type = "array")
    {
        typeof type === "string" ? console.log(`Poll results are ${this.answers.join(", ")}`): console.log(this.answers);
    }
};
// 2
document.querySelector(".poll").addEventListener("click", poll.registerNewAnswer.bind(poll));

// BONUS
poll.displayResults.call({ answers: [5, 2, 3] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] })