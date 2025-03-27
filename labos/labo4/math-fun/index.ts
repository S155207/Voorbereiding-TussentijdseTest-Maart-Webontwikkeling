const add = (a: number, b: number) => a + b;
const subtract = (a: number, b: number) => a - b;
const multiply = (a: number, b: number) => a * b;
const divide = (a: number, b: number = 1) => a / b;

console.log(divide(multiply(add(4, 5), subtract(6, 3)), 2));