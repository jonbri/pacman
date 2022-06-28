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
  dotsUntil: '',
  opponentScore: getOpponentScore(),

  addKilledLog: (i) => {
    App.killedAggregate.push(i)
    App.render();
  },
  set: (key, value) => {
    App[key] = value;
    App.render();
  },
  incrementKills: () => {
    App.killCount++;
    App.render();
  },
  incrementDeaths: () => {
    App.deathsCount++;
    App.render();
  },
  incrementFruit: () => {
    if (App.level >= 13) {
      App.keyCount++;
    } else {
      App.fruitCount++;
    }
    App.render();
  },

  render: () => {
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

    function printDotsUntil() {
      if (App.dotsUntil <= 5) {
        dotsUntilFruit.style.color = 'red';
        dotsUntilFruit.style.fontSize = '20px';
        dotsUntilFruit.style.fontWeight = 'bold';
      } else {
        dotsUntilFruit.style.color = 'inherit';
        dotsUntilFruit.style.fontSize = 'inherit';
        dotsUntilFruit.style.fontWeight = 'inherit';
      }
      dotsUntilFruit.innerHTML = App.dotsUntil;
    }
    printDotsUntil();

    pointsLog.innerHTML = App.points;
    levelLog.innerHTML = App.level;
    killsLog.innerHTML = App.killCount;
    deathsLog.innerHTML = App.deathsCount;
    fruitLog.innerHTML = App.fruitCount;
    keysLog.innerHTML = App.keyCount;
    toBeat.innerHTML = App.opponentScore;
  }

};

App.render();
