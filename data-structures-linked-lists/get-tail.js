/* exported getTail */

// return: The data value of the last node in the list.

function getTail(list) {

  while (list !== null) { // condition: run while list is not null
    if (list.next === null) { // if node is equal to null
      return list.data; // return the previous node before null
    }
    list = list.next; // move to next node
  }
}
