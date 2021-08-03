// Exercicio 7

// consegui resolver esse exercicio com a ajuda
// desde post: https://pt.stackoverflow.com/questions/436409/retornar-o-%C3%ADndice-do-maior-elemento-de-um-array

function majorIndex(array) {
    let major = array[0];
    let index = 0;
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] > major) {
            major = array[i];
            index = i;
        }
    }
    return index;
}

let array = [2, 3, 6, 7, 10, 1];
console.log(majorIndex(array));