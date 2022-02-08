/* exported truncate */

/* Pseudocode

Goal: return a shortened version of string with an ellipsis
-Declare a function with its name and parameters
-Create a storage that will hold the value for our string
-Create a condition that will loop through our string and compare the length parameter
 to the string parameter
-Concantenate our new variable with the ellipsis and return our variable from the function
*/

function truncate(length, string) {

  var newString = '';
  for (var i = 0; i < length; i++) {
    newString += string[i];
  }
  return newString.slice(0, string.length) + '...';
}
