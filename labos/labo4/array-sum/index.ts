const numbers: number[] = [1, 2, 3, 4, 5];
let total: number = 0;
for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
}
console.log(total);
console.log(numbers.reduce((sum, num) => sum + num, 0));