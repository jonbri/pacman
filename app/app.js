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
var loading = document.getElementById("loading");
var toBeat = document.getElementById("toBeat");
var killedLog = document.getElementById("killed-log");
var killsLog = document.getElementById("kills-log");
var deathsLog = document.getElementById("deaths-log");
var levelLog = document.getElementById("level-log");
var pointsLog = document.getElementById("points-log");
var fruitLog = document.getElementById("fruit-log");
var keysLog = document.getElementById("keys-log");
var timer = document.getElementById("timer");
var dotsUntilFruit = document.getElementById("dotsUntilFruit");

// avoid initial movement
setTimeout(() => {
  loading.style.display = 'none'
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
function printDotsUntilFruit(i) {
  if (i <= 5) {
    dotsUntilFruit.style.color = 'red';
    dotsUntilFruit.style.fontSize = '20px';
    dotsUntilFruit.style.fontWeight = 'bold';
  } else {
    dotsUntilFruit.style.color = 'inherit';
    dotsUntilFruit.style.fontSize = 'inherit';
    dotsUntilFruit.style.fontWeight = 'inherit';
  }
  dotsUntilFruit.innerHTML = i;
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

var deathsCount = -1;
function incrementDeaths() {
  deathsCount++;
  deathsLog.innerHTML = deathsCount;
}
incrementDeaths();

var fruitCount = 0;
var keyCount = 0;
function incrementFruit() {
  if (_level >= 13) {
    keyCount++;
  } else {
    fruitCount++;
  }
  fruitLog.innerHTML = fruitCount;
  keysLog.innerHTML = keyCount;
}
fruitLog.innerHTML = fruitCount;
keysLog.innerHTML = keyCount;

toBeat.innerHTML = getOpponentScore();
