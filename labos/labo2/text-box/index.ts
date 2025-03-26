import * as readline from "readline-sync"

let text = readline.question("Geef de tekst in: ");
while (text !== "") {
    const horizontalBorder = "+-" + '-'.repeat(text.length) + "-+"
    console.log(horizontalBorder);
    console.log('| ' + text + ' |');
    console.log(horizontalBorder);
    text = readline.question("Geef de tekst in: ");
}
console.log("Tot ziens!");