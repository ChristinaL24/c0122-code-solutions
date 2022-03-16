/* exported equal */

/* Pseudocode

Goal: A Boolean indicating whether or not first and second are equal to each
other, index-for-index.
-Declare a function ('equal') with its name and parameters
-Create an if statement that checks to see if the length of the 'first' and 'second'
are strictly equal.
  -Purpose: they cannot be compared if their length is not equal
-If the two are equal, we will check the array values using a for loop
  -Create a for loop
    -If 'first at i' is strictly not equal to 'second at i', return false
-Return the boolean true from the function

*/

function equal(first, second) {
  /* Checks if the arrays are the same length/are equal */
  /* If the condition in the if statement evaluates false, we skip over the if statement
     and continue. However, if the condition is true, the function ends and returns false */
  if (first.length !== second.length) {
    return false;
  }
  /* checks if all items exist in the same order */
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
