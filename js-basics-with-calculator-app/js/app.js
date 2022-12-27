const defaultResult = 0;
let currentResult = defaultResult;
let logOfOperations = [];

function getUserInput() {
    return +userInput.value; // konvertujemo unet tekst u polje u NUMBER
}

function writeOutput(operator, resultBeforeCalculation, calculationNumber) {
    const calculationDescription = `${resultBeforeCalculation} ${operator} ${calculationNumber}`; // npr '4 + 2'
    outputResult(currentResult, calculationDescription);
}

function writeToOperationsHistory(typeOfOperation, previousResult, enteredNumber, newResult) {
    const logEntry = {
        operation: typeOfOperation,
        previousResult: previousResult,
        operationNumber: enteredNumber,
        newResult: newResult
    };
    logOfOperations.push(logEntry);
    console.log(logOfOperations);
}

// ! Version 1 - Without IF - ELSE or SWITCH methods
// // Adding (sabiranje)
// function add() {
//     const enteredNumber = getUserInput();
//     const initResult = currentResult;
//     currentResult += enteredNumber; // 0 + 55 = 55
//     writeOutput('+', initResult, enteredNumber);
//     writeToOperationsHistory('ADDING', initResult, enteredNumber, currentResult);
// }

// // Subtract (oduzimanje)
// function subtract() {
//     const enteredNumber = getUserInput();
//     const initResult = currentResult;
//     currentResult -= enteredNumber; // 5 - 3 = 2
//     writeOutput('-', initResult, enteredNumber);
//     writeToOperationsHistory('SUBTRACT', initResult, enteredNumber, currentResult);
// }

// // Multiply (mnozenje)
// function multiply() {
//     const enteredNumber = getUserInput();
//     const initResult = currentResult;
//     currentResult *= enteredNumber; // 3 * 3 = 9
//     writeOutput('*', initResult, enteredNumber);
//     writeToOperationsHistory('MULTIPLY', initResult, enteredNumber, currentResult);
// }

// // Divide (deljenje)
// function divide() {
//     const enteredNumber = getUserInput();
//     const initResult = currentResult;
//     currentResult /= enteredNumber; // 4 / 2 = 2
//     writeOutput('/', initResult, enteredNumber);
//     writeToOperationsHistory('DIVIDE', initResult, enteredNumber, currentResult);
// }

// // EXPONENTIATION (na n-ti)
// function exponentiation() {
//     const enteredNumber = getUserInput();
//     const initResult = currentResult;
//     currentResult **= enteredNumber; // 2 ** 3 = 8
//     writeOutput('**', initResult, enteredNumber);
//     writeToOperationsHistory('EXPONENTIATION', initResult, enteredNumber, currentResult);
// }

// ! Version 2 - with IF - ELSE IF - ELSE blocks

// function mathOperation(operationType) {
//     const enteredNumber = getUserInput();
//     const initialResult = currentResult;
//     let operationSign = '';
//     if(operationType === 'PLUS') {
//         currentResult += enteredNumber;
//         operationSign = '+';
//     } else if(operationType === 'SUBTRACT') {
//         currentResult -= enteredNumber;
//         operationSign = '-';
//     } else if(operationType === 'MULTIPLY') {
//         currentResult *= enteredNumber;
//         operationSign = '*';
//     } else if(operationType === 'DIVIDE') {
//         currentResult /= enteredNumber;
//         operationSign = '/';
//     } else {
//         currentResult **= enteredNumber;
//         operationSign = '**';
//     }
//     writeOutput(operationSign, initialResult, enteredNumber);
//     writeToOperationsHistory(operationType, initialResult, enteredNumber, currentResult);
// }


// ! Version 3 - SWITCH CASE version

function mathOperation(operationType) {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    let operationSign = '';
    switch(operationType) {
        case 'PLUS':
            currentResult += enteredNumber;
            operationSign = '+';
            break;
        case 'SUBTRACT':
            currentResult -= enteredNumber;
            operationSign = '-';
            break;
        case 'MULTIPLY':
            currentResult *= enteredNumber;
            operationSign = '*';
            break;
        case 'DIVIDE':
            currentResult /= enteredNumber;
            operationSign = '/';
            break;
        default:
            currentResult **= enteredNumber;
            operationSign = '**';
            break;
    }
    writeOutput(operationSign, initialResult, enteredNumber);
    writeToOperationsHistory(operationType, initialResult, enteredNumber, currentResult);
}

function add() {
    mathOperation('PLUS');
}

function subtract() {
    mathOperation('SUBTRACT');
}

function multiply() {
    mathOperation('MULTIPLY');
}

function divide() {
    mathOperation('DIVIDE');
}

function exponentiation() {
    mathOperation('EXPONENTIATION');
}

// clear (resets: current result, input of user, deletes the log and outputs)
function clear() {
    currentResult = 0;
    userInput.value = 0;
    logOfOperations = [];
    currentCalculationOutput.textContent = 0;
    currentResultOutput.textContent = 0;
}

btnAdd.addEventListener('click', add);
btnSubtract.addEventListener('click', subtract);
btnMultiply.addEventListener('click', multiply);
btnDivide.addEventListener('click', divide);
btnExponent.addEventListener('click', exponentiation);
btnClear.addEventListener('click', clear);

// TODO 4. cas JS-a Homework:

/**
 * 1. Uraditi sve isto za oduzimanje, mnozenje, deljenje
 * 2. Napraviti novi feature koji ce staru vrednost podizati na broj koji smo uneli u Input polje (hint: **)
 * 3. Implementirati Clear feature (dodati handler za dugme C)
 */