/* exported zip */

/* Pseudocode

Goal: Return an array of arrays

-Create a function with its name and parameters
-Create a storage for our return values
-

*/

function zip(first, second) {
  var zipStorage = [];
  for (var i = 0; i < first.length; i++) {
    if (second.length > i) {
      var indexStorage = [];
      var firstArray = first[i];
      var secondArray = second[i];
      indexStorage.push(firstArray);
      indexStorage.push(secondArray);
      zipStorage.push(indexStorage);
    }
  }
  return zipStorage;
}
