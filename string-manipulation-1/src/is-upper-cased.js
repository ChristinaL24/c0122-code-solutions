/* exported isUpperCased */

/*

Pseudocode

Goal: To have a boolean value returned that indicates whether or not all characters
in the word are uppercased.

-Declare a function with its name and parameter
-Within the function, assign the strictly equal to operator to check if our parameter has any
uppercased letters by comparing it to toUpperCase() version of our parameter
-If the expression is true, have the boolean value true returned from the function
-If the expression is false, have the boolean value false returned from the function

*/

function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
