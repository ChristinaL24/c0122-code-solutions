/* exported capitalize */

/*

Pseudocode

Goal: Return the original word with its first letter uppercased

-Declare the function with its name and parameter
-Declare a variable within our function that will hold the new word
-Create a concatenation that will create the value for our variable
  -Target the first letter by accesing its index at zero and apply
   the toUpperCase method (will capitalize our entire word)
  -Use the slice method to target every character after the first and apply the
   toLowerCase method on it after the slice
-Concantenate our first string with the second string and assign the result
  of that expression to the variable within our function
-Return the variable from our function

*/

function capitalize(word) {
  var newWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
  return newWord;
}
