let i = 0;
let stopped = 0;

function reset(){
    i = 0;
}

function stop(){
    stopped = i;
}
function timer(number){
    var mins = Math.floor(number / 60);
    var secs = number % 60;
    if (secs < 10){
        return mins + ":0" + secs;
    }
    else {
        return mins + ":" + secs;
    }
    
}


function incrementCount(currentCount) {
    setInterval(() => {
        document.getElementById('currCount').innerHTML = timer(i);
        i += 1; 
      }, 1000);
}

$(document).ready(() => {
  document.getElementById('start').onclick = incrementCount;
  document.getElementById('reset').onclick = reset;
});