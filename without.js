
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
const without = function(source, itemsToRemove) {

  let returnArr = [];
  
  for (let i = 0; i < source.length; i ++) {
    let removeElem = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        removeElem = true;
      }
    }
    if (removeElem === false) {
      returnArr.push(source[i]);
    }
  }

  return returnArr;

}

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"]))