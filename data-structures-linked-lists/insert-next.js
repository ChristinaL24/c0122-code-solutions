/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

// return: None (undefined)

function insertNext(list, value) { // two params; goal is to insert value as the next node
  const newList = new LinkedList(value); // create a new list (do not mutate original)
  const oldList = list.next;
  list.next = newList;
  list.next.next = oldList;
}
