console.log("Level 14");

let numberA = 10;
let numberB = 5;
console.log(`${numberA} + ${numberB} =`, numberA + numberB);
console.log(`${numberA} + ${numberB} =`, numberA - numberB);
console.log(`${numberA} + ${numberB} =`, numberA * numberB);
console.log(`${numberA} + ${numberB} =`, numberA / numberB);
console.log(`${numberA} + ${numberB} =`, numberA % numberB);

console.log("Level 15");

function add(number1, number2) {
    return number1 + number2;
}

function substract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

function modulo(number1, number2) {
    return number1 % number2;
}

console.log(`${numberA} + ${numberB} =`, add(numberA, numberB));
console.log(`${numberA} + ${numberB} =`, substract(numberA, numberB));
console.log(`${numberA} + ${numberB} =`, multiply(numberA, numberB));
console.log(`${numberA} + ${numberB} =`, divide(numberA, numberB));
console.log(`${numberA} + ${numberB} =`, modulo(numberA, numberB));

console.log("Level 16");

console.log(add(substract(numberA, numberB), multiply(numberA, numberB)));
console.log(add(divide(numberA, numberB), modulo(numberA, numberB)));
console.log(substract(add(numberA, numberB), multiply(numberA, numberB)));
console.log(multiply(add(substract(numberA, numberB), multiply(numberA, numberB)), divide(substract(numberA, numberB), multiply(numberA, numberB))));