"use strict";

var w;

if(typeof(Worker) !== "undefined"){
    if(typeof(w) == "undefined"){
        w = new Worker("js/temperature.js");
    }   
}

function initWorker(){
    var value = document.getElementById("original").value;
    w.postMessage(value);
}

w.onmessage = function(event){
    document.getElementById("converter").innerHTML = event.data;
};