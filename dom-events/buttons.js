function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('target:', buttonClicked);
}

var buttonClicked = document.querySelector('.click-button');
buttonClicked.addEventListener('click', handleClick);

function handleMouseOver(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('target:', hoverButton);
}

var hoverButton = document.querySelector('.hover-button');
hoverButton.addEventListener('mouseover', handleMouseOver);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('target:', doubleClickButton);
}

var doubleClickButton = document.querySelector('.double-click-button');
doubleClickButton.addEventListener('dblclick', handleDoubleClick);
