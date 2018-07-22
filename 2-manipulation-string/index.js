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
const sentence = "heLLo evErYoNe";
let sentences = "";

for (i = 0; i < sentence.length; i++) {
    if (sentence.charAt(0) != " " && i == 0) {
        sentences += sentence.charAt(0).toUpperCase();
    } else if (sentence.charAt(i) == " " && i != sentence.length - 1) {
        sentences += " ";
        sentences += sentence.charAt(i + 1).toUpperCase();
        if (sentence.charAt(i + 1) != " ") {
            i++;
        }
    } else {
        sentences += sentence.charAt(i).toLowerCase();
    }
}
console.log(sentences);