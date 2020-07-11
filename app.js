var interval;
var sec = 0;
var min = 0;
var msec = 0;
var secDisplay = document.getElementById('sec');
var minDisplay = document.getElementById('min');
var msecDisplay = document.getElementById('msec');

function timer(){

    msec++;
    msecDisplay.innerHTML= msec
    if(msec>=100){
        sec++
secDisplay.innerHTML= sec;
msec=0
    } else if(sec>=60){
        min++
        minDisplay.innerHTML = min;
        sec=0
    }
}

function start(){
 interval = setInterval(timer ,10);
}

function stop (){
    clearInterval(interval)
    document.getElementById('bTn').disabled=false
}


function reset(){
msec = 0;
sec = 0;
min = 0;
msecDisplay.innerHTML=msec
secDisplay.innerHTML=sec
minDisplay.innerHTML=min
stop()
document.getElementById('bTn').disabled=false

}

function btnDisable(){
    document.getElementById('bTn').disabled=true
}