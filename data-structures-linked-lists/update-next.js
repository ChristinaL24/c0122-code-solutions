/* exported updateNext */

// return: None (undefined).

function updateNext(list, value) {
  if (list.next === null) {
    return list;
  } else {
    list.next.data = value;
  }
}
