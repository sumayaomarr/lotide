const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  }

};
 
const eqArrays =(arr1,arr2)=> {
return arr1.length === arr2.length && arr1.every((v,i)=> v === arr2[i])
}


// TEST CODE
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),true);

// assertEqual is used to compare eqArrays to the true/false you expected
assertEqual(1, 1);

 // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

module.exports = eqArrays;