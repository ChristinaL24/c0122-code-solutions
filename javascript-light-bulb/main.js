
var lightBulb = document.querySelector('.light-bulb');
var body = document.querySelector('body');
lightBulb.addEventListener('click', lightBulbFunction);
var lightBulbOn = false;

function lightBulbFunction() {
  lightBulbOn = !lightBulbOn;
  if (lightBulbOn) {
    lightBulb.className = 'light-bulb off';
    body.className = 'body off';
  } else {
    lightBulb.className = 'light-bulb on';
    body.className = 'body on';
  }
}
