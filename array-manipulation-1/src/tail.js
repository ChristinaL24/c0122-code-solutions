/* exported tail */

/* Pseudocode

Goal: return a new array containing all elements of array after the first

-Declare a function with its name and parameter
-Create a storage to hold our array
-Create a condition that will loop through everything but the first index and have that condition push
 the words into our storage
-Return the variable from the function
*/

function tail(array) {

  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
