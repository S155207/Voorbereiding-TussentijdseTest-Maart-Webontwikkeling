import * as readline from 'readline-sync'

const weight = readline.questionFloat("Geef je gewicht in (in kg): ", {limitMessage: "I only like numbers!"});
const length = readline.questionFloat("Geef je lengte in (in m): ", {limitMessage: "I only like numbers!"});
const bmi = weight / (length ** 2);
console.log(`Je BMI is ${bmi.toFixed(2)}`);