/* exported includes */

/* Pseudocode

Goal: return a Boolean indicating the presence of value at any index of array.
-Declare a function with its name and parameters
-Create a for loop that will iterate through our array
  -Create a conditional statement that states, 'if array at i is strictly equal
   to the value of the variable 'value', return true
-Return the boolean value false from the function

*/

function includes(array, value) {

  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
