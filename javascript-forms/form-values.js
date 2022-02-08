var $contactForm = document.querySelector('#contact-form');

$contactForm.addEventListener('submit', preventFunction);

function preventFunction(event) {
  event.preventDefault();
  var object = {};
  object.name = $contactForm.elements.name.value;
  object.email = $contactForm.elements.email.value;
  object.message = $contactForm.elements.message.value;
  console.log(object);
  $contactForm.reset();
}
