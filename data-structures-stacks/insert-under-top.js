/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  const pop = stack.pop();
  if (pop === undefined) {
    return undefined;
  }
  stack.push(value);
  stack.push(pop);
}

/*

Tim's code:

function insertUnderTop(stack, value) {
  const top = stack.pop();
  if (typeof top === undefined) return;
  stack.push(value);
  stack.push(top);
}

*/
