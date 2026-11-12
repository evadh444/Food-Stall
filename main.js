// console.log("Bienvenue au Food Stall community");

// let money = 0;

// function addMoney(amount) {
//     money = money + amount;
//     console.log("Diamants disponibles:", money);
// }

// addMoney(5);
// addMoney(8);
const arbre = document.querySelector('.arbre');
const pers1 = document.querySelector('.pers1');

arbre.addEventListener('click', () => {
    arbre.classList.toggle('active');
});

pers1.addEventListener('click', () => {
    pers1.style.transform = 'translateX(900px)';
});

import { genererCommande } from "./scripts/customer.js";
import { verifierCommande } from "./scripts/commandes.js";

// ALICE
let clientPresent = false;
let clientActuel;

const clients = document.querySelectorAll('.pers1');
let indexClient = 0;

// Eva
// Générer la commande
let order = null;

// Récupérer l'emplacement de la commande dans l'index.html
// let order = null;
const orderDisplay = document.getElementById("order-display"); 

// Afficher la commande
// orderDisplay.textContent = order.food;

// Récupération des boutons aliments
const tarteAuxPommesButton = document.getElementById("tarteAuxPommes");
const cafeButton = document.getElementById("cafe");

// Clic sur la tarte aux pommes
tarteAuxPommesButton.addEventListener("click", function() {
    
    const resultat = verifierCommande(order, "Tarte aux pommes");

    console.log("Résultat :", resultat);

    departClient();
});

// Clic sur café 
cafeButton.addEventListener("click", function() {

    const resultat = verifierCommande(order, "Café");

    console.log("Résultat :", resultat);

    departClient();
});

console.log("Commande générée :", order);

function departClient() {
    if(!clientPresent) return;
    const clientQuiPart = clientActuel;

    orderDisplay.style.display = "none";

    clientQuiPart.style.transform = 'translateX(400%)';

    clientQuiPart.addEventListener('transitionend', function retour() {
        clientQuiPart.classList.remove('visible');

        clientPresent = false;
        clientActuel = null;   
    }, { once : true });


    if (order.served) {
        console.log("Le client s'en va");
        orderDisplay.textContent = "Le client part";
        
        tarteAuxPommesButton.disabled = true;
        cafeButton.disabled = true;
    }
};

// ALICE 
function appelerClient() {
    if (clientPresent) return;

    clientPresent = true;
    clientActuel = clients[indexClient];

    clientActuel.classList.add('visible');
    clientActuel.style.transform = 'translateX(0)';

    requestAnimationFrame(() => {
        clientActuel.style.transform = 'translateX(140%)';
    });

    indexClient = (indexClient + 1) % clients.length;
};


const boutonAppel = document.getElementById("appel-client");
boutonAppel.addEventListener("click", () => {
    appelerClient();
});

// EVA
document.querySelectorAll('.pers1').forEach(client => {
    client.addEventListener('transitionend', () => {
        if (client === clientActuel && clientPresent) {
            console.log("Le client est arrivé devant le stand");

            order = genererCommande();
            orderDisplay.textContent = order.food;
            orderDisplay.style.display = "block";
        }
    });
});
