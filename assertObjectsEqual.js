const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  }

};
 
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
  
const eqObjects = function(object1, object2) {
  let arrayOfKeys1 = Object.keys(object1);
  let arrayOfKeys2 = Object.keys(object2);
  if (arrayOfKeys1.length !== arrayOfKeys2.length) {
    return false;
  }
  for (const value of arrayOfKeys1) {
    if (Array.isArray(object1[value]) && Array.isArray(object2[value])) {
      return eqArrays(object1[value], object2[value]);
    } else {
      if (object1[value] !== object2[value]) {
        return false;
      }
    }
  }
  return true;
};


const assertObjectsEqual = function(inputObject, expectedObject) {
  const inspect = require('util').inspect;
  if (eqObjects(inputObject, expectedObject)) {
    console.log(`✅ Assertation Passed: ${inspect(inputObject)} === ${inspect(expectedObject)}`);
  } else {
    console.log(`🔴 Assertation Failed: ${inspect(inputObject)} !== ${inspect(expectedObject)}`);
  }
};


module.exports = assertObjectsEqual;
