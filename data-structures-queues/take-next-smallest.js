/* exported takeNextSmallest */

// Return: This first value in the queue that is less than or equal to its successor.
// Until such a value is found, values are cycled to the "back" of the queue.

function takeNextSmallest(queue) {
  let firstValue = queue.dequeue();
  if (firstValue === undefined) {
    return undefined;
  }
  let secondValue = queue.peek();
  if (secondValue === undefined) {
    return firstValue;
  }
  while (firstValue >= secondValue) {
    queue.enqueue(firstValue);
    firstValue = queue.dequeue();
    secondValue = queue.peek();
  }
  return firstValue;
}
