const game = 
{
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: 
    [
        [
            'Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies',
            'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby',
            'Lewandowski'
        ],
        [
            'Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi',
            'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho',
            'Gotze'
        ]
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: 
    {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    }
};

// 1
for (const [num, player] of game.scored.entries())
{
    console.log(`Goal ${num + 1}: ${player}`);
}

// 2
const values = Object.values(game.odds);
let result = 0;
for (const odd of values)
{
    result += odd;
}
console.log(result / values.length);

// 3
const entries = Object.entries(game.odds);
for (const [key, value] of entries)
{
    let str = "";
    const k = game[key];
    k !== undefined ? str = `Odd of victory ${k}: ${value}` : str = `Odd of draw: ${value}`;
    console.log(str);
}

// 4
const scorers = {};
for (const player of game.scored)
{
    !scorers[player] ? scorers[player] = 1 : scorers[player]++
    // if (!scorers[player])
    // {
    //     scorers[player] = 1;
    // }
    // else
    // {
    //     scorers[player] += 1;
    // }
}
console.log(scorers);