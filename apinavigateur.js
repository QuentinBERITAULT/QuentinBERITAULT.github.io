
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

let bouttonhistory = document.getElementById("reculer");

bouttonhistory.addEventListener('click', getWebHistory);

function getWebHistory(){
    let h = document.getElementById("nbpages").value;
    window.history.go(-h);
}

// API Clipboard

let bouttoncopie = document.getElementById("copier");

bouttoncopie.addEventListener('click', getTexteCopie);

function getTexteCopie(){
    let texte = document.getElementById("textecopie").value;
    navigator.clipboard.writeText(texte);
    alert("Le texte est bien copié !")
}
