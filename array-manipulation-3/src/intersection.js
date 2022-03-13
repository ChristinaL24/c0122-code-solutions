/* exported intersection */

/* Pseudocode

Goal: a new array containing a unique value that is found in both the first
and second array

-Declare a function with its name and parameters
-Create a storage ('storage') to hold our return value array
-Write a condition that states:
  -If a value is shared between both values, add it to 'storage'. If it is not,
   do not add to 'storage'
    -If 'first at i' exist in 'second', push
-Return 'storage' variable from our function

*/

function intersection(first, second) {
  var storage = [];

  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      storage.push(first[i]);
    }
  }
  return storage;
}
