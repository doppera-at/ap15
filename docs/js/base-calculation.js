import { convertToBase, minNumber, maxNumber } from './utils-numbers.js';

let minNum = 0;
let maxNum = 0;

let numDigits = 2;
let base = 2;

let addition = false;
let subtraction = false;
let multiplication = false;
let division = false;
let possibleOperations = [];

let exercises = [];

function readInputs() {
    base = parseInt(document.getElementById("baseSelect").value);
    numDigits = parseInt(document.getElementById("numDigitsSelect").value);

    addition = document.getElementById("additionCheckbox").checked;
    subtraction = document.getElementById("subtractionCheckbox").checked;
    multiplication = document.getElementById("multiplicationCheckbox").checked;
    division = document.getElementById("divisionCheckbox").checked;
}


function startExercises() {
    readInputs();
    if (!(addition || subtraction || multiplication || division)) {
        alert("Please select at least one operation!");
        return;
    }
    document.getElementById("exerciseForm").classList.add("hidden");
    document.getElementById("exercises").classList.remove("hidden");

    if (addition) possibleOperations.push("addition");
    if (subtraction) possibleOperations.push("subtraction");
    if (multiplication) possibleOperations.push("multiplication");
    if (division) possibleOperations.push("division");
    if (possibleOperations.length === 0) {
        alert("No operations selected!");
        return;
    }

    minNum = minNumber(numDigits);
    maxNum = maxNumber(numDigits);
    console.log(`Exercise started! Base: ${base}, NumDigits: ${numDigits} (from ${minNum} to ${maxNum})`);
    nextExercise();
}

function nextExercise() {
    let operation = possibleOperations[Math.floor(Math.random() * possibleOperations.length)];

    let firstNumber = Math.floor(Math.random() * (maxNum - minNum) + minNum);
    let secondNumber = Math.floor(Math.random() * (firstNumber - minNum) + minNum);

    let result = null;

    switch (operation) {
        case "addition":
            result = firstNumber + secondNumber;
            break;
        case "subtraction":
            result = firstNumber - secondNumber;
            break;
        case "multiplication":
            secondNumber = Math.floor(Math.random() * (maxNumber(1) - minNumber(1)) + minNumber(1));
            result = firstNumber * secondNumber;
            break;
        case "division":
            secondNumber = Math.floor(Math.random() * (maxNumber(1) - minNumber(1)) + minNumber(1));
            result = Math.floor(firstNumber / secondNumber);
            break;
        default:
            console.log(`ERROR: Unknown operation ${operation}`);
            return;
    }

    // console.log(`FirstNumber: ${firstNumber}, SecondNumber: ${secondNumber}, Operation: ${operation}, Result: ${result}`);
    exercises.push({firstNumber: firstNumber, secondNumber: secondNumber, operation: operation, result: result});
    showExercises();
    window.scrollTo(0, document.body.scrollHeight);
}

function showExercises() {
    const divCalculations = document.getElementById("exerciseCalculations");
    divCalculations.innerHTML = "";

    for (let i = 0; i < exercises.length; i++) {
        const exercise = exercises[i];
        let outputString = "<p>";

        let opSymbol = "";
        switch (exercise["operation"]) {
            case "addition": opSymbol = "+"; break;
            case "subtraction": opSymbol = "-"; break;
            case "multiplication": opSymbol = "×"; break;
            case "division": opSymbol = "÷"; break;
        }

        outputString += `<b>${convertToBase(exercise["firstNumber"], base)}</b> ${opSymbol} <b>${convertToBase(exercise["secondNumber"], base)}</b> =`;
        if (i+1 < exercises.length) {
            outputString += ` <b>${convertToBase(exercise["result"], base)}</b>`;
        }
        outputString += "</p>";
        divCalculations.innerHTML += outputString;
    }
}


document.getElementById("startButton").addEventListener("click", startExercises);
document.getElementById("nextButton").addEventListener("click", nextExercise);
    