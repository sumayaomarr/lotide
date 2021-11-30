const assertEqual = require('./assertEqual');

let head = (array) => {
return array.shift(1)
}
 

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);


module.exports = head;
