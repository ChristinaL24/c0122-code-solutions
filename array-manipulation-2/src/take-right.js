/* exported takeRight */

/* Pseudocode

Goal: return a new Array containing the last count elements of array.
-Declare a function with its name and parameters
-Within the function, create a variable ('newArray') that will hold our value
  -Apply the slice method on the array object and pass it with one argument,
   '(-count)'
    -The purpose of using '-count' is because we want to retrieve the last count
     elements of the array.
  -Assign the result of our expression 'array.slice(-count)' to our variable
   'newArray'
-Return the variable from the function
*/

function takeRight(array, count) {

  var newArray = array.slice(-count);
  return newArray;
}
