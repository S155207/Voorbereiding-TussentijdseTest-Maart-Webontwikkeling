import * as readline from "readline-sync"

let goOn = true;
while (goOn == true) {
    const email = readline.question("Geef het email adres in: ");
    const fullName = email.split('@')[0];
    const nameShort = fullName.split('.')[0].substring(0, 1).toUpperCase() + '.';
    const surname = fullName.split('.')[1].substring(0, 1).toUpperCase() + fullName.split('.')[1].substring(1, fullName.length);
    console.log(`De naam is ${nameShort} ${surname}`);
    goOn = readline.keyInYNStrict("Wil je nog een email adres ingeven?");
};
console.log("Nog een goede dag!");