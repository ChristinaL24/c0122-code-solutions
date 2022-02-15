/* exported numVowels */

/* Pseudocode

Goal: return the number of vowels in a string

-Declare a function with its name and parameter
-Within the function, create a counter that will count the amount of times a vowel is found
-Use the toLowerCase method on our string and assign it to a variable
  -This will make it easier to loop through the vowels since JS is case sensitive
-Create a for loop that will iterate through our string to find the vowels
  -The condition statement should have i < stringLower.length since this is the variable we want
   to find vowels in and not the original string
-Create a statement that states "if stringLower at index i is equal to a, e, i, o, or u, then the vowelCounter should be incremented
-Return the variable vowelCounter from the function

*/

function numVowels(string) {

  var vowelCounter = 0;
  var stringLower = string.toLowerCase();

  for (var i = 0; i < stringLower.length; i++) {
    if (stringLower[i] === 'a' || stringLower[i] === 'e' || stringLower[i] === 'i' || stringLower[i] === 'o' || stringLower[i] === 'u') {
      vowelCounter++;
    }
  }
  return vowelCounter;
}
