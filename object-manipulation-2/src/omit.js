/* exported omit */

/* Pseudocode

Goal: Return a new object containing all of the properties of source that
are not listed in keys
-Declare a function with its name and parameter
-Create a variable ('object') that will hold the value of our empty object literal
-Create a 'for in loop'
  -Within our loop, write a statement:
    -If key exist in keys array, DO NOT add
    -If key does not exist in keys array, ADD
    -Create a variable ('value') that will hold the value of source at key
    -Assign the value of our variable to 'object at key'
-Return our variable('object') from the function

*/

function omit(source, keys) {

  var object = {};
  for (var key in source) {
    if (!keys.includes(key)) {
      var value = source[key];
      object[key] = value;
    }
  }
  return object;
}
