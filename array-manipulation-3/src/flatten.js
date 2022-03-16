/* exported flatten */

/* Pseudocode

Goal: A new Array with any direct child Arrays unwrapped. This function should
only "flatten" array by one level.

-Declare a function with its name and parameter
-Create a variable(flattenedArray) that will hold our empty array literal
-Create a 'for loop'
  -Write a condition that checks whether a value is an array w/ Array.isArray
  -If it is an array, assign its value to our variable 'subArray'
    -Create another 'for loop' that will iterate through our 'subArray' array
    -Push the values from 'subArray' at index j to the 'flattenedArray' variable
  -Else: if it is not an array, add it into our flattenedArray
-Return the values from flattened array
*/

function flatten(array) {
  var flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      var subArray = array[i];
      for (var j = 0; j < subArray.length; j++) {
        flattenedArray.push(subArray[j]);
      }
    } else {
      flattenedArray.push(array[i]);
    }
  }
  return flattenedArray;
}
