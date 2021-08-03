// Exercicio 8

function minorIndex(array) {
    let minor = array[0];
    let index = 0;

    for (let i = 0; i < array.length; i += 1) {
        if (array[i] < minor) {
            minor = array[i];
            index = i;
        }
    }
    return index;
}

let array = [2, 4, -3, 7, 10, 0, 6];
console.log(minorIndex(array));