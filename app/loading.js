var gameLog = document.getElementById("game-log"),
  loading = document.getElementById("loading");

// avoid initial movement
setTimeout(() => {
  loading.style.display = 'none'
  gameLog.style.display = 'block'
}, 1000);

