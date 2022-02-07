/* exported getKeys */

/* Pseudocode

Goal: return the object's property keys
-Declare a function with its name and parameter
-Create a storage for our array
-Create a condition that will loop through the key of our object
-Add the key to our storage
-Return our variable from the function
*/

function getKeys(object) {
  var array = [];
  for (var key in object) {
    array.push(key);
  }
  return array;
}
