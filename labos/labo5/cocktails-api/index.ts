import * as readline from "readline-sync"

const fetchCocktails = async (ingredient: string) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${ingredient.toLowerCase()}`);
    const data = await response.json();
    return data.drinks;
};

const main = async () => {
    console.log("------------------------------------------\n| Welcome to the cocktail lookup service. |\n------------------------------------------");
    let ingredient = "a";
    while (ingredient !== "") {
        ingredient = readline.question("Please provide an ingredient: ");
        if (ingredient) {
            console.log(`Cocktails with ${ingredient}:`);
            const cocktails = await fetchCocktails(ingredient);
            for (let i = 0; i < cocktails.length; i++) {
                console.log(`- ${cocktails[i].strDrink}`);
            };
        };
    };
};
main();