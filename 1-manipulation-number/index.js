console.log("Level 0");
var numberA = 10;
let numberB = 099;
const numberC = 0.02;
console.log(numberA);
console.log(numberB);
console.log(numberC);

console.log("Level 1");
console.log(numberA + numberB);
console.log(numberA - numberC);
console.log(numberB * numberC);
console.log(numberA / numberC);
console.log(numberA % numberB);

console.log("Level 2");
var string = "8";
let bigNumber = 999999999;
let negativeNumber = -10;
const boolean = false;
console.log(numberA + string);
console.log(numberB - bigNumber);
console.log(numberC * negativeNumber);
console.log(numberA / boolean);

console.log("Level 3");
let array = [10, 099, 0.02, -11];
array.push("test");
array.push(true);
for (i = 0; i <= array.length; i++) {
    console.log(array[i]);
}