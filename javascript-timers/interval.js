var $h1 = document.querySelector('h1');
var count = 4;

function countDownIntervals() {
  count--;
  if (count > 0) {
    $h1.textContent = count;
  } else {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countDown);
  }
}

var countDown = setInterval(countDownIntervals, 1000);

/* Cody used null as a placeholder for the variable countDown until we got the
value for setInterval */
