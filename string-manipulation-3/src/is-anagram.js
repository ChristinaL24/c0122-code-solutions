/* exported isAnagram */

/* Pseudocode

Goal: A Boolean indicating whether or not secondString is an anagram of firstString.

-Declare function with its name and parameters
-Create two storages to hold our values
  -Storage 1 = 'first'
  -Storage 2 = 'second'
-For the firstString and secondString parameters:
  -Apply the replaceAll method to remove spaces
  -Apply the split method to convert our string into a characters in an array
  -Apply the sort method to sort our items in our array in alphabetical order
  -Apply the join method to concatenate all of our items into one string
-Assign the return of the values to its respective variables 'first' and 'second'
-Create a condition that states: if 'first' is strictly equal to 'second', return true;
 if else, return false
*/

function isAnagram(firstString, secondString) {

  var first = firstString.replaceAll(' ', '').split('').sort().join('');
  var second = secondString.replaceAll(' ', '').split('').sort().join('');

  if (first === second) {
    return true;
  }
  return false;
}
