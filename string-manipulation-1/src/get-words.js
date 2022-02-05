/* exported getWords */

/* Pseudocode

Goal: take a sentence and split words into its own string

-Declare a function its name and parameter
-Create a variable for our empty array literal
-Create a variable to hold our empty string
-Create a function that will check whether or not a character is a space
  -If it is not a space, push character into words variable
  -If it is a space, add current word to words

*/

function getWords(string) {
  var list = [];
  var words = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      words += string[i];
    } else {
      list.push(words);
      words = '';
    }
  }
  if (words !== '') {
    list.push(words);
  }
  return list;
}
