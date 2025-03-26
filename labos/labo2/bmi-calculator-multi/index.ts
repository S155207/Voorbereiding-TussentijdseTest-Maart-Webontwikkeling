import * as readline from "readline-sync"

const amountOfPersons = readline.questionInt("Geef het aantal personen in: ", {limitMessage: "I only like numbers!"});
for (let i = 1; i <= amountOfPersons ; i++) {
    const name = readline.question(`Geef de naam van persoon ${i} in: `);
    const weight = readline.questionFloat(`Geef het gewicht van ${name} in: `, {limitMessage: "I only like numbers!"});
    const length = readline.questionFloat(`Geef de lengte van ${name} in: `, {limitMessage: "I only like numbers!"});
    const bmi = weight / (length ** 2);
    console.log(`${name} heeft een BMI van ${bmi.toFixed(2)}`);
}