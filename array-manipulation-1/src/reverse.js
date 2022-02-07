/* exported reverse */

/* Pseudocode

Goal: Return an array that contains all elemement in reverse order
-Declare a function with its name and parameter
-Create a storage for our function
-Create a condition that will loop through all of our functions in reverse order
-Return the variable from our function

*/

function reverse(array) {

  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
