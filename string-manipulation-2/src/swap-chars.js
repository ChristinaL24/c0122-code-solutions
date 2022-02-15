/* exported swapChars */

/* Pseudocode

Goal: return string with the characters at firstIndex and secondIndex swapped.

-Declare a function with its name and parameters
-Create a variable that will hold our value of string.split('');
  -The purpose of this is to split our sentences into characters so that we may
    manipulate the characters at its indexes
-Create two variables that will hold our values when we use bracket notation to
 access them
  -In the first variable 'firstSwap', use bracket notation on our variable 'array' to access
   the character at secondIndex and assign it to the variable. This will swap
   the first index with the second
  -In the second variable 'secondSwap', use bracket notation on our variable 'array'
   to access the character at firstIndex and assign its value to the variable.
   This will swap the second index w/ the first
-Assign the value of variable 'firstSwap' to 'array at firstIndex'
-Assign the value of the variable 'secondSwap' to 'array at secondIndex'
-Apply the join method of the array object and return the variable from the function

*/

function swapChars(firstIndex, secondIndex, string) {

  var array = string.split('');

  var firstSwap = array[secondIndex];

  var secondSwap = array[firstIndex];

  array[firstIndex] = firstSwap;
  array[secondIndex] = secondSwap;

  return array.join('');
}
