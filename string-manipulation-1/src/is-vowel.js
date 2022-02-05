/* exported isVowel */

/*

Pseudocode

Goal: To have a boolean value returned that indicates whether or not the letter in our parameter
is a vowel

-Declare a function with its name and parameter
-Within the function, declare a variable to hold our vowels
-Create a function that will check whether or not char is equal to a vowel
*/

function isVowel(char) {

  var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  for (var i = 0; i <= vowels.length; i++) {
    if (char === vowels[i]) {
      return true;
    }
  }
  return false;
}
