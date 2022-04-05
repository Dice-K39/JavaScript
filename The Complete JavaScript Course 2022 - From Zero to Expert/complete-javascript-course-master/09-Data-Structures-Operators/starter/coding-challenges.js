"use strict";

console.log("--------------- Coding Challenges ---------------");
const game = {
    team1: "Bayern Munich",
    team2: "Borrussia Dortmund",
    players: [
        [
            "Neuer",
            "Pavard",
            "Martinez",
            "Alaba",
            "Davies",
            "Kimmich",
            "Goretzka",
            "Coman",
            "Muller",
            "Gnarby",
            "Lewandowski",
        ],
        [
            "Burki",
            "Schulz",
            "Hummels",
            "Akanji",
            "Hakimi",
            "Weigl",
            "Witsel",
            "Hazard",
            "Brandt",
            "Sancho",
            "Gotze",
        ],
    ],
    score: "4:0",
    scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
    date: "Nov 9th, 2037",
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};
/*
/////////////////////////////////////////////////////////////////
// Coding Challenge 2
// 1
for (const [i, scorer] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${scorer}`);
}

// 2
const values = Object.values(game.odds);
let sum = 0;
for (const value of values) {
    sum += value;
}
console.log((sum / values.length).toFixed(2));

// 3
const entries = Object.entries(game.odds);
for (const [team, odd] of entries) {
    const str = team === "x" ? "draw" : `victory ${game[team]}`;
    console.log(`Odd of ${str}: ${odd}`);
}

// 4
const scorers = {};
for (const scorer of game.scored) {
    scorers[scorer] ? (scorers[scorer] += 1) : (scorers[scorer] = 1);
}
console.log(scorers);
/////////////////////////////////////////////////////////////////
// Coding Challenge 1
// 1
const [players1, players2] = game.players;
console.log(players1, players2);

// 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

// 5
const { team1, x: draw, team2 } = game.odds;
// const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2);

// 6
const printGoals = function (...players) {
    let score = 0;

    for (let i = 0; i < players.length; i++) {
        console.log(`${players[i]}`);
        score++;
    }

    console.log(`Total Points: ${score}`);
};
printGoals("a", "b", "c");
printGoals("x");

// 7
team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 1 is more likely to win");
*/
