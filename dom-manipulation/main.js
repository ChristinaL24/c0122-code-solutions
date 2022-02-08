/* Pseudocode

-Create a storage that will store the number of times the user has
 clicked the button
-Create a variable that will hold the value of our DOM for '.hot-button'
-Create a variable that will hold the value of our DOM for '.click-count'
-Add an event listener to our click event
-Create a function with its name and parameter(if any)
-Create a statement that will increment the counter variable each time the event listener is clicked
-Write a conditional statement that will display cold, cool, tepid, warm, hot, and nuclear once a certain
 amount of clicks is reached
*/
var counter = 0;
var hotButton = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');
hotButton.addEventListener('click', hotFunction);

function hotFunction() {
  counter++;
  clickCount.textContent = 'Clicks: ' + counter;

  if (counter < 4) {
    hotButton.className = 'hot-button cold';
  } else if (counter < 7) {
    hotButton.className = 'hot-button cool';
  } else if (counter < 10) {
    hotButton.className = 'hot-button tepid';
  } else if (counter < 13) {
    hotButton.className = 'hot-button warm';
  } else if (counter < 16) {
    hotButton.className = 'hot-button hot';
  } else {
    hotButton.className = 'hot-button nuclear';
  }

}
