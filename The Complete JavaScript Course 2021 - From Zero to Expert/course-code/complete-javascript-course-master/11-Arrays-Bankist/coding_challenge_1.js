const julia1 = [3, 5, 2, 12, 7];
const kate1 = [4, 1, 15, 8, 3];

const julia2 = [9, 16, 6, 8, 3];
const kate2 = [10, 5, 6, 1, 4];

const checkDogs = function(julia, kate)
{
    const juliaCorrected = julia.slice(1, 3);
    const both = [...juliaCorrected, ...kate];
    let str = "";
    
    both.forEach(function(age, i)
    {
        age >= 3 ? str = `Dog number ${i + 1} is an adult, and is ${age}` : str = `Dog number ${i + 1} is still a puppy 🐶 `;

        console.log(str);
    });
}
checkDogs(julia1, kate1);
console.log("------------------------------");
checkDogs(julia2, kate2);