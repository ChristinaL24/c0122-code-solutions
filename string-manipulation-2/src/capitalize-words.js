/* exported capitalizeWords */

/* Pseudocode

Goal: Return a string with every word capitalized

-Declare a function with its name and parameter(s)
-Create a storage that will hold our values
  -Apply the split method to the parameter to split our string into a list of words
-Create another storage that will hold our return variable and assign it to an empty string
-Create a condition that will loop through each word
  -Create a variable that will hold our value of array at i (this will access our array of word by its index)
  -Within that condition, apply the toUpperCase method to the first character of
   the word;
    -Use slice with this (note: first number is the begin of the index and second number is the end index (exlusive))
  -Then apply the toLowerCase method to the word
    -Use slice with this
-Concantenate the variable newString with a space and newWord
-Return the variable from the function
  -In this problem, our variable newString has a space in front of it due to the concatenation done on line 32,
   to return it without the space, apply the slice method to return everything after the first intial space

*/

function capitalizeWords(string) {

  var array = string.split(' ');
  var newString = '';
  for (var i = 0; i < array.length; i++) {
    var word = array[i];
    var newWord = word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
    newString = newString + ' ' + newWord;
  }
  return newString.slice(1);
}
