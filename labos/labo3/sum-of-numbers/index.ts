import { read } from "fs";
import * as readline from "readline-sync"

const amountOfNumbers = readline.questionInt("Hoeveel getallen wil je optellen? ", {limitMessage: "I only like numbers!"});
let numbers = [];
let total = 0;
for (let i = 0; i < amountOfNumbers; i++) {
    numbers[i] = readline.questionInt(`Geef getal ${i + 1} in: `, {limitMessage: "I only like numbers!"});
    total += numbers[i];
}
console.log(`De som van de getallen is ${total}`);