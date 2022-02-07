/* exported getLastChar */

/*

Pseudocode:

Goal: create a function that retrieves the last character of the string

-Declare a function with its name and parameter
-Declare a variable within our function that will hold the value of the last character in our string
-Return the variable from our function

*/

function getLastChar(string) {
  var lastChar = string[string.length - 1];
  return lastChar;
}
