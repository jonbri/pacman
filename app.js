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

var gameLog = document.getElementById("game-log");
var toBeat = document.getElementById("toBeat");
var killedLog = document.getElementById("killed-log");
var killsLog = document.getElementById("kills-log");
var levelLog = document.getElementById("level-log");
var pointsLog = document.getElementById("points-log");
var fruitLog = document.getElementById("fruit-log");
var timer = document.getElementById("timer");

// avoid initial movement
setTimeout(() => {
  gameLog.style.display = 'block'
}, 1000);

var _level = 1;
function setLevel(i) {
  _level = i;
  addKilledLog(-1);
  printLevel();
}

function printLevel() {
  levelLog.innerHTML = _level;
}
function printPoints(points) {
  pointsLog.innerHTML = points;
}

var killedAggregate = [];
function addKilledLog(i) {
  if (i > 0) {
    killedAggregate.push(i)
  }
  while(killedLog.firstChild) {
    killedLog.removeChild(killedLog.firstChild);
  }

  var highestLevel = _level;
  for (var k = 1; k <= highestLevel; k++) {
    var tr = document.createElement('tr')
    var td0 = document.createElement('th')
    var td1 = document.createElement('td')
    td0.innerHTML = `${k} `;

    var howManyPerLevel = killedAggregate.filter((x) => x === k).length;

    var xString = '';
    for (var j = 0; j < howManyPerLevel; j++) {
      xString += "x";
    }

    td1.innerHTML = xString;

    tr.append(td0)
    tr.append(td1)
    killedLog.append(tr);
  }
}
addKilledLog(-1);

var killCount = -1;
function incrementKills() {
  killCount++;
  killsLog.innerHTML = killCount;
}
incrementKills();

var fruitCount = -1;
var keyCount = 0;
function incrementFruit() {
  fruitCount++;
  if (_level >= 13) {
    keyCount++;
    fruitLog.innerHTML = `${fruitCount} (${keyCount})`
  } else {
    fruitLog.innerHTML = fruitCount;
  }
}
incrementFruit();

toBeat.innerHTML = getOpponentScore();

// timer
var timerCount = 0;
var timerInterval = setInterval(function() {
  const mins = Math.floor(timerCount / 60);
  const secs = timerCount % 60;
  timer.innerHTML = `${mins}m  ${secs}s`;
  timerCount++;
}, 1000);
