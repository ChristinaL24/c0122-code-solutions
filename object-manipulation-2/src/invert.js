/* exported invert */

/* Pseudocode

Goal: A new Object containing all properties of source, but with the keys
and values inverted.
-Declare a function with its name and parameter
-Create a storage (invertedObjects) that will hold our return value of an object
literal
-Create a 'for in loop'
  -Within our loop, write a statement:
    -Declare a variable ('value') and assign the value of source at key to the
     variable value
      -source[key] will give us our value
    -Assign the value of key to the invertedObjects object literal
      -Once we have our value, we will create a new key value pair by assigning
       invertedObjects at value = key
-Return our variable from the function

*/

function invert(source) {

  var invertedObjects = {};
  for (var key in source) {
    var value = source[key];
    invertedObjects[value] = key;
  }
  return invertedObjects;
}
