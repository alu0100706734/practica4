"use strict";
var w;
        function initWorker() {
            if(typeof(Worker) !== "undefined") {
                if(typeof(w) == "undefined") {
                    w = new Worker("js/temperature.js");
                }
                w.onmessage = function(event) {
                    document.getElementById("original").innerHTML = event.data;
                };
            } else {
                document.getElementById("original").innerHTML = "Actualiza tu navegador de mierda";
            }
        }
        function stopWorker() {
            w.terminate();
            w = undefined;
        }