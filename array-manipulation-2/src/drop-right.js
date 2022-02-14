/* exported dropRight */

/* Pseudocode

Goal: return a new array containing the elements of array before count the
last count elements

-Declare a function with its name and parameters
-Within the function, create a new variable (newArray) that will hold our value
  -Apply the slice method to our array object and pass it with two arguments
    -The first first argument will be zero
      -Zero represents the beginning index
    -The second argument will be '-count'
    -'-count' represents the end extraction; We want to return the elements of
     the array that occurs before the count
-Return the variable from the function
*/

function dropRight(array, count) {

  var newArray = array.slice(0, -count);
  return newArray;

}
