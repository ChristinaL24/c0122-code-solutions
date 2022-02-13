/* exported firstChars */

/* Pseudocode

Goal: Return the first length characters of string

-Declare a function with its name and parameters
-Create a storage that will hold our empty string
  -Purpose of this variable is to hold the characters that will be later concatenated
-Create a for loop that will iterate through our string
  -The condition for our loop will be 'i < length' because the length represents
   the limit of how many characters we want to return
-Apply the slice method to our return variable and have the beginning index set
 to 0 and the end index to string.length
-Return the variable from the function

*/

function firstChars(length, string) {

  var shortStr = '';
  for (var i = 0; i < length; i++) {
    shortStr += string[i];
  }
  return shortStr.slice(0, string.length);
}
