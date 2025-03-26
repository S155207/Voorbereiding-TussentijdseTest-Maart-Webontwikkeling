import * as readline from "readline-sync"

const amount = readline.questionFloat("Geef het bedrag in: ", {limitMessage: "I only like numbers!"});
const interest = readline.questionFloat("Geef het interest percentage in: ", {limitMessage: "I only like numbers!"});
const years = [1, 2, 5];
for (let i = 0; i < years.length; i++) {
    const total = amount * (1 + interest / 100) ** years[i];
    console.log(`Na ${years[i]} jaar heb je ${parseFloat(total.toFixed(2))}`);
};