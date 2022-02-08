
var $userName = document.querySelector('#user-name');
var $userEmail = document.querySelector('#user-email');
var $userMessage = document.querySelector('#user-message');

$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);

$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handleInput);

$userMessage.addEventListener('focus', handleFocus);
$userMessage.addEventListener('blur', handleBlur);
$userMessage.addEventListener('input', handleInput);

function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name');
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('even.target.name');
}

function handleInput(event) {
  console.log('value of name:', event.target.value);

}
