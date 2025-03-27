import * as readline from "readline-sync"
import { log } from "util";

const fetchApi = async () => {
    const response = await fetch('https://sampleapis.assimilate.be/bitcoin/current');
    const data = await response.json();
    return data.bpi;
};

const valutas = ["EUR", "USD", "GBP"];
const choice = readline.question("Welke valuta wil je zien? (EUR, USD, GBP): ").toUpperCase();
if (valutas.includes(choice)) {
    fetchApi().then((response) =>{
        const code = response[choice]["code"];
        const price = response[choice]["rate_float"];
        console.log(`De huidige prijs van bitcoin is ${price} ${code}`);
    }).catch ((error) => {
        console.error(error.message);
    });
} else {
    console.log("Deze valuta wordt niet ondersteund");
};