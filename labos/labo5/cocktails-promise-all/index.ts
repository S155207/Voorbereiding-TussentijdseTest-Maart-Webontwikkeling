const fetchCocktailById = async (id: number) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    return data ? data.drinks[0] : null;
};

const fetchMultipleCocktails = async () => {
    const cocktailIds = [11000, 11001, 11002];
    try {
        const cocktails = await Promise.all(cocktailIds.map(id => fetchCocktailById(id)));
        cocktails.forEach(cocktail => { console.log(cocktail.strDrink); });
    } catch (error) {
        console.error("Error fetching cocktails:", error);
    };
};

fetchMultipleCocktails();