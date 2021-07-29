// Exercicio 4

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let count = 0;
let media = 0;

for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
    count ++;
}

media = sum / count;

if (media > 20) {
    console.log('Valor maior que 20');
}
else {
    console.log('Valor menor ou igual a 20');
}
