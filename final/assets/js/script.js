let cloud = document.getElementById("cloud");
let lights = document.getElementById("lights");
let waves = document.getElementById("waves");
let cloudbg = document.getElementById("cloudbg");
let lightsbg = document.getElementById("lightsbg");
let wavesbg = document.getElementById("wavesbg");

function unhideBackground (backgroundID) {
    document.getElementById(backgroundID).classList.remove("hidden");
    check(backgroundID);
}

function unhideCloud() {
    unhideBackground("cloudbg");
}

cloud.onmouseover = unhideCloud;

function unhideLights() {
    unhideBackground("lightsbg");
}

lights.onmouseover = unhideLights;

function unhideWaves() {
    unhideBackground("wavesbg");
}

waves.onmouseover = unhideWaves;

function hideBG(){
    check("background");
}

cloud.onmouseout = hideBG;
lights.onmouseout = hideBG;
waves.onmouseout = hideBG;

function check(backgroundID) {
    if(backgroundID === "cloudbg") {
        if(!lightsbg.classList.contains("hidden"))
            {lightsbg.classList.add("hidden");}
        if(!wavesbg.classList.contains("hidden"))
            {wavesbg.classList.add("hidden");}
    }
    else if(backgroundID === "lightsbg") {
        if(!cloudbg.classList.contains("hidden"))
            {cloudbg.classList.add("hidden");}
        if(!wavesbg.classList.contains("hidden"))
            {wavesbg.classList.add("hidden");}
    }
    else if(backgroundID === "wavesbg") {
        if(!lightsbg.classList.contains("hidden"))
            {lightsbg.classList.add("hidden");}
        if(!cloudbg.classList.contains("hidden"))
            {cloudbg.classList.add("hidden");}
    }
    else if(backgroundID === "background") {
        if(!lightsbg.classList.contains("hidden"))
            {lightsbg.classList.add("hidden");}
        if(!cloudbg.classList.contains("hidden"))
            {cloudbg.classList.add("hidden");}
        if(!wavesbg.classList.contains("hidden"))
        {wavesbg.classList.add("hidden");}
    }
}

$(document).ready(function(){
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
  });