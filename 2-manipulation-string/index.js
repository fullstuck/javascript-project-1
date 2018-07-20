console.log("Level 4");
const sentenceA = "Hello World!";
const sentenceB = "Good Bye!";
console.log(sentenceA);
console.log(sentenceB);

console.log("Level 5");
const sentenceC = sentenceA + " " + sentenceB;
const sentenceD = `${sentenceA} ${sentenceB}`;
console.log(sentenceC);
console.log(sentenceD);

console.log("Level 6");
console.log(sentenceA.toUpperCase());
console.log(sentenceB.toUpperCase());
console.log(sentenceA.toLowerCase());
console.log(sentenceB.toLowerCase());

console.log("Level 7");
const sentence = "hello everyone";

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}
console.log(toTitleCase(sentence));