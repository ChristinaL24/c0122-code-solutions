/* exported reverseWord */

/* Pseudocode

Goal: Return a string with its characters in reverse order

-Declare a function with its name and parameter
-Create a variable that will hold our value of an empty string
-Create a function that will access the index of the last character in the string
  -Concatenate the characters with addition operator
-return our variable from the function

*/

function reverseWord(word) {
  var newWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  return newWord;
}
