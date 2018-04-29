var d;
var startTime;
var currentTime = d;
var clockRunning = false;
var timeElapsed = [0,0,0];
var timeElapsedRaw = 0;


//functions
function clockRun(){
    if(clockRunning == true){
        updateClock();
        currentTime = [d.getHours(), d.getMinutes(), d.getSeconds()];
        document.getElementById("current-time-display").innerHTML = currentTime.join(":");
        updateTimeElapsed();
    }
    setTimeout(clockRun,1000);
}

function startClock(){
    startTime = [d.getHours(), d.getMinutes(), d.getSeconds()];
    document.getElementById("start-time-display").innerHTML = startTime.join(":");
    clockRunning = true;
    clockRun();
}

function updateClock(){
    d = new Date();
}

function updateTimeElapsed(){
    var hours, minutes, seconds;
    timeElapsedRaw ++;
    timeElapsed[2] = timeElapsedRaw%60;
    timeElapsed[1] = Math.floor(timeElapsedRaw/60);
    console.log(timeElapsedRaw);
    console.log(timeElapsed);
    document.getElementById("time-elapsed-display").innerHTML = timeElapsed.join(":");
}

//onload
document.onload = function(){

};

//event handlers
document.getElementById("reset-button").onclick = function(){
  timeElapsedRaw = 0;
  timeElapsed = [0,0,0];
  document.getElementById("start-time-display").innerHTML = "";
  document.getElementById("current-time-display").innerHTML = "";
  document.getElementById("time-elapsed-display").innerHTML= timeElapsed.join(":");
};
document.getElementById("start-button").onclick = function(){
    updateClock();
    startClock();
};
document.getElementById("stop-button").onclick = function () { clockRunning = false; };
