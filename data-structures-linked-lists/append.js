/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

// return: None (undefined).

function append(list, value) {
  const appendNode = new LinkedList(value);
  while (list !== null) { // use a while loop - run while list is not null
    if (list.next === null) { // if node is equal to null
      list.next = list;
      list.next = appendNode; //  append new node
      break; // use break to stop loop when if conditional has been fulfilled
    }
    list = list.next; // move to next node
  }
}
