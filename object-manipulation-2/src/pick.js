/* exported pick */

/* Pseudocode

Goal: return a new Object containing all of the properties of source listed in keys.
If a key is listed in keys, but is not defined in source, then that property
is not added to the new Object.
-Declare a function with its name and parameter
-Create a storage ('object') that will hold the value of our object literal
-Create a for loop
  -Initialization statement is var i = 0
  -Condition that states i is less than keys.length
  -A final expression of i being incremented by 1
  -Within our for loop:
    -Create a new variable (key) - this will hold our value of keys at i
    -Create a conditional statement that states:
    -If source at key is strictly not equal to undefined (basically means if
     this statement evaluates to true aka "if the key exist in the source object"),
     then to assign 'source at key' to the variable value
    -Assign the value of the variable 'value' to 'object at key'
-Return the variable object from the function

*/

function pick(source, keys) {

  var object = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (source[key] !== undefined) {
      var value = source[key];
      object[key] = value;
    }
  }
  return object;
}
