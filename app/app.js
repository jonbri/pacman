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
  pointsAggregate: [0,0],
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
    if (key === 'points') {
      if (App.pointsAggregate.length <= App.level) {
        App.pointsAggregate.push(0);
      }
      let previousLevelPoints = 0;
      if (App.level > 1) {
        previousLevelPoints = App.pointsAggregate[App.level - 1];
      }
      let perLevel = App.points - previousLevelPoints;
      if (!perLevel) {
        perLevel = 0;
      }
      App.pointsAggregate[App.level] = perLevel;
    }
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
    function clearTable() {
      while(killedLog.firstChild) {
        killedLog.removeChild(killedLog.firstChild);
      }
    }
    function generateXString(howMany) {
      let xString = '';
      for (var i = 0; i < howMany; i++) {
        xString += "x";
      }
      return xString;
    }
    function printTable() {
      clearTable();
      for (var i = 1; i <= App.level; i++) {
        var tr = document.createElement('tr')
        var td0 = document.createElement('th')
        var td1 = document.createElement('td')
        var td2 = document.createElement('td')
        td0.innerHTML = `${i}`;
        var howManyPerLevel = App.killedAggregate.filter((x) => x === i).length;
        td1.innerHTML = generateXString(howManyPerLevel);
        td2.innerHTML = `(${App.pointsAggregate[i]})`;
        tr.append(td0)
        tr.append(td1)
        tr.append(td2)
        killedLog.append(tr);
      }
    }
    printTable();

    pointsLog.innerHTML = App.points;
    levelLog.innerHTML = App.level;
    killsLog.innerHTML = App.killCount;
    deathsLog.innerHTML = App.deathsCount;
    fruitLog.innerHTML = App.fruitCount;
    keysLog.innerHTML = App.keyCount;
    toBeat.innerHTML = App.opponentScore;
    dotsUntilFruit.innerHTML = App.dotsUntil;
    dotsUntilFruit.className = App.dotsUntil !== '' && App.dotsUntil <= 5 ? 'dotsUntilRed' : '';
  }

};

App.render();
