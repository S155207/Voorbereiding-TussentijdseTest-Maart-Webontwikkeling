interface TestFunction {
    (n: number): boolean
};

const isOdd: TestFunction = n => n % 2 !== 0;
const isEven: TestFunction = n => n % 2 === 0;
const isPositive: TestFunction = n => n >= 0;
const isNegative: TestFunction = n => n < 0;

const atLeastTwo = function (numbers: number[], callback: (n: number) => boolean) {
    let counter = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (callback(numbers[i])) {
            counter++;
        };
    };
    return counter >= 2;
};

console.log(atLeastTwo([2,3,4,6,8], isOdd));
console.log(atLeastTwo([2,3,4,5,6,8], isOdd));