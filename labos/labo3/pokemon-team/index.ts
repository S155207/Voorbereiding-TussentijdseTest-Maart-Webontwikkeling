import * as readline from "readline-sync"

let pokemon: string[] = [
    "Bulbasaur",
    "Ivysaur",
    "Venusaur",
    "Charmander",
    "Charmeleon",
    "Charizard",
    "Squirtle",
    "Wartortle",
    "Blastoise",
    "Caterpie",
    "Metapod",
    "Butterfree",
    "Weedle",
    "Kakuna",
    "Beedrill",
    "Pidgey",
    "Pidgeotto",
    "Pidgeot",
    "Rattata",
    "Raticate",
    "Spearow",
];

let team: string[] = [];
for (let i = 0; i < pokemon.length; i++) {
    console.log(`${i}. ${pokemon[i]}`);
};
let choice = readline.question("Welke pokemon wil je in je team? [0-20]: ");
while (choice.toUpperCase() !== "STOP") {
    if (parseInt(choice) > 20 || parseInt(choice) < 0) {
        console.log("Deze pokemon ken ik niet");
    } else if (team.includes(pokemon[parseInt(choice)])) {
        console.log("Deze pokemon zit al in je team");
    } else {
        team.push(pokemon[parseInt(choice)]);
    }
    choice = readline.question("Welke pokemon wil je in je team? [0-20]: ");
};
console.log("Jouw team van pokemon is:");
for (let i = 0; i < team.length; i++) {
    console.log(`${i + 1}. ${team[i]}`);
}