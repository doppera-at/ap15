import { convertToBase, minNumber, maxNumber } from './utils-numbers.js';

let minBase = 2;
let maxBase = 20;
let numDigits = 2;

let minNum = 0;
let maxNum = 0;

let exercises = [];

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
    minNum = minNumber(numDigits);
    maxNum = maxNumber(numDigits);
    console.log(`Exercise started! MinNum: ${minNum}, MaxNum: ${maxNum}, NumDigits: ${numDigits} (from ${minNum} to ${maxNum})`);
    nextExercise();
}
function nextExercise() {
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


document.getElementById("startButton").addEventListener("click", startExercises);
document.getElementById("nextButton").addEventListener("click", nextExercise);