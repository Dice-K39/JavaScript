"use strict";

console.log("------------ Coding Challenge ------------");
/*
// #1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const checkWinner = function (avgDolphins, avgKoalas)
{
    if (avgDolphins >= avgKoalas * 2)
    {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    }
    else if (avgKoalas >= avgDolphins * 2)
    {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    }
    else
    {
        console.log("No team wins.");
    }
}

checkWinner(calcAverage(44, 23, 71), calcAverage(66, 54, 49));
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));
/////////////////////////////////////////////////////////////////
// #2
const calcTip = (bill) => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
const bills = [125, 555, 44];
const tips =[calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(`Bill 1: Bill \$${bills[0]} \+ Tip \$${tips[0]} \= Total \$${total[0]}`);
console.log(`Bill 2: Bill \$${bills[1]} \+ Tip \$${tips[1]} \= Total \$${total[1]}`);
console.log(`Bill 3: Bill \$${bills[2]} \+ Tip \$${tips[2]} \= Total \$${total[2]}`);
/////////////////////////////////////////////////////////////////
// #3
const mark =
{
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function ()
    {
        this.bmi = this.mass / this.height ** 2;

        return this.bmi;
    }
};

const john =
{
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function ()
    {
        this.bmi = this.mass / this. height ** 2;

        return this.bmi;
    }
};

const markBMI = mark.calcBMI();
const johnBMI = john.calcBMI();

if (markBMI > johnBMI)
{
    console.log(`${mark.fullName}'s BMI (${markBMI}) is higher than ${john["fullName"]}'s (${johnBMI}).`)
}
else if (markBMI < johnBMI)
{
    console.log(`${john.fullName}'s BMI (${johnBMI}) is higher than ${mark["fullName"]}'s (${markBMI})).`)
}
/////////////////////////////////////////////////////////////////
*/
// #4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calcTip = (bill) => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;

for (let i = 0; i < bills.length; i++)
{
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);

    console.log(`Bill: \$${bills[i]} + Tip: \$${tips[i]} = Total: \$${totals[i]}`)
}

const calcAverage = function (arr)
{
    let sum = 0;

    for (let i = 0; i < arr.length; i++)
    {
        sum += arr[i];
    }

    return `Average: \$${sum / arr.length}`;
}

console.log(calcAverage(tips));
console.log(calcAverage(totals));