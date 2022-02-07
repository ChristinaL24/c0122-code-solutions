/* exported toObject */

/* Pseudocode

Goal: an object with one property consisting of the passed keyValuePair
-Declare a function with its name and parameter
-Declare a storage that will hold our keyValuePair at the first index
-Declare a storage that will hold our keyValuePair at the second index
-Declare an object literal that will hold our object and its property
-Set the result of the expression to equal object at key
-Return the object from the function;

*/

function toObject(keyValuePair) {
  var key = keyValuePair[0];
  var value = keyValuePair[1];
  var object = {};
  object[key] = value;
  return object;
}
