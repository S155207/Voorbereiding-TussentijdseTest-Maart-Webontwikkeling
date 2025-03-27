interface Ingredient {
    name: string,
    amount: string,
    price: number
};

interface Recipe {
    name: string,
    description: string,
    persons: number,
    ingredients: Ingredient[]
};

let lasagne: Recipe = {
    name: "Lasagne",
    description: "Lekkere lasagne",
    persons: 4,
    ingredients: [
        { name: "lasagnevellen", amount: "1 pak", price: 2 },
        { name: "gehakt", amount: "500g", price: 6 },
        { name: "ui", amount: "1", price: 1 },
        { name: "look", amount: "1 teentje", price: 1 }
    ]
};

console.log(`Recept: ${lasagne.name}`);
console.log(`Beschrijving: ${lasagne.description}`);
console.log(`Personen: ${lasagne.persons}`);
console.log("Ingredienten:");
let total = 0;
lasagne.ingredients.forEach(ingredient => {
    console.log(`- ${ingredient.amount} ${ingredient.name}`);
    total += ingredient.price;
});
console.log(`Totale kostprijs: ${total} euro`);