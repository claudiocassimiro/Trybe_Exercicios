const assert = require('assert');

// escreva sum abaixo

const sum = (...values) => {
    return values.reduce((result, value) => result + value, 0);
}

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);