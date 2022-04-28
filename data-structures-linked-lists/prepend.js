/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

// return: The new first node in the list.

function prepend(list, value) {
  const newList = new LinkedList(value); // create a new variable for our new linked list (do not motify original list)
  newList.next = list; // Attach all nodes after first node
  return newList;
}
