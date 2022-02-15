/* exported chunk */

/* Pseudocode

Goal: return a new Array of Arrays

-Declare a function with its name and parameters
-Within the function, create a variable ('newArray') that will hold our values
-Create a condition that will iterate through our array
      -In the final expression for this loop, use the addition assignment on our
       variable 'i' and 'size'
        -We use the addition assignment for the final expression because it allows us
        to increment the counter by the 'size' we need
      -Create a new variable within this condition ('leftOver'). This will hold
       the value of our expression
        -Apply the slice method onto the array object and call it with two arguments
          -The 'i' represents the beginning index of where we want to begin our
           slice method
           -The end extraction is represents by 'i + size' because this is where
            we want the exctraction to stop
          -Utilizing these two arguments will allow us to slice the chunk that needs
           to be returned
        -Apply the push method on the 'newArray' object and pass the argument
         'leftOver' into it
          -Whatever chunk(s) that was extracted in variable 'leftOver' will
           now be pushed into our variable 'newArray'
 -Return the variable from our function
*/

function chunk(array, size) {

  var newArray = [];

  for (var i = 0; i < array.length; i += size) {
    var leftOver = array.slice(i, i + size);
    newArray.push(leftOver);
  }
  return newArray;
}
