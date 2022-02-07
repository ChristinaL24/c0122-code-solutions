/* exported compact */

/* Pseudocode

Goal:
-Declare a function with its name and parameter
-Create a storage for our function
-Create a storage that includes the values to be omitted
-Create a condition that will loop through each value and determine whether or
 not the values should be pushed or omitted
-Return our variable from the function
*/

function compact(array) {

  var newArray = [];
  var banned = [null, false, NaN, undefined, '', 0, -0];

  for (var i = 0; i < array.length; i++) {
    if (banned.includes(array[i]) === false) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
