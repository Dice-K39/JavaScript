// Coding Challenge 1
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

// Coding Challenge 2
const calcTip = (bill) =>
{
    return (bill >= 50 && bill < 300) ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
let tips = [];
let total = [];

bills.forEach((bill) =>
{
    tips.push(calcTip(bill));

    total.push(bill + calcTip(bill));
})

console.log("Tips: " + tips);
console.log("Totals: " + total)

// Coding Challenge 3
let mark =
{
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function()
    {
        this.bmi = this.mass / this.height ** 2;

        return this.bmi; 
    }
}

let john =
{
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function()
    {
        this.bmi = this.mass / this.height ** 2;

        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi)
{
    console.log(`Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi})`);
}
else
{
    console.log(`John's BMI (${john.bmi}) is higher than Mark's (${mark.bmi})`);
}