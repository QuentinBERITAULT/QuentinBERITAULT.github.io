
// API DE Géolocalisation

let x = document.getElementById("lat");
let bouttonlatitude = document.getElementById("latitude");

let y = document.getElementById("long");
let bouttonlongitude = document.getElementById("longitude");


bouttonlatitude.addEventListener('click', getLatitude);
bouttonlongitude.addEventListener('click', getLongitude);

function getLatitude(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            x.innerHTML = "Latitude: " + position.coords.latitude; 
        });
    } else {
        lat.innerHTML = "Geolocalisation is not supported by this browser";
    }
}

function getLongitude(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            y.innerHTML = "Longitude: " + position.coords.longitude; 
        });
    } else {
        long.innerHTML = "Geolocalisation is not supported by this browser";
    }
}

// API Web History

var h = document.getElementById("nbpages").value;
let bouttonhistory = document.getElementById("reculer");

bouttonhistory.addEventListener('click', getWebHistory);

function getWebHistory(){
    window.history.go(h*-1);
}

// API Clipboard

let texte = document.getElementById("textecopie").value;
let bouttoncopie = document.getElementById("copier");

bouttoncopie.addEventListener('click', getTexteCopie);

function getTexteCopie(){
    navigator.clipboard.writeText(texte);
}