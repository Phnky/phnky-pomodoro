var d;
var startTime;
var currentTime = d;
var clockRunning = false;
var timeElapsed = [0, 0, 0];
var timeElapsedRaw = 0;
var timerInitial = 300; //300 = 5 Minutes


//functions
function clockRun() {
  if (clockRunning == true) {
    updateClock();
    currentTime = [d.getHours(), d.getMinutes(), d.getSeconds()];
    document.getElementById("current-time-display").innerHTML = currentTime.join(":");
    updateTimeElapsed();
    updateTimeLeft();
  }
  setTimeout(clockRun, 1000); //runs once a second
}

function setTimer(a) {
  if (clockRunning == false) {
    console.log("setting time to " + a);
    timerInitial = a;
  } else{
    console.log("timer not set clock is running");
  }
}

function startClock() {
  startTime = [d.getHours(), d.getMinutes(), d.getSeconds()];
  document.getElementById("start-time-display").innerHTML = startTime.join(":");
  document.getElementById("current-time-display").innerHTML = startTime.join(":");
  document.getElementById("time-elapsed-display").innerHTML = "0:0:0";
  timeElapsedRaw = 0;
  clockRunning = true;
}

function updateClock() {
  d = new Date();
}

function updateTimeElapsed() {
  var hours, minutes, seconds;
  timeElapsedRaw++; //increment every second
  timeElapsed[2] = timeElapsedRaw % 60;
  timeElapsed[1] = Math.floor(timeElapsedRaw / 60);
  console.log(timeElapsedRaw);
  console.log(timeElapsed);
  document.getElementById("time-elapsed-display").innerHTML = timeElapsed.join(":");
}

function updateTimeLeft() {
  var timerCalc = timerInitial - timeElapsedRaw;
  var timerFormat = [0, 0, 0];

  timerFormat[2] = timerCalc % 60;
  timerFormat[1] = Math.floor(timerCalc / 60);
  timerFormat[0] = Math.floor(timerCalc / 3600);
  document.getElementById("time-left-display").innerHTML = timerFormat.join(":");
  if (timerCalc <= 0) {
    clockRunning = false;
    console.log("Time up.");
  }
}

//onload
window.onload = function() {
  clockRun();
};

//event handlers
document.getElementById("reset-button").onclick = function() {
  timeElapsedRaw = 0;
  timeElapsed = [0, 0, 0];
  clockRunning = false;
  document.getElementById("start-time-display").innerHTML = "";
  document.getElementById("current-time-display").innerHTML = "";
  document.getElementById("time-elapsed-display").innerHTML = timeElapsed.join(":");
  document.getElementById("time-left-display").innerHTML = "0:0:0";
};
document.getElementById("start-button").onclick = function() {
  updateClock();
  startClock();
};
document.getElementById("stop-button").onclick = function() {
  clockRunning = false;
};
document.getElementsByClassName("time-selection")[0].onclick = function() {
  setTimer(300);
};
document.getElementsByClassName("time-selection")[1].onclick = function() {
  setTimer(600);
};
document.getElementsByClassName("time-selection")[2].onclick = function() {
  setTimer(1500);
};
