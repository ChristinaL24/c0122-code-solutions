/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  const firstValue = queue.dequeue(); // returns one value
  queue.enqueue(firstValue); // go back into queue and add back value we took out
  return queue.dequeue(); // move front val to back and takes out second value
}
