/* exported takeValueAtIndex */

// Return: The value found at index position from the "front" of the queue. Values in front of it are cycled to the "back" of the queue.

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return undefined;
  } else {
    for (let i = 0; i < index; i++) { // "cycling through index"
      const frontValue = queue.dequeue(); // remove front value in queue
      queue.enqueue(frontValue); // return front value that we removed into queue
    }
  }
  return queue.dequeue(); // remove first number from queue
}
