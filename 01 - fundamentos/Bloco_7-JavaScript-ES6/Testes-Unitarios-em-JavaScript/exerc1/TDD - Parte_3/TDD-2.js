const assert = require('assert');

const removeVowels = (word) => {
    const characters = word.split('');
    const results = [];
    let num = 0;
  
    for (let index = 0; index < characters.length; index += 1) {
      if (characters[index] === 'a' || characters[index] === 'e' || characters[index] === 'i' 
      || characters[index] === 'o' || characters[index] === 'u') {
        characters[index] = ++num;
        results.push(characters[index]);
      } else {
        results.push(characters[index]);
      }
    }
    return results.join('');
};

const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(typeof removeVowels, 'function');
const output = removeVowels(parameter);
assert.strictEqual(output, result);