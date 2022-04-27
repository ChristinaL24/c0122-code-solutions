/* exported isEmpty */

function isEmpty(queue) {
  const empty = queue.peek();
  if (empty === undefined) {
    return true;
  } else {
    return false;
  }
}
