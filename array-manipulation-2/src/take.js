/* exported take */

/* Pseudocode

Goal: return a new array containing the first count elements of array

*/

function take(array, count) {

  var newArray = [];
  for (var i = 0; i <= count; i++) {
    newArray = array[i];
  }
  return newArray;
}
