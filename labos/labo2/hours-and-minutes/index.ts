import * as readline from "readline-sync"

const totalMinutes = readline.questionInt("Geef het aantal minuten in: ", {limitMessage: "I only like numbers!"});
const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(`Dit is ${hours} uur en ${minutes} minuten`);