import * as readline from "readline-sync"

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const str = readline.question("Enter a string: ");
let encodedStr = "";
for (const char of str) {
    if (alphabet.includes(char)) {
        encodedStr += alphabet[(alphabet.indexOf(char) + 13) % 26];
    } else {
        encodedStr += char;
    };
};
console.log(encodedStr);