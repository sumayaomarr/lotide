const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays')


// test code



eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) 