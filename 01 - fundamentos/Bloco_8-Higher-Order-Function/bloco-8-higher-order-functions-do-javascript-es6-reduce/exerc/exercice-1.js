const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(arr) {
  // escreva seu código aqui
  return arr.reduce((result, element) => {
    return result.concat(element);
  }, []);
}

assert.deepStrictEqual(flatten(arrays), ['1', '2', '3', true, 4, 5, 6]);