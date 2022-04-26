/* exported postpone */

function postpone(queue) {
  const empty = queue.peek();
  if (empty === undefined) {
    return;
  }
  const remove = queue.dequeue();
  queue.enqueue(remove);
}
