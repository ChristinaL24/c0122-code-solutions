/* exported flatten */

/* Pseudocode

Goal: A new Array with any direct child Arrays unwrapped. This function should
only "flatten" array by one level.
-Declare a function with its name and parameter
-Create a variable(flattenedArray) that will hold our empty array literal
-Create a 'for loop'
  -Write a condition that checks whether a value is an array w/ Array.isArray
  -If it is an array, push it into our variable 'test'
    -Create another 'for loop' that will iterate through our 'test' array
    -Push the values from 'test' to the 'flattenedArray' variable
*/
/*
function flatten(array) {

  var flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      var test = [];
      test.push(array[i]);
      for (var j = 0; j < array.length; j++) {
        if (Array.isArray(test[j])) {
          flattenedArray.push(test[j]);
        }
      }
    } else {
      flattenedArray.push(array[i]);
    }
  }
  return flattenedArray;
}
*/
