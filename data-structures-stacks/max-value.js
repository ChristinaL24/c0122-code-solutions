/* exported maxValue */

function maxValue(stack) {
  let largestValue = stack.pop();
  if (largestValue === undefined) {
    return -Infinity;
  }
  while (stack.peek() !== undefined) {
    const value = stack.pop();
    if (largestValue < value) {
      largestValue = value;
    }
  }
  return largestValue;
}

/*

function maxValue(stack) {
  let max = -Infinity;
  while (typeof stack.peek() !== 'undefined') {
    max = Math.max(max, stack.pop());
  }
  return max;
}

*/
