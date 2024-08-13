const equation = document.querySelector('#equation');
const checkButton = document.querySelector('#checkButton');
const answer = document.querySelector('#answer');

console.log(answer);

let calculation;

function startGame() {
    checkButton.innerHTML = "CHECK";
    answer.value = "";
    console.log('It works');

    const firstNumFirstDigit = number();
    const firstNumSecondDigit = number();
    const secondNumFirstDigit = number();
    const secondNumSecondDigit = number();
    let symbol = symbolGenerator();
    calculation = firstNumFirstDigit + firstNumSecondDigit + symbol + secondNumFirstDigit + secondNumSecondDigit;

    console.log(calculation);
    console.log(eval(calculation));

    equation.innerHTML = calculation;

    function symbolGenerator() {

        let number = Math.random();
        console.log(number);
        let result;

        if (number >= 0 && number <= 0.5) {
            result = " + ";
        } else if (number > 0.5 && number < 1) {
            result = " - ";
        }

        return result;
    }

    function number() {
        console.log("Calculating...")
        let generate = Math.random();
        let result;

        if (generate >= 0 && generate < 0.1) {
            result = 0;
        } else if (generate >= 0.1 && generate < 0.2) {
            result = 1;
        } else if (generate >= 0.2 && generate < 0.3) {
            result = 2;
        } else if (generate >= 0.3 && generate < 0.4) {
            result = 3;
        } else if (generate >= 0.4 && generate < 0.5) {
            result = 4;
        } else if (generate >= 0.5 && generate < 0.6) {
            result = 5;
        } else if (generate >= 0.6 && generate < 0.7) {
            result = 6;
        } else if (generate >= 0.7 && generate < 0.8) {
            result = 7;
        } else if (generate >= 0.8 && generate < 0.9) {
            result = 8;
        } else if (generate >= 0.9 && generate <= 1) {
            result = 9;
        }

        return result;
    }
}

function checkEquation() {
    console.log(answer.value);
    console.log(eval(calculation));
    if (answer.value.toString() == eval(calculation).toString()) {
        checkButton.innerHTML = "Correct!";
    } else if (answer.value.toString !== eval(calculation).toString) {
        checkButton.innerHTML = "Try Again";
    }
}