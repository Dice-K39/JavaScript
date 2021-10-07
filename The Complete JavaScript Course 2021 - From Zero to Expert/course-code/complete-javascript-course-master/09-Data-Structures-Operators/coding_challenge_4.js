document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const button = document.querySelector("button");
button.addEventListener("click", () =>
{
    const textarea = document.querySelector("textarea").value;
    const textArr = textarea.split('\n');

    for (const [i, text] of textArr.entries())
    {
        const [first, second] = text.toLowerCase().trim().split('_');
        const result = `${first}${second.replace(second[0], second[0].toUpperCase())}`;

        console.log(result.padEnd(20, ' ') + `${'✅'.repeat(i + 1)}`);
        // const textLower = text.toLowerCase();
        // const textArray = textLower.split('_');
        // const result = textArray[0] + textArray[1][0].toUpperCase() + textArray[1].slice(1);

        // console.log(`${result.trim()} ${'✅'.repeat(i + 1)}`);
    }
});