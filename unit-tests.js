const assert = require('assert/strict');
const demo = require('./demo');

// Test 1
let totalWithTax = demo.calculateTotalWithTax([10, 20, 30, 40], 0.0725);
assert.equal(totalWithTax, 107.25);

// Test 2
totalWithTax = demo.calculateTotalWithTax([10, 20, 70], 0.0825);
assert.equal(totalWithTax, 108.25);

// Test 3
totalWithTax = demo.calculateTotalWithTax(['10', '20', '70'], '0.0825');
assert.equal(totalWithTax, 108.25);
