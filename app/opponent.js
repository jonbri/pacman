// https://stackoverflow.com/a/7228322/2295034
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function getOpponentScore() {
  var easy = randomIntFromInterval(1, 5);
  var medium = randomIntFromInterval(3, 7);
  var hard = randomIntFromInterval(5, 11);
  return `${easy} ${medium} ${hard}`;
}
