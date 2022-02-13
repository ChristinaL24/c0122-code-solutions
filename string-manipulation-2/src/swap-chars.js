/* exported swapChars */

/* Pseudocode

Goal: return string with the characters at firstIndex and secondIndex swapped.

-Declare a function with its name and parameters
-
*/

function swapChars(firstIndex, secondIndex, string) {

  var array = string.split('');

  var firstSwap = array[secondIndex];

  var secondSwap = array[firstIndex];

  array[firstIndex] = firstSwap;
  array[secondIndex] = secondSwap;

  return array.join('');
}
