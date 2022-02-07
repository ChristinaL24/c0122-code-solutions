/* exported getValues */

/* Pseudocode

Goal: return an array of the object's property values
-Declare a function with its name and parameter
-Create a storage for our array
-Create a condition that will loop through the key of our object
-Add the key to our storage
-Return our variable from the function
*/

function getValues(object) {
  var array = [];
  for (var key in object) {
    array.push(object[key]);
  }
  return array;
}
