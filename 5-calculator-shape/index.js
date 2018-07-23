console.log("Level 17");

const length = 20;
const width = 10;
const height = 15;
const radius = 28;
const phi = Math.PI;

let squareArea = length * length;
let squarePerimeter = length * 4;

let rectangleArea = length * width;
let rectanglePerimeter = (length * 2) + (width * 2);

let circleArea = phi * (radius * radius);
let circleCircumference = 2 * phi * radius;

let cubeArea = 6 * (length * length);
let cubeVolume = length * length * length;

let tubeArea = 2 * phi * radius * (height + radius);
let tubeVolume = phi * (radius * radius) * height;

console.log(`Square Area = ${squareArea}`);
console.log(`Square Perimeter = ${squarePerimeter}`);

console.log(`Rectangle Area = ${rectangleArea}`);
console.log(`Rectangle Perimeter = ${rectanglePerimeter}`);

console.log(`Circle Area = ${circleArea}`);
console.log(`Circle Circumference = ${circleCircumference}`);

console.log(`Cube Area = ${cubeArea}`);
console.log(`Cube Volume = ${cubeVolume}`);

console.log(`Tube Area = ${tubeArea}`);
console.log(`Tube Volume = ${tubeVolume}`);

console.log("Level 18");

function squareAreaFunc(side) {
    return side * side;
}

function squarePerimeterFunc(side) {
    return side * 4;
}

function rectangleAreaFunc(length, width) {
    return length * width;
}

function rectanglePerimeterFunc(length, width) {
    return (length * 2) + (width * 2);
}

function circleAreaFunc(phi, radius) {
    return phi * (radius * radius);
}

function circleCircumferenceFunc(phi, radius) {
    return 2 * phi * radius;
}

function cubeAreaFunc(side) {
    return 6 * (length * length);
}

function cubeVolumeFunc(side) {
    return length * length * length;
}

function tubeAreaFunc(phi, radius, height) {
    return 2 * phi * radius * (height + radius);
}

function tubeVolumeFunc(phi, radius, height) {
    return phi * (radius * radius) * height;
}

console.log(`Square Area = ${squareAreaFunc(length)}`);
console.log(`Square Perimeter = ${squarePerimeterFunc(length)}`);

console.log(`Rectangle Area = ${rectangleAreaFunc(length, width)}`);
console.log(`Rectangle Perimeter = ${rectanglePerimeterFunc(length, width)}`);

console.log(`Circle Area = ${circleAreaFunc(phi, radius)}`);
console.log(`Circle Circumference = ${circleCircumferenceFunc(phi, radius)}`);

console.log(`Cube Area = ${cubeAreaFunc(length)}`);
console.log(`Cube Volume = ${cubeVolumeFunc(length)}`);

console.log(`Tube Area = ${tubeAreaFunc(phi, radius, height)}`);
console.log(`Tube Volume = ${tubeVolumeFunc(phi, radius, height)}`);

console.log("Level 19");

function calculateCubeAreaFunc(squareArea) {
    return 6 * squareArea;
}

function calculateCubeVolumeFunc(side, squareArea) {
    return side * squareArea;
}

function calculateTubeAreaFunc(circleCircumference, height, radius) {
    return circleCircumference * (height + radius);
}

function calculateTubeVolumeFunc(circleAreaFunc, height) {
    return circleAreaFunc * height;
}

console.log(`Cube Area = ${calculateCubeAreaFunc(squareAreaFunc(length, length))}`);
console.log(`Cube Volume = ${calculateCubeVolumeFunc(length, squareAreaFunc(length, length))}`);

console.log(`Tube Area = ${calculateTubeAreaFunc(circleCircumferenceFunc(phi, radius), height, radius)}`);
console.log(`Tube Volume = ${calculateTubeVolumeFunc(circleAreaFunc(phi, radius), height)}`);