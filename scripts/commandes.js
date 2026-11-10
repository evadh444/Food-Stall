// gestion des commandes et validations
export function verifierCommande(commandeClient, selectionAliment) {

    // console.log("Commande du client :", commandeClient.food);
    // console.log("Aliment sélectionné :", selectionAliment);
    if (commandeClient.served) {
        return false;
    }

    if (commandeClient.food === selectionAliment) {
        console.log("Merci!");
        commandeClient.served = true;
        return true; 
        
    } else {
        console.log("Mauvaise commande !");

        return false;
    }
}