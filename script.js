// Current Day Display 
$("#currentDay").text(moment().format('dddd,MMMM Do'));

// Time Display 
var Timer = function () { 
    $("#currentTimer").text(moment().format('hh:mm:ss A'));
}
setInterval(Timer, 1000);
Timer();

