import * as readline from "readline-sync"

let scores = [];
for (let i = 0; i !== -1; i++) {
    const score = readline.question(`Geef de punten van student ${i + 1} in: `);
    if (score === "") {
        break;
    }
    scores[i] = parseInt(score);
}
const total = scores.reduce((sum, num) => sum + num, 0);
console.log(`Het gemiddelde van de punten is ${total / scores.length}`);
const failed = scores.filter(num => num < 10).length;
console.log(`Het aantal studenten met een onvoldoende is ${failed}`);