const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  }

};

let head = (assertEqual[0]);
 

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

console.log((assertEqual[1]));