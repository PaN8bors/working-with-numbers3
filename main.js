import input from 'input';

async function main() {
        const oneStr = await input.text('Enter a number');
        const twoStr = await input.text('Enter another number');
        const option = await input.select ("Choose an option", ["max", "min"]);
        const oneNum = Number(oneStr),
        twoNum = Number(twoStr);

        if ('max' == option) {
        console.log(Math.max(oneNum, twoNum));
        } else {
        console.log(Math.min(oneNum, twoNum));
        }
}

main();