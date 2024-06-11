
var cookies = 0;
var cps = 0;
var req = 15;

// COOKIES

window.onload = function() {
    var save_cookies = JSON.parse(localStorage.getItem("cookies"));
    if (typeof save_cookies !== "undefined") cookies = save_cookies
    var save_cps = JSON.parse(localStorage.getItem("cps"));
    if (typeof save_cps !== "undefined") cps = save_cps;
    var save_req = JSON.parse(localStorage.getItem("req"));
    if (typeof save_req !== "undefined") req = save_req;
};

window.setInterval(function() {
    localStorage.setItem("cookies", cookies);
    localStorage.setItem("cps", cps);
    localStorage.setItem("req", req);
}, 5000);

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
});
