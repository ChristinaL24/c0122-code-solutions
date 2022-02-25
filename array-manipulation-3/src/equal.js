/* exported equal */

/* Pseudocode

Goal: A Boolean indicating whether or not first and second are equal to each
other, index-for-index.
-Declare a function with its name and parameters
-Create a for loop that will iterate through 'first' and 'second'
-Create an if statement
  -If first is strictly equal to second, return true
  -If it is not equal, return false

*/

function equal(first, second) {

  for (var i = 0; i < second.length; i++) {
    if (first.includes(second[i])) {
      return true;
    }
  }
  return false;
}
