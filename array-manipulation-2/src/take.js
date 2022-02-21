/* exported take */

/* Pseudocode

Goal: return a new array containing the first count elements of array
-Declare a function with its name and parameters
-Within the function, create a variable (newArray) that will hold the value of our expression
-Apply the slice method of the array object and pass it with two arguments
  -The two arguments will be (0, count)
    -Zero represents the beginning index - it is where our slice will begin
    -'count' represents where the slicing should stop
-Return our variable 'newArray' from the function

*/

function take(array, count) {

  var newArray = array.slice(0, count);
  return newArray;

}
