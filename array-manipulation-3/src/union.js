/* exported union */

/* Pseudocode

Goal: A new Array containing unique values from both first and second in the order they appear.

-Declare a function with its name and parameter
-Create a storage to hold our return variable
-Write a condition that states: push all values into our storage except the duplicates
 that appear after the initial appearance
  -Create two loops:
    -Loop 1: Push the items from 'first at i' into our storage
    -Loop 2: If the items of 'second at j' do not exist, add it into our storage
-Return our variable 'storage' from the function

*/

function union(first, second) {

  var storage = [];

  for (var i = 0; i < first.length; i++) {
    storage.push(first[i]);
  }
  for (var j = 0; j < second.length; j++) {
    if (!storage.includes(second[j])) {
      storage.push(second[j]);
    }
  }
  return storage;
}
