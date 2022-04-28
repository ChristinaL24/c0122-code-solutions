/* exported removeTail */

// return: None (undefined).

function removeTail(list) {
  if (list.next === null) return; // when node contain one node, do nothing
  while (list.next !== null) { // while list.next is not equal to null
    list = list.next; // assign value of list.next to list
    if (list.next.next === null) { // if list.next.next is equal to null
      list.next = null; // assign list.next as null
    }
  }
}
