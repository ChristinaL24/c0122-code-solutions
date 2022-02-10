var taskList = document.querySelector('.task-list');
taskList.addEventListener('click', taskListFunction);

function taskListFunction(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);

  if (event.target && event.target.nodeName === 'BUTTON') {
    var closestElement = event.target.closest('.task-list-item');
    console.log('closest .task-list-item', closestElement);
  }
}
