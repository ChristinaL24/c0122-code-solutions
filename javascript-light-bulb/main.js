
var counter = 0;
var lightBulb = document.querySelector('.light-bulb');
var body = document.querySelector('body');
lightBulb.addEventListener('click', lightBulbFunction);

function lightBulbFunction() {

  counter++;

  if (counter % 2 !== 0) {
    lightBulb.className = 'light-bulb off';
    body.className = 'body off';
  } else {
    lightBulb.className = 'light-bulb on';
    body.className = 'body on';
  }
}
