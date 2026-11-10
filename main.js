// console.log("Bienvenue au Food Stall community");

// let money = 0;

// function addMoney(amount) {
//     money = money + amount;
//     console.log("Diamants disponibles:", money);
// }

// addMoney(5);
// addMoney(8);


import { genererCommande } from "./scripts/customer.js";
import { verifierCommande } from "./scripts/commandes.js";

// Générer la commande
const order = genererCommande();

// Récupérer l'emplacement de la commande dans l'index.html
const orderDisplay = document.getElementById("order-display"); 

// Afficher la commande
orderDisplay.textContent = order.food;

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
    if (order.served) {
        console.log("Le client s'en va");
        orderDisplay.textContent = "Le client part";
        
        tarteAuxPommesButton.disabled = true;
        cafeButton.disabled = true;
    }
}
