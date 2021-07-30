// Exercicio bonus 2

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let aux;

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (numbers[index] > numbers[secondIndex]) {
            aux = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = aux;
        }
    }
}
console.log(numbers);