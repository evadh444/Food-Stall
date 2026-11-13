const arbre = document.querySelector('.arbre');
const potager = document.querySelector('.potager');
const poulailler = document.querySelector('.poulailler');

const tasse = document.querySelector('.cafe');
const tarte = document.querySelector('.tarte');
const soupe = document.querySelector('.soupe');
const omelette = document.querySelector('.omelette');

const cagnotte = document.querySelector('.cagnotte');

const pers1 = document.querySelector('.pers1');
const pers2 = document.querySelector('.pers2');
const pers3 = document.querySelector('.pers3');

const messArbre = document.querySelector('.messArbre');
const messPotager = document.querySelector('.messPotager');
const messPoulailler = document.querySelector('.messPoulailler');

const btnClient = document.querySelector('.btnClient');
const btnDemarrer = document.querySelector('.btnDemarrer');

const presentation = document.querySelector('.presentation');

const sonPers = new Audio('assets/sons/pers.wav');
const sonPiece = new Audio('assets/sons/pieces.wav');
const sonIntro = new Audio('assets/sons/intro.wav');
const sonAmelio = new Audio('assets/sons/amelioration.wav');
const sonFin = new Audio('assets/sons/fin.wav');

const clients = [pers1, pers2, pers3];
let indexClient = 0;
let clientActuel = null;
let diamants = 0;
let clientPresent = false;
let arbreAmeliore = false;
let potagerAmeliore = false;
let poulaillerAmeliore = false;
let diamantsCafe = 3;
let diamantsTarte = 6;
let diamantsSoupe = 9;
let diamantsOmelette = 12;

// ECOUTEURS SON DEMARRAGE
window.addEventListener('load', () => {
    sonIntro.volume = 0.5;
    sonIntro.play()
});

btnDemarrer.addEventListener('click', () => {
    presentation.style.transform = 'translateY(-100%)';
    sonIntro.pause();
    sonIntro.currentTime = 0;
})



                    // ---- FONCTIONS ----

// APPELER CLIENTS
function appelerClient() {
    if(clientPresent) return;
    clientPresent = true;
    clientActuel = clients[indexClient];
    clientActuel.classList.add('visible');
    clientActuel.style.transform = 'translateX(400%)';
    indexClient = (indexClient + 1) % clients.length;
}

// SERVIR CLIENTS
function servir() {
    if(!clientPresent) return;
    clientPresent = false;   
    clientActuel.style.transform = 'translateX(800%)';
}

// AFFICHER
function afficher() {
    cagnotte.textContent = '💎' .repeat(diamants);
    arbre.classList.toggle('surbrillance', diamants >= diamantsCafe && !arbreAmeliore);
    potager.classList.toggle('surbrillance', diamants >= diamantsTarte && !potagerAmeliore);
    poulailler.classList.toggle('surbrillance', diamants >= diamantsSoupe && !poulaillerAmeliore);    
}






                    // ---- ECOUTEURS ----

// CLIENT
btnClient.addEventListener('click', () => {
    appelerClient();
    sonPers.play();
    setTimeout(() => {
        sonPers.pause();
        sonPers.currentTime = 0;
    }, 1500);
});

// ARBRE
arbre.addEventListener('click', () => {
    if(diamants < diamantsCafe) return;
    arbre.classList.remove('surbrillance');
    arbre.classList.add('active');
    diamants = diamants - diamantsCafe;
    tarte.classList.add('visible');
    arbreAmeliore = true;
    sonAmelio.volume = 0.4; 
    sonAmelio.play();
    afficher();
});

// POTAGER
potager.addEventListener('click', () => {
    if(diamants < diamantsTarte) return;
    potager.classList.remove('surbrillance');
    potager.classList.add('active');
    diamants = diamants - diamantsTarte;
    soupe.classList.add('visible');
    potagerAmeliore = true;
    sonAmelio.volume = 0.4; 
    sonAmelio.play();
    afficher();
})

// POULAILLER
poulailler.addEventListener('click', () => {
    if(diamants < diamantsSoupe) return;
    poulailler.classList.remove('surbrillance');
    poulailler.classList.add('active');
    diamants = diamants - diamantsSoupe;
    omelette.classList.add('visible');
    poulaillerAmeliore = true;
    sonAmelio.volume = 0.4; 
    sonAmelio.play();
    afficher();
})

// TASSE
tasse.addEventListener('click', () => {
    if(!clientPresent) return;
    diamants += 1;
    sonPiece.play();
    servir();
    afficher();
});

// TARTE
tarte.addEventListener('click', () => {
    if(!clientPresent) return;
    diamants += 3;
    sonPiece.play();
    servir();
    afficher();
})

// SOUPE
soupe.addEventListener('click', () => {
    if(!clientPresent) return;
    diamants += 6;
    sonPiece.play();
    servir();
    afficher();
})







// MESSAGES AU SURVOL
arbre.addEventListener('mouseenter', () => {
    messArbre.style.display = 'block';
});

arbre.addEventListener('mouseleave', () => {
    messArbre.style.display = 'none';
});

potager.addEventListener('mouseenter', () => {
    messPotager.style.display = 'block';
});

potager.addEventListener('mouseleave', () => {
    messPotager.style.display = 'none';
});

poulailler.addEventListener('mouseenter', () => {
    messPoulailler.style.display = 'block';
});

poulailler.addEventListener('mouseleave', () => {
    messPoulailler.style.display = 'none';
});







// SOURIS EN BAGUETTE MAGIQUE
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('magic-cursor');
 
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
 
    document.addEventListener('mousedown', () => {
        cursor.classList.add('clicking');
    });
 
    document.addEventListener('mouseup', () => {
        cursor.classList.remove('clicking');
    });
});