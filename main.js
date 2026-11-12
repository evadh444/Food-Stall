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
const btnClient = document.querySelector('.btnClient');

const clients = [pers1, pers2, pers3];
let indexClient = 0;
let clientActuel = null;

let diamants = 0;
let clientPresent = false;
let arbreAmeliore = false;
let potagerAmeliore = false;
let poulaillerAmeliore = false;
let diamantsCafe = 3;
let diamantstarte = 6;
let diamantsSoupe = 9;
let diamantsOmelette = 12;

function appelerClient() {
    if(clientPresent) return;
    clientPresent = true;
    clientActuel = clients[indexClient];
    clientActuel.style.transform = 'translateX(300%)';
    indexClient = (indexClient + 1) % clients.length;
}

function servir() {
    if(!clientPresent) return;
    clientPresent = false;   
    clientActuel.style.transform = 'translateX(0%)';
}

function afficher() {
    cagnotte.textContent = diamants;

    arbre.classList.toggle('surbrillance', diamants >= diamantsCafe && !arbreAmeliore);
    potager.classList.toggle('surbrillance', diamants >= diamantstarte && !potagerAmeliore);
    poulailler.classList.toggle('surbrillance', diamants >= diamantsSoupe && !poulaillerAmeliore);
}

btnClient.addEventListener('click', appelerClient);

arbre.addEventListener('click', () => {
    arbre.classList.remove('surbrillance');
    arbre.classList.add('active');
    diamants = diamants - diamantsCafe;
    tarte.classList.add('visible');
    arbreAmeliore = true;
    afficher();
})

potager.addEventListener('click', () => {
    potager.classList.remove('surbrillance');
    potager.classList.add('active');
    diamants = diamants - diamantstarte;
    soupe.classList.add('visible');
    potagerAmeliore = true;
    afficher();
})

poulailler.addEventListener('click', () => {
    poulailler.classList.remove('surbrillance');
    poulailler.classList.add('active');
    diamants = diamants - diamantsSoupe;
    omelette.classList.add('visible');
    poulaillerAmeliore = true;
    afficher();
})

tasse.addEventListener('click', () => {
    if(!clientPresent) return;
    diamants += 1;
    servir();
    afficher();
});

tarte.addEventListener('click', () => {
    if(!clientPresent) return;
    diamants += 3;
    servir();
    afficher();
})

soupe.addEventListener('click', () => {
    if(!clientPresent) return;
    diamants += 5;
    servir();
    afficher();
})

