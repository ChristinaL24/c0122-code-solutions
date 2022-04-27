/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const firstPop = stack.pop();
  if (firstPop === undefined) {
    return undefined;
  }
  const secondValue = stack.peek();
  stack.push(firstPop);
  return secondValue;
}

/*

Tim's Code

function get2ndFromTop(stack) {
  const top = stack.pop();
  if (typeof top === 'undefined') return;
  const next = stack.peek();
  stack.push(top);
  return next;
}

*/
