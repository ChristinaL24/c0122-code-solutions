/* exported takeSmaller */

// Return: The smaller of the first two values in the queue.
// The other value is moved to the back of the queue.

function takeSmaller(queue) {
  const firstValue = queue.dequeue();
  if (firstValue === undefined) {
    return undefined;
  }
  const secondValue = queue.dequeue();
  if (secondValue === undefined) {
    return firstValue;
  }
  if (firstValue < secondValue) {
    queue.enqueue(secondValue); // removes the first value from `queue` and moves the second value to the back of `queue`
    return firstValue; // returns the first value
  } else if (firstValue === secondValue) {
    queue.enqueue(secondValue); // removes the first value from `queue` and moves the second value to the back of `queue`
    return firstValue; // returns the first value
  } else if (firstValue > secondValue) {
    queue.enqueue(firstValue); // moves the first value to the back of `queue` and removes the second value from `queue`
    return secondValue; // returns the second value
  }
}
