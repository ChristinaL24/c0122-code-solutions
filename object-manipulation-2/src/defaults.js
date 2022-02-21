/* exported defaults */

/* Pseudocode

Goal: does not return anything but modifies target;
-Declare a function with its name and parameter
-Create a 'for in loop'
  -Within our loop, write:
    -If 'key' does not exist within target object, add key-value pairs
     into target
      -target[key] === undefined (undefined represents the key not existing in target)
    -If 'key' does exist within target object, do not add
*/

function defaults(target, source) {

  for (var key in source) {
    if (target[key] === undefined) {
      var value = source[key];
      target[key] = value;
    }
  }
}
