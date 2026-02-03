
const NUMBER_STRING = "0123456789abcdefghijklmnopqrstuvwxyz";


export function convertToBase(number, base) {
    // console.log(`CONVERT TO BASE: ${number} into ${base}`);
    let result = [];
    while (number > 0) {
        result.push(number % base);
        number = Math.floor(number / base);
        // console.log(`  ${number} % ${base} = ${number % base}, ${number} / ${base} = ${number / base}`);
    }
    // console.log(`  --Result: ${JSON.stringify(result)}`);
    let returnString = "";
    for (let i = result.length-1; i >= 0; i--) {
        returnString += NUMBER_STRING[result[i]];
    }
    // console.log(`  --Return: ${returnString}`);
    return returnString;
}


export function minNumber(numDigits) {
    switch (numDigits) {
        case 1: return 1;
        case 2: return 10;
        case 3: return 100;
        case 4: return 1000;
        default: return 10000;
    }
}
export function maxNumber(numDigits) {
    switch (numDigits) {
        case 1: return 9;
        case 2: return 99;
        case 3: return 999;
        case 4: return 9999;
        default: return 99999;
    }
}