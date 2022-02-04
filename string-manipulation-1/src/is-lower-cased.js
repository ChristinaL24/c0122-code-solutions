/* exported isLowerCased */

/*

Pseudocode

Goal: To have a boolean value returned that indicates whether or not all characters
in the word are lowercased.

-Declare a function with its name and parameter
-Within the function, assign the strictly equal to operator to check if our parameter has any
lowercased letters by comparing it to toLowerCase() version of our parameter
-If the expression is true, have the boolean value true returned from the function
-If the expression is false, have the boolean value false returned from the function

*/

function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
