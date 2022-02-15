/* exported chunk */

/* Pseudocode

Goal: return a new Array of Arrays

-Declare a function with its name and parameters
-Within the function, create two variables that will hold our values
  -The first variable (newArray) will hold all of our values from the first condition
   statement.
   -The second variable (arrayLeftOver) will hold all the values that were not pushed
    into the first variable
-Create two conditions that will iterate through our array
  -In the first for loop, create a loop that will push all the values of array
   at i into the 'newArray' variable
  -In the second for loop, create a condition that will loop through our variable
   'newArray'
      -Set the condition for this loop at 'newArray.length' (since this is
       where we will pull our values). In the final expression for this loop, use the
       addition assignment on our variable j and size
      -We use the addition assignment for the final expression because it allows us
       to increment the counter by the 'size' we need
      -Create a new variable within this condition ('leftOver'). This will hold
       the value of our expression
        -Apply the slice method onto the newArray object and call it with two arguments
          -The 'j' represents the beginning index of where we want to begin our
           slice method
           -The end extraction is represents by 'j + size' because this is where
            we want the exctraction to stop
          -Utilizing these two arguments will allow us to slice the chunk that needs
           to be returned
        -Apply the push method on the 'arrayLeftOver' object and pass the argument
         'leftOver' into it
          -Whatever chunk(s) that was extracted in variable 'leftOver' will
           now be pushed into our variable 'arrayLeftOver'
 -Return the variable from our function
*/

function chunk(array, size) {

  var newArray = [];
  var arrayLeftOver = [];

  for (var i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }

  for (var j = 0; j < newArray.length; j += size) {
    var leftOver = newArray.slice(j, j + size);
    arrayLeftOver.push(leftOver);
  }
  return arrayLeftOver;
}
