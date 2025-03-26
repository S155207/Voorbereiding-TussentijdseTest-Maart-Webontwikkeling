import { read } from "fs";
import * as readline from "readline-sync"

const amountOfNumbers = readline.questionInt("Hoeveel getallen wil je optellen? ", {limitMessage: "I only like numbers!"});
let numbers = [];
for (let i = 0; i < amountOfNumbers; i++) {
    numbers[i] = readline.questionInt(`Geef getal ${i + 1} in: `, {limitMessage: "I only like numbers!"});
}
const total = numbers.reduce((sum, num) => sum + num, 0);
console.log(`De som van de getallen is ${total}`);