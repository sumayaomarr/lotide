const words = ["ground", "control", "to", "major", "tom"];

function assertArrayEqual(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  }
}
 
const eqArrays =(arr1,arr2)=> {
  return arr1.length === arr2 && arr1.every((v,i)=> v === arr2[i])
  }
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  }
  return results;
}


const results1 = map(words, word => word[0]);
console.log(results1);

console.log(assertArrayEqual(Map));


module.exports = map;