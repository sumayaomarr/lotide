const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  }

};
 
const countLetters =  word => {
	const count = {};

	word.split('').forEach(letter => {
		count[letter] = count[letter] ? ++count[letter] : 1;
	});

	return count;
};

console.log(countLetters("This is my third day at Lighthouse Labs") );

module.exports = countLetters;