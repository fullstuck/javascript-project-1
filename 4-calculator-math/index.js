console.log("Level 14");

let numberA = 10;
let numberB = 5;
console.log('Add = ', numberA + numberB);
console.log('Substract = ', numberA - numberB);
console.log('Multiply = ', numberA * numberB);
console.log('Divide = ', numberA / numberB);
console.log('Modulo = ', numberA % numberB);

console.log("Level 15");

function add(param1, param2) {
    return param1 + param2;
}

function substract(param1, param2) {
    return param1 - param2;
}

function multiply(param1, param2) {
    return param1 * param2;
}

function divide(param1, param2) {
    return param1 / param2;
}

function modulo(param1, param2) {
    return param1 % param2;
}

console.log(add(numberA, numberB));
console.log(substract(numberA, numberB));
console.log(multiply(numberA, numberB));
console.log(divide(numberA, numberB));
console.log(modulo(numberA, numberB));

console.log("Level 16");

console.log(add(substract(numberA, numberB), multiply(numberA, numberB)));
console.log(add(divide(numberA, numberB), modulo(numberA, numberB)));
console.log(substract(add(numberA, numberB), multiply(numberA, numberB)));
console.log(multiply(add(substract(numberA, numberB), multiply(numberA, numberB)), divide(substract(numberA, numberB), multiply(numberA, numberB))));