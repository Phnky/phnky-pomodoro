var d;
var startTime;
var currentTime = d;
var clockRunning = false;

//functions
function clockRun(){
    if(clockRunning == true){
        updateClock();
        currentTime = [d.getHours(), d.getMinutes(), d.getSeconds()];
        document.getElementById("current-time-display").innerHTML = currentTime.join(":");
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

//onload
document.onload = function(){

};

//event handlers
document.getElementById("start-button").onclick = function(){
    updateClock();
    startClock();
};
document.getElementById("stop-button").onclick = function () { clockRunning = false; };
