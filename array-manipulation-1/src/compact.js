/* exported compact */

/* Pseudocode

Goal:
-Declare a function with its name and parameter
-Create a storage for our function

*/

function compact(array) {

  var newArray = [];
  var banned = [null, false, NaN, undefined, '', 0, -0];

  for (var i = 0; i < array.length; i++) {
    if (array.includes(banned) !== banned) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
