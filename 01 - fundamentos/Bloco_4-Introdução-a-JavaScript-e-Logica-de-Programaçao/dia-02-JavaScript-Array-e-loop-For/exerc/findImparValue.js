// Exercicio 6

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let countImpar = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 === 1) {
        countImpar ++;
    }
}

if (countImpar > 0) {
    console.log(countImpar);
}
else {
    console.log('Nenhum valor impar encontrado');
}