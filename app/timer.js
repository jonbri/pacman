var timerInterval;
(function() {
  var timerCount = 0;
  timerInterval = setInterval(function() {
    const mins = Math.floor(timerCount / 60);
    const secs = timerCount % 60;
    timer.innerHTML = `${mins}m  ${secs}s`;
    timerCount++;
  }, 1000);
}());
