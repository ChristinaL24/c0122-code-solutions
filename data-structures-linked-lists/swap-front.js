/* exported swapFront */

// return: The new "head" node of the list.

function swapFront(list) {
  if (list.next === null) return list;
  const first = list.data; // get first node
  const second = list.next.data; // get second node
  list.data = second; // assign second node to be head
  list.next.data = first; // assign first node after head
  return list;
}
