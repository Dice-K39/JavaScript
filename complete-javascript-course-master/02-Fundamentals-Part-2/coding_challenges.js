const calcAverage = (score1, score2, score3) =>
{
    return (score1 + score2 + score3) / 3;
}

const checkWinner = (avgDolphins, avgKoalas) =>
{
    if (avgDolphins > avgKoalas * 2)
    {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if (avgKoalas > avgDolphins * 2)
    {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }
    else
    {
        console.log("No team wins.");
    }
}

checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49));
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));