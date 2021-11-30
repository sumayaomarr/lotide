const eqArrays = function(arr1,arr2) {
  return arr1.length === arr2.length && arr1.every((v,i)=> v === arr2[i])
}

const middle = function(array){
  let result = []; 
  let middleIndex = Math.floor(array.length / 2)

  console.log("middleIndex", middleIndex)
  if (array.length % 2){
      result.push(array[middleIndex])
    
  } 
  else {
    result.push(array[middleIndex - 1])
    result.push(array[middleIndex])
    
  } 


  console.log('result', result)
    return result 
}

function assertArrayEqual(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  }
}
//------------------------------------------------------

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  }

};
 
middle([1, 3, 5, 6, 6]) 

middle([3, 5, 6, 3, 6, 2, 6, 2, 6])

var result = middle(['HI' , 'BYE' , 'HELLO', 'HEY'])

assertArrayEqual(result,['BYE' , 'HELLO'])


module.exports = middle



assertArrayEqual
eqArrays