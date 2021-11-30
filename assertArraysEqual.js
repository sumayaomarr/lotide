const eqArrays = function(arr1,arr2) {
  return arr1.length === arr2.length && arr1.every((v,i)=> v === arr2[i])
}

function assertArrayEqual(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  }
}

assertArrayEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
assertArrayEqual(["1", "2", "3"], ["1", "2", 3]) // => false

module.exports = assertArrayEqual;