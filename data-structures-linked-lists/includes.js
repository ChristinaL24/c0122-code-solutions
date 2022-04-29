/* exported includes */

// return: A boolean indicating whether or not value can be found on any node of the list.

function includes(list, value) {
  while (list !== null) {
    if (list.data === value) { // check if list is strictly equal to value & compare list.data to value
      return true;
    }
    list = list.next; // go to next node
  }
  return false;
}

// Thanks for the last seven weeks Chunin Tim!
