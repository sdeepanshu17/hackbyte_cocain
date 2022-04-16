function myFunction() {
    var x = document.getElementById("myTopnav1");
    if (x.className === "topnav1") {
        x.className += " responsive";
    } else {
        x.className = "topnav1";
    }
}   

var carvid = document.getElementById("car-vid");
var speed = document.getElementById("speed");
var speedtext = document.getElementById("spacetext");
var pressspace = document.getElementById("pressspace");

window.addEventListener('keydown', function (e) {
    if (e.keyCode == 32 && e.target == document.body) {
        e.preventDefault();
    }
});

document.addEventListener('keydown', event => {
    if (event.code === 'Space') {
        playVid();
        document.getElementById('roarsection').scrollIntoView(true);
    }
})

document.addEventListener('keyup', Event => {
    if (Event.code === 'Space') {
        initial();
    }
})

const maxspeed = 341;
let currspeed = 0;

function playVid() {
    if (carvid.currentTime === carvid.duration) {
        completed();
        return;
    }
    carvid.play();
    speedtext.innerHTML = "KEEP HOLDING..."

    if (carvid.currentTime >= 2) {
        if (parseInt(speed.innerHTML) < 341) {
            if (currspeed < 10) {
                currspeed = Math.min(maxspeed, currspeed + 1);
                speed.innerHTML = `00${currspeed}`;
            }
            else if (currspeed < 100) {
                currspeed = Math.min(maxspeed, currspeed + 3);
                speed.innerHTML = `0${currspeed}`;
            }
            else {
                currspeed = Math.min(maxspeed, currspeed + 10);
                speed.innerHTML = `${currspeed}`;
            }
        }
    }

    speedtext.style.color = "black";
    pressspace.style.backgroundColor = "white";
    pressspace.style.opacity = "1";
}

function initial() {
    speedtext.innerHTML = "HOLD SPACE TO HEAR THE 720S";
    carvid.pause();
    carvid.currentTime = 0;
    currspeed = 0;
    speed.innerHTML = "000";
    speedtext.style.color = "white";
    pressspace.style.backgroundColor = "transparent";
    pressspace.style.opacity = "0.8";
}

function completed() {
    speedtext.style.color = "white";
    speedtext.innerHTML = "YOU CAN LET GO";
    pressspace.style.backgroundColor = "transparent";
    pressspace.style.opacity = "0.8";
}
