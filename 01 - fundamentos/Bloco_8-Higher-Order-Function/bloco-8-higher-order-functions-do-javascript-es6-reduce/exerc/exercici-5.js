const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(arr) {
  // escreva seu código aqui
    return arr.reduce((result, element) => {
        element.split('').filter((letter) => {
            if (letter === 'A' || letter === 'a') {
                result += 1;
            }
        });
        return result;
    }, 0)
}

assert.deepStrictEqual(containsA(names), 20);