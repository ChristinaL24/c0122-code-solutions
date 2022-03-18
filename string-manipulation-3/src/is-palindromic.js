/* exported isPalindromic */

/* Pseudocode

Goal: A Boolean indicating whether or not string is a palindrome.

-Declare a function with its name and parameter
-Create a storage that will hold our replace values
  -The value of string.replace is being assigned to variable replaceString
    -Purpose: we eliminate the space so that we can check if the string is a
     palindrome
-Create a storage ('reverseString') that will hold our split values
-After we have split our string, use the reverse method
-Use the join method to join 'reverseString' and assign it to var 'joinString'
-Create a condition that checks whether or not 'replaceString' is strictly equal
to 'joinString'
  -If they are equal, return true
  -If they are not return false

*/

function isPalindromic(string) {

  var replaceString = string.replace(' ', '');
  var reverseString = replaceString.split('');
  reverseString.reverse();
  var joinString = reverseString.join('');
  if (replaceString === joinString) {
    return true;
  }
  return false;
}
