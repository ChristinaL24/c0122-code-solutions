/* exported ransomCase */

/* Pseudocode

Goal: return a string with every-other character uppercased
-Declare a function with its name and parameter(s)
-Create a storage that will hold our value
-Create a condition that will determine whether or not our variable i is even or odd
  -If i is even, apply the toLowerCase method to make the character a lower case
   and concantenate the character with our variable word
  -If i is odd, apply the toUpperCase method to make the character an upper case
  and concantenate the character with our variable word
-Return the variable from our function
*/

function ransomCase(string) {
  var word = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      word += string.charAt(i).toLowerCase();
    } else {
      word += string.charAt(i).toUpperCase();
    }
  }
  return word;
}
