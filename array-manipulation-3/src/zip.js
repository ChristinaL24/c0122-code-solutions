/* exported zip */

/* Pseudocode

Goal: Return an array of arrays

-Create a function with its name and parameters
-Create a storage for our return values ('zipStorage')
-Create a for loop that will iterate through both our first and second arrays
  -If the length of the second array is greater than i:
    -Create a storage that will hold our subarrays ('subArrays')
    -Set the values of 'first at i' and 'second at i' to its own respective variables
    -Push each respective variables into 'subArrays'
    -Push 'subArrays' into the 'zipStorage' array
-Return our variable 'zipStorage' from our function

*/

function zip(first, second) {
  var zipStorage = [];
  for (var i = 0; i < first.length; i++) {
    if (second.length > i) {
      var subArrays = [];
      var firstArray = first[i];
      var secondArray = second[i];
      subArrays.push(firstArray);
      subArrays.push(secondArray);
      zipStorage.push(subArrays);
    }
  }
  return zipStorage;
}
