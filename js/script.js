/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


//Openen en sluiten van categorie filter op de programma pagina//
var categorieKnop = document.getElementById("categorie");
var lijst = document.getElementById("criteria");

function openCategorie() {
    console.log("test");
        lijst.classList.toggle("toon");
}

categorieKnop.addEventListener("click", openCategorie);


//Openen van de knop "Meer" in de navigatie op desktopformaat//
var meerKnop = document.querySelector(".meer");
var meerMenu = document.querySelector(".meermenu");
var body = document.querySelector("body");

function openMeer() {
    meerMenu.classList.toggle("aan");
    body.style.overflow = ("hidden");
}

meerKnop.addEventListener("click", openMeer, false);


//Sluiten van het "Meer" menu op desktopformaat//
var closeKnop = document.querySelector(".close");

function closeMeer() {
    meerMenu.classList.toggle("aan");
    body.style.overflow = ("visible");
}

closeKnop.addEventListener("click", closeMeer);



//Hamburger navigatie op responsive formaat//
var hamburger = document.querySelector(".hamburgerknop");
var navigatie = document.querySelector("nav");

function hamburgerMenu() {
    navigatie.classList.toggle("hamburger");
}

hamburger.addEventListener("click", hamburgerMenu);

//categorie filteren
var artiestBlokjes = document.querySelectorAll(".achtergrond");

artiestBlokjes.forEach(function(artiestblok){
    artiestblok.classList.add("hide");
});