const gameEvents = new Map(
    [
        [17, "GOAL"],
        [36, "Substitution"],
        [47, "GOAL"],
        [61, "Substitution"],
        [64, "Yellow card"],
        [69, "Red card"],
        [70, "Substitution"],
        [72, "Substitution"],
        [76, "GOAL"],
        [80, "GOAL"],
        [92, "Yellow card"]
    ]
)

// 1
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2
gameEvents.delete(64);
console.log(gameEvents);

// 3
// const time = [...gameEvents.keys()].pop();;
console.log(`An event happend, on average, every ${90 / gameEvents.size} minutes`);

// 4
for (const [min, event] of gameEvents)
{
    let str = "";

    min < 45 ? str += "[FIRST HALF]" : str += "[SECOND HALF]";

    console.log(`${str} ${min}: ${event}`);
}