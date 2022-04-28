/* exported removeNext */

// return: none(undefined)

function removeNext(list) {
  if (list.next === null) return; // when list contains one node
  const remainingNodes = list.next.next; // get all nodes after second node
  list.next = remainingNodes; // assign remaining nodes to come after first node
}
