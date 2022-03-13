/* exported unique */

/* Pseudocode

Goal: A new Array containing only the unique elements of array, in the order
they first appear in array.

-Declare a function with its name and parameter
-Create a storage for the return value ('storage')
-Create a for loop that will iterate through array
-Push items that do not exist into our storage
-Return variable 'storage' from our function

*/

function unique(array) {

  var storage = [];
  for (var i = 0; i < array.length; i++) {
    if (!storage.includes(array[i])) {
      storage.push(array[i]);
    }
  }
  return storage;
}
