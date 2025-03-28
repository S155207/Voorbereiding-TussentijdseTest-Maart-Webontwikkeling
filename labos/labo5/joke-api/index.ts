import * as readline from "readline-sync"

const fetchJokeCategories = async () => {
    const response = await fetch('https://v2.jokeapi.dev/categories');
    const data = await response.json();
    return data.categories;
};

const fetchJoke = async (category: string, type: string) => {
    const response = await fetch(`https://v2.jokeapi.dev/joke/${category}?type=${type}`);
    const data = await response.json();
    return data;
};

async function main() {
    let goOn = true;
while (goOn === true) {
    const categories = await fetchJokeCategories();
    const types = ["twopart", "single"];

    const categoryChoice = readline.keyInSelect(categories, "What category of joke do you want to see?", { cancel: false });
    const category = categories[categoryChoice];
    const typeChoice = readline.keyInSelect(types, "What type of joke do you want to see?", { cancel: false });
    const type = types[typeChoice];
    const joke = await fetchJoke(category, type);
    if (type === "single") {
        console.log(joke.joke);
    } else {
        console.log(joke.setup);
        console.log(joke.delivery);
    };
    goOn = readline.keyInYNStrict("Do you want to see another joke?");
};
};

main();