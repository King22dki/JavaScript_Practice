function greet(name){
    return "Hello, " + + name + " how are you doing today?"
  }


// Run the tests in a browser console

console.log(greet("Sanji"));
console.log(greet("Luffy"));


// Chai library testing
const chai = require("chai");
const assert = chai.assert;

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(greet("Sanji"), "Hello, Sanji how are you doing?");
        assert.strictEqual(greet("Luffy"), "Hello, Luffy how are you doing?");
    })
})