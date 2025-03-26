import * as readline from "readline-sync"

let amount = readline.questionFloat("Geef het bedrag in: ", {limitMessage: "I only like numbers!"});
amount = parseFloat(amount.toFixed(2)) * 100;
const bills = [50000, 20000, 10000, 5000, 2000, 1000, 500];
const euroCoins = [200, 100];
const centCoins = [50, 20, 10, 5, 2, 1];
let answer = "Dit is ";
for (let i = 0; i < bills.length; i++) {
    const amountOfBills = Math.floor(amount / bills[i]);
    if (amountOfBills > 0) {
        amount -= amountOfBills * bills[i];
        answer += `${amountOfBills} ${amountOfBills == 1 ? "briefje": "briefjes"} van ${bills[i] / 100}, `;
    };
};
for (let i = 0; i < euroCoins.length; i++) {
    const amountOfCoins = Math.floor(amount / euroCoins[i]);
    if (amountOfCoins > 0) {
        amount -= amountOfCoins * euroCoins[i];
        answer += `${amountOfCoins} ${amountOfCoins == 1 ? "muntje": "muntjes"} van ${euroCoins[i] / 100}, `;
    };
};
for (let i = 0; i < centCoins.length; i++) {
    const amountOfCoins = Math.floor(amount / centCoins[i]);
    if (amountOfCoins > 0) {
        amount -= amountOfCoins * centCoins[i];
        if (centCoins[i] == 1) {
            answer = answer.substring(0, answer.length - 2);
            answer += " en ";
        }
        answer += `${amountOfCoins} ${amountOfCoins == 1 ? "centje": "centjes"} van ${centCoins[i]}, `;
    };
};
answer = answer.substring(0, answer.length - 2) + ".";
console.log(answer);