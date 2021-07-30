// Exercicio 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let count = 0;

for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
    count ++;
}
console.log(`A media entre os valores é ${sum / count}`);