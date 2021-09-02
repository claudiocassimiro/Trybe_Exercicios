const myFunction = () => {
    console.log('hi')
}

const assert = require('assert');
assert.strictEqual(typeof myFunction, 'function');