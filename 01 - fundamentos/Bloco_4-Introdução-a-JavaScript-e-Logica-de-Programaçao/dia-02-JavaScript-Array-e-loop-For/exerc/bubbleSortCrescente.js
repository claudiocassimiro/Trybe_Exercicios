// Exercicio bonus 1

let array = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];
let aux = 0;

for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < array.length - index; secondIndex += 1) {
        if (array[secondIndex] > array[secondIndex + 1]) {
            aux = array[secondIndex];
            array[secondIndex] = array[secondIndex + 1];
            array[secondIndex + 1] = aux;
        }
    }
}

console.log(array);