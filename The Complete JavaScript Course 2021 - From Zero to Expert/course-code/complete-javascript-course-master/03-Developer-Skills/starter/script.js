// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const test1 = [17, 21, 23];
const test2 = [12, 5, -5, 0, 4];

function printForecast(array)
{
    let string = "";

    for (let i = 0; i < array.length; i++)
    {
        string += `${array[i]}°C in ${i + 1} days...`  
    }

    console.log(string);
}

printForecast(test1);
printForecast(test2);