/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  const pop = stack.pop();
  if (pop === undefined) {
    return undefined;
  }
  stack.push(value);
  stack.push(pop);
}
