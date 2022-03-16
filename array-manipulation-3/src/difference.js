/* exported difference */

/* Pseudocode

Goal: A new Array containing the symmetric difference between first and second.

-Declare function with its name and parameters
-Create a storage to hold our return array value ('storage')
-Write a condition that states: if there is a common value that exist in the two
 arrays, do not push. If the value does not exist, then to push
  -To achieve this condition, create two for loops
  -First loop: Iterate through the 'first' array and check if the items in 'first
   at i' exist in the 'second' array. If it does not exist, push into 'storage'
   -Second loop: Iterate through 'second' array and check if the items in
    'second at i' exist in 'first' array. If it does not exist, push into 'storage'
-Return storage from function

*/

function difference(first, second) {
  var storage = [];

  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      storage.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (!first.includes(second[j])) {
      storage.push(second[j]);
    }
  }
  return storage;
}
