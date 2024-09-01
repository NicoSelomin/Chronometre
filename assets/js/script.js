//les variables
let span, btnStart, btnStop, time, mSecond, minute, second, hour;

//fontion pour initialiqer les variables quand la page charge

window.onload = () => {
    span = document.getElementsByTagName('span');
    btnStart = document.getElementById('start');
    btnStop = document.getElementById('stop');
    time;
    mSecond = 0, second = 0, minute = 0, hour = 0;
}

//mettre en place le compteur

function updateChrono(){
    mSecond+=1;
    if (mSecond == 10) {
        mSecond = 1;
        second+=1;
    }
    if (second == 60) {
        second = 0;
        minute+=1;
    }
    if (minute == 60) {
        minute = 0;
        hour+=1;
    }
    //insertion des valeurs dans mes spans
    span[0].innerHTML = hour + "h";
    span[1].innerHTML = minute + "mim";
    span[2].innerHTML = second + "s";
    span[3].innerHTML = mSecond + "ms";

}


//mettre en place la fonction du boutton start

function start(){
    // cette ligne exécute updateChono toutes les 100ms
    time = setInterval(updateChrono, 100);
    btnStart.disabled = true;
    btnStart.innerHTML = "Start";
}

// pour stoper
function stop(){
    clearInterval(time);
    btnStart.disabled = false;
    btnStart.innerHTML = "Continue";
}

// pour reset
function reset(){
    clearInterval(time);
    mSecond = 0; second = 0; minute = 0; hour = 0;
    span[0].innerHTML = "0h";
    span[1].innerHTML = "0mim";
    span[2].innerHTML = "0s";
    span[3].innerHTML = "0ms";
    btnStart.disabled = false;
    btnStart.innerHTML = "Start";
}
