// Exercicio bonus 2

let array = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];
let aux;

for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (array[index] > array[secondIndex]) {
            aux = array[index];
            array[index] = array[secondIndex];
            array[secondIndex] = aux;
        }
    }
}
console.log(array);