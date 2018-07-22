console.log("Level 17");

let length = 20;
let width = 10;
let height = 15;
let radius = 28;
const phi = 3.14;

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