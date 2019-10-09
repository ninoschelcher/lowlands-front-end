/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


//Openen en sluiten van categorie filter op de programma pagina//
var categorieKnop = document.getElementById("categorie");

function openCategorie() {

    var lijst = document.getElementById("criteria");

    if (lijst.classList.contains("toon")) {
        lijst.classList.remove("toon")
    } else {
        lijst.classList.add("toon")
    }
}

categorieKnop.addEventListener("click", openCategorie);




//Openen van de knop "Meer" in de navigatie op desktopformaat//
var meerKnop = document.getElementById("meer");
var meerMenu = document.getElementById("meermenu");
var body = document.querySelector("body");

function openMeer() {
    meerMenu.classList.toggle("aan");
    body.style.overflow = ("hidden");
}

meerKnop.addEventListener("click", openMeer);


//Sluiten van het "Meer" menu op desktopformaat//
var closeKnop = document.getElementById("close");

function closeMeer() {
    meerMenu.classList.toggle("aan");
    body.style.overflow = ("visible");
}

closeKnop.addEventListener("click", closeMeer);



//Hamburger navigatie op responsive formaat//
var hamburger = document.getElementById("hamburgerknop");
var navigatie = document.querySelector("nav");

function hamburgerMenu() {
    navigatie.classList.toggle("hamburger");
}

hamburger.addEventListener("click", hamburgerMenu);