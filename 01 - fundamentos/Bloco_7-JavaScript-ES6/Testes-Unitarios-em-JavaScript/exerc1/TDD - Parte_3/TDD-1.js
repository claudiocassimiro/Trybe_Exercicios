const assert = require('assert');

const greetPeople = (people) => {
    let greeting = 'Hello';
    let greetingPeople = [];
    for (let index in people) {
        greetingPeople[index] = `${greeting} ${people[index]}`;
    }
    return greetingPeople;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.strictEqual(typeof greetPeople, 'function');
const output = greetPeople(parameter);
assert.deepStrictEqual(output, result);