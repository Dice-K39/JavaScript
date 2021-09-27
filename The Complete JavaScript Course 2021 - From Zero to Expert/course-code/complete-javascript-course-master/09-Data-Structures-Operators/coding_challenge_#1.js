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
const [players1, players2] = game.players;
console.log(`Players 1: ${players1}`);
console.log(`Players 2: ${players2}`);

// 2
const [gk, ...fieldPlayers] = players1;
console.log(`Goalkeeper: ${gk}
Field players: ${fieldPlayers}`);

// 3
const allPlayers = [...players1, ...players2];
console.log(`All Players: ${allPlayers}`);

// 4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(`Players used: ${players1Final}`);

// 5
const {team1, draw, team2} = game.odds;
console.log(`Team 1 Win Odds: ${team1}
Draw odds: ${draw}
Team 2 Win Odds: ${team2}`);

// 6
const printGoals = function (...players)
{
    console.log(`${players.length} goals were scored by: ${players}`);
}
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

// 7
team1 < team2 && console.log("Team 1 is more likely to win");