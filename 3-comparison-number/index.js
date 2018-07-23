console.log("Level 8");

let numberA = 4;
let numberB = 6;
if (numberA > numberB) {
    console.log(`${numberA} is bigger than ${numberB}`);
} else {
    console.log(`${numberA} is smaller than ${numberB}`);
}

console.log("Level 9");

if (numberA > numberB) {
    console.log(`${numberA} is bigger than ${numberB}`);
} else if (numberA < numberB) {
    console.log(`${numberA} is smaller than ${numberB}`);
} else {
    console.log(`${numberA} is as same as ${numberB}`)
}

console.log("Level 10");

if (numberA > numberB ? console.log(`${numberA} is bigger than ${numberB}`) : console.log(`${numberA} is smaller than ${numberB}`));

console.log("Level 11");

let numberC = 5;
if (numberC < numberA) {
    console.log(`${numberC} is smaller than ${numberA}`);
} else if (numberC == numberA) {
    console.log(`${numberC} is as same as ${numberA}`);
} else if (numberC > numberA && numberC < numberB) {
    console.log(`${numberC} is bigger than ${numberA} and smaller than ${numberB}`);
} else if (numberC == numberB) {
    console.log(`${numberC} is as same as ${numberB}`);
} else {
    console.log(`${numberC} is bigger than ${numberB}`);
}

if (numberC > numberA || numberC == numberA) {
    console.log(`${numberC} is not bigger than ${numberA}`);
} else {
    console.log(`${numberC} is bigger than ${numberA}`);
}

console.log("Level 12");

function process(number1, number2) {
    if (number1 >= number2) {
        console.log(`${number1} is not bigger than ${number2}`);
    } else {
        console.log(`${number1} is bigger than ${number2}`);
    }
}
process(numberC, numberA);

console.log("Level 13");

console.log('Random Number =', Math.floor((Math.random() * 1000) + 1));