/* exported capitalizeWord */

/* Pseudocode

Goal: Return the word with its first character uppercased and the rest as lowercased
-Declare a function with its name and parameters
-Declare a variable that will hold the result of our expression
  -To find the value of our variable, use the slice method to access the first and second index
  -Apply the toUpperCase and toLowerCase method to concantenate our new string and assign it
   to the variable
-Create a condition that will determine whether or not our newWord is equal to the string Javascript
  -If it is, have the condition return the correct value for JavaScript
-Return the variable from our function

*/

function capitalizeWord(word) {

  var newWord = word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
  if (newWord === 'Javascript') {
    return 'JavaScript';
  } else {
    return newWord;
  }
}
