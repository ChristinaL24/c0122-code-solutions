/* exported lastChars */

/* Pseudocode

Goal: Return the last length characters of string
-Declare a function with its name and parameters
-Create a storage that will hold our empty string
-Apply the slice method to our variable newStr and in the beginning index, put
 '-length'
  -The purspose of adding a -length is because we want our length to begin in the
   reverse direction. By putting a '-' in front of length, our length method will
   begin counting from the last character and will end whenever it hits its goal
-Return the variable from the function
*/

function lastChars(length, string) {

  var newStr = '';
  newStr = string.slice(-length);
  return newStr;
}
