import { getDigitsListComponent } from "./calc-digits.js";
import {getOperatorsListComponent} from "./calc-operators.js";
const displayInput = document.querySelector(".display")
const operatorsWrapper = document.querySelector(".operators")
const digitsWrapper = document.querySelector(".digit")
const inputNumbers = [0, 0];
let position = 0;
let displayNum = 0;

function updateDisplayInput(digit = 0){
    displayInput.value = displayNum = (displayNum * 10) + digit;
}

function updateCurrentNumber(number) {
    inputNumbers[position] = number;
    position = 1;
}

updateDisplayInput()

const operatorsList = getOperatorsListComponent(operatorsWrapper, function(sign) {
    updateCurrentNumber();
})

const digitsList = getDigitsListComponent(digitsWrapper, function(number) {
    updateDisplayInput(digit);
    updateCurrentNumber();
})

function clear(event) {
    const inputNumbers = [0, 0];
    position = 0;
    displayInput.value = displayNum = 0;
}