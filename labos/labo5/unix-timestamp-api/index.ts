import * as readline from "readline-sync"

const main = async () => {
    const timestamp = readline.question("Geef een unix timestamp in aub vb.: 1549892280 :");
    const response = await fetch(`https://helloacm.com/api/unix-timestamp-converter/?cached&s=${timestamp}`);
    const data = await response.json();
    console.log(`De unix timestamp ${timestamp} omgezet naar ons tijdformaat is gelijk aan ${data}`);
};
main();