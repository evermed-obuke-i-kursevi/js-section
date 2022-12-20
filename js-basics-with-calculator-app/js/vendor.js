// ! This file will keep references to all the DOM elements we need to listen to

const userInput = document.querySelector('.js-input-number');
const btnMultiply = document.getElementById('btn-multiply');
const btnDivide = document.getElementById('btn-divide');
const btnAdd = document.getElementById('btn-add');
const btnSubtract = document.getElementById('btn-subtract');
const btnClear = document.getElementById('btn-clear');
const btnExponent = document.getElementById('btn-exponent');

const currentResultOutput = document.querySelector('.js-current-calculation');
const currentCalculationOutput = document.querySelector('.js-current-result');

function outputResult(result, description) {
    currentCalculationOutput.textContent = result;
    currentResultOutput.textContent = description;
}