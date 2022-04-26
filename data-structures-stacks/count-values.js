/* exported countValues */

function countValues(stack) {
  // assign zero to a variable
  let i = 0;
  // use a while loop to help us count our values
  while (stack.pop() !== undefined) { // while stack.pop() is not undefined, keep incrementing
    i++;
  }
  return i;
}
