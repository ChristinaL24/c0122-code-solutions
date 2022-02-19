var $spanKeys = document.querySelectorAll('span');
var $index = 0;

document.addEventListener('keydown', keyDownFunction);

function keyDownFunction(event) {
  if (event.key === $spanKeys[$index].textContent) {

    $spanKeys[$index].className = 'blue-char';
    $index++;
    $spanKeys[$index].className = 'underline';
  } else {
    $spanKeys[$index].className = 'red-char underline';

  }
}
