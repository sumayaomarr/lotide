const eqArrays = require('../eqArrays')

const assertArraysEqual = require('../assertArraysEqual')



  // test code

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false