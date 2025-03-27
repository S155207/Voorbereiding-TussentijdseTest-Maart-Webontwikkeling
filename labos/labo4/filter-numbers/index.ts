const numbers: number[] = [-4,-4,1,2,3,4,5];

const filterPositive = function (numbers: number[]) {
    const positiveNumbers: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            positiveNumbers.push(numbers[i]);
        };
    };
    return positiveNumbers;
};
console.log(filterPositive(numbers));

const filterNegative = function (numbers: number[]) {
    const negativeNumbers: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] <= 0) {
            negativeNumbers.push(numbers[i]);
        };
    };
    return negativeNumbers;
};
console.log(filterNegative(numbers));

const filterEven = function (numbers: number[]) {
    const evenNumbers: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        };
    };
    return evenNumbers;
};
console.log(filterEven(numbers));

const filter = function (numbers: number[], callback: (numbers: number) => boolean) {
    const newNumbers: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        if (callback(numbers[i])) {
            newNumbers.push(numbers[i]);
        }
    }
    return newNumbers;
};
const isPositive = (number: number) => number >= 0;
console.log(filter(numbers, isPositive));
const isNegative = (number: number) => number < 0;
console.log(filter(numbers, isNegative));
const isEven = (number: number) => number % 2 === 0;
console.log(filter(numbers, isEven));