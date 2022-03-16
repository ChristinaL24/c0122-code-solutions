/* exported reverseWords */

/* Pseudocode:

Goal: A version of String with every character of each word reversed, but the words in their original order.

-Declare a function with its name and parameter
-Create a variable ('reverseString') that will hold the value of our string reversal
  -To reverse the string:
    -Apply the split method and pass an empty string as an argument
    -Apply the reverse method to reverse all of the characters
    -Apply the join method and pass an empty string as an argument to concatenate
     the array into a string
-Create a variable ('reverseWords') that will hold the value of our word reversal
  To reverse the words:
    -Apply the split method to the variable 'reverseString' and pass a space as an argument
     to get the words to split into an array
    -Apply the reverse method to the array to get the words to reverse
    -Apply the join method and pass an empty space as an argument to concatenate the
     array into a string
-Return 'reverseWords' from the function

*/

function reverseWords(string) {

  var reverseString = string.split('').reverse().join('');
  var reverseWords = reverseString.split(' ').reverse().join(' ');
  return reverseWords;

}
