var $modal = document.querySelector('.modal');
var $blueOpenButton = document.querySelector('.blue-open-button');
var $closeModal = document.querySelector('.close-modal');

$blueOpenButton.addEventListener('click', function (event) {
  $modal.style.display = 'flex';

});

$closeModal.addEventListener('click', function (event) {
  $modal.style.display = 'none';
});
