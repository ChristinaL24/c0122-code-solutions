/* exported drop */

/* Pseudocode

Goal: return a new Array containing the elements of array after the first count elements.
-Declare a function with its name and parameters
-Within the function, create a variable ('newArray') that will hold our value
  -Apply the slice method of the array object
    -One argument is being called within this method '(count)'
      -We use 'count' as our beginning index for the slice method because we want
       our array to return to us the values that occur after 'count' ends
  -Assign 'array.slice(count)' to the variable newArray
-Return our variable from the function
*/

function drop(array, count) {
  var newArray = array.slice(count);
  return newArray;
}
