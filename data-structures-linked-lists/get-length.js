/* exported getLength */

// return: A number representing the number of nodes in the list.

function getLength(list) {
  let counter = 1; // set to one to represent intial amount of nodes
  while (list.next) { // while list.next is true (before it hits null)
    counter++; // increment counter
    list = list.next; // assign list.next to list
  }
  return counter;
}
