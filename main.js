
var cookies = 0;
var cps = 0;
var req = 15;

// UPDATE TEXT

window.setInterval(function() {
    document.getElementById('cookie-value').innerHTML = Math.trunc(cookies) + " dollars"
}, 50);

// GENERATE DOLLARS

window.setInterval(function() {
    cookies += cps;
}, 1000);

// KEYBOARD LISTENERS

var onCooldown = false;
document.addEventListener("keydown", function(event) {

    if(event.keyCode == 32) {
        if (event.repeat) { return };
        document.getElementById('spc').src = 'images/SPACE_BAR_DOWN.png';
        if(onCooldown == false) {
            onCooldown = true;
            setTimeout(function(){

                // AUDIO

                var audio = new Audio('click.mp3');
                audio.play();

                //

                cookies += 1;
                onCooldown = false;
            }, 50);
        }
    }
});
document.addEventListener("keyup", function keyup(event) {

    if(event.keyCode == 32) {

        document.getElementById('spc').src = 'images/SPACE_BAR.png';
    }
});

// HIRE A WORKER BUTTON LISTENERS
const hirebtn = document.getElementById('hire-btn');
hirebtn.addEventListener("mousedown", () => {

    hirebtn.src = "images/HIRE_A_WORKER_DOWN.png";
    if (cookies >= req) {

        cookies -= req;
        cps += 0.15;
        req *= 1.25;

        hire_a_worker_gen = true;
    } else {
        setTimeout(function() { alert("You must acquire " + Math.round(req) + " dollars to hire a worker!"); }, 1);
    }
});
hirebtn.addEventListener("mouseup", () => {
    hirebtn.src = "images/HIRE_A_WORKER.png";
})
