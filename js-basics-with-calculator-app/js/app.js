const defaultResult = 0;
let currentResult = defaultResult;
const logOfOperations = [];

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

// Adding (sabiranje)
function add() {
    const enteredNumber = getUserInput();
    const initResult = currentResult;
    currentResult += enteredNumber; // 0 + 55 = 55
    writeOutput('+', initResult, enteredNumber);
    writeToOperationsHistory('ADDING', initResult, enteredNumber, currentResult);
}

btnAdd.addEventListener('click', add);

// TODO 4. cas JS-a Homework:

/**
 * 1. Uraditi sve isto za oduzimanje, mnozenje, deljenje
 * 2. Napraviti novi feature koji ce staru vrednost podizati na broj koji smo uneli u Input polje (hint: **)
 * 3. Implementirati Clear feature (dodati handler za dugme C)
 */