const NUMBER_STRING = "0123456789abcdefghijklmnopqrstuvwxyz";

let minBase = 2;
let maxBase = 20;
let numDigits = 2;

let exercises = [];

function convertToBase(number, base) {
    console.log(`CONVERT TO BASE: ${number} into ${base}`);
    let result = [];
    while (number > 0) {
        result.push(number % base);
        number = Math.floor(number / base);
        console.log(`  ${number} % ${base} = ${number % base}, ${number} / ${base} = ${number / base}`);
    }
    console.log(`  --Result: ${JSON.stringify(result)}`);
    let returnString = "";
    for (let i = result.length-1; i >= 0; i--) {
        returnString += NUMBER_STRING[result[i]];
    }
    console.log(`  --Return: ${returnString}`);
    return returnString;
}

function readInputs() {
    minBase = parseInt(document.getElementById("fromBaseSelect").value);
    maxBase = parseInt(document.getElementById("toBaseSelect").value);
    if (maxBase <= minBase) {
        console.log(`MaxBase (${maxBase}) cannot be lower than or equal to the MinBase (${minBase})! Adjusting value..`);
        maxBase = minBase+1;
    }
    numDigits = parseInt(document.getElementById("numDigitsSelect").value);
}

function startExercises() {
    readInputs();
    document.getElementById("exerciseForm").classList.add("hidden");
    document.getElementById("exercises").classList.remove("hidden");
    console.log("Exercises started!");
    console.log(`MinBase: ${minBase}`);
    console.log(`MaxBase: ${maxBase}`);
    console.log(`NumDigits: ${numDigits}`);
    nextExercise();
}
function nextExercise() {
    minNum = minNumber(numDigits);
    maxNum = maxNumber(numDigits);
    console.log(`MinNum: ${minNum}, MaxNum: ${maxNum}`);

    let number = Math.floor(Math.random() * (maxNum - minNum) + minNum);
    let fromBase = Math.floor(Math.random() * (maxBase - minBase) + minBase);
    let toBase = Math.floor(Math.random() * (maxBase - minBase) + minBase);
    console.log(`Number: ${number}, FromBase: ${fromBase}, ToBase: ${toBase}`);

    let result = convertToBase(number, toBase);
    number = convertToBase(number, fromBase);

    exercises.push({num: number, fromBase: fromBase, toBase: toBase, result: result});
    showExercises();
    window.scrollTo(0, document.body.scrollHeight);
}
function showExercises() {
    const divCalculations = document.getElementById("exerciseCalculations");
    divCalculations.innerHTML = "";
    // console.log(`Exercises: ${JSON.stringify(exercises)}`);
    for (let i = 0; i < exercises.length; i++) {
        const exercise = exercises[i];
        let outputString = "<p>";
        // console.log(`  Entry: ${JSON.stringify(exercise)}`);
        outputString += `<b>${exercise["num"]}</b> from base <b>${exercise["fromBase"]}</b> into <b>${exercise["toBase"]}</b> =`;
        if (i+1 < exercises.length) {
            outputString += ` ${exercise["result"]}`;
        }
        outputString += "</p>";
        divCalculations.innerHTML += outputString;
    }
}

function minNumber(numDigits) {
    switch (numDigits) {
        case 2: return 10;
        case 3: return 100;
        case 4: return 1000;
        default: return 10000;
    }
}
function maxNumber(numDigits) {
    switch (numDigits) {
        case 2: return 99;
        case 3: return 999;
        case 4: return 9999;
        default: return 99999;
    }
}