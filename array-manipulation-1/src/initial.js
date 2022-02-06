/* exported initial */

/* Pseudocode

Goal: Return an array that contains all elemement besides the last
-Declare a function with its name and parameter
-Create a storage for our function
-Create a condition that will loop through all of our functions except the last one
-Return the variable from our function
*/

function initial(array) {

  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
