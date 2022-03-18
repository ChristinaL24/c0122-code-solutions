var currentCount = 3;

function countdown() {
  if (currentCount > 0) {
    console.log(currentCount);
    currentCount--;
  } else {
    console.log('Blast Off!');
    clearInterval(countDown);
  }
}

const countDown = setInterval(countdown, 1000);
