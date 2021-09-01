const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (words) => {
    const wordLengths = [];
    for (let word of words) {
        wordLengths.push(word.length);
    }
    return wordLengths;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);