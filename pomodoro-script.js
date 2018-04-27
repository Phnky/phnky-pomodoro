var d;
var startTime;
var currentTime = d;

//functions
function startClock(){
    startTime = [d.getHours(), d.getMinutes(), d.getSeconds()];
    document.getElementById("start-time-display").innerHTML = startTime.join(":");
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
