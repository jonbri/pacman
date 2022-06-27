var toBeat = document.getElementById("toBeat"),
  killedLog = document.getElementById("killed-log"),
  killsLog = document.getElementById("kills-log"),
  deathsLog = document.getElementById("deaths-log"),
  levelLog = document.getElementById("level-log"),
  pointsLog = document.getElementById("points-log"),
  fruitLog = document.getElementById("fruit-log"),
  keysLog = document.getElementById("keys-log"),
  timer = document.getElementById("timer"),
  dotsUntilFruit = document.getElementById("dotsUntilFruit");

const App = {
  level: 1,
  points: 0,
  killedAggregate: [],
  killCount: 0,
  deathsCount: 0,
  fruitCount: 0,
  keyCount: 0,
  opponentScore: getOpponentScore(),

  addKilledLog: (i) => {
    App.killedAggregate.push(i)
    printApp();
  },
  setLevel: (i) => {
    App.level = i;
    printApp();
  },
  setPoints: (i) => {
    App.points = i;
    printApp();
  },
  incrementKills: () => {
    App.killCount++;
    printApp();
  },
  incrementDeaths: () => {
    App.deathsCount++;
    printApp();
  },
  incrementFruit: () => {
    if (App.level >= 13) {
      App.keyCount++;
    } else {
      App.fruitCount++;
    }
    printApp();
  },

  printDotsUntilFruit: (i) => {
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
};


function printApp() {
  function printKilledLog() {
    // clear table
    while(killedLog.firstChild) {
      killedLog.removeChild(killedLog.firstChild);
    }
    var highestLevel = App.level;
    for (var k = 1; k <= highestLevel; k++) {
      var tr = document.createElement('tr')
      var td0 = document.createElement('th')
      var td1 = document.createElement('td')
      td0.innerHTML = `${k} `;
      var howManyPerLevel = App.killedAggregate.filter((x) => x === k).length;
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
  printKilledLog();

  pointsLog.innerHTML = App.points;
  levelLog.innerHTML = App.level;
  killsLog.innerHTML = App.killCount;
  deathsLog.innerHTML = App.deathsCount;
  fruitLog.innerHTML = App.fruitCount;
  keysLog.innerHTML = App.keyCount;
  toBeat.innerHTML = App.opponentScore;
}

printApp();
