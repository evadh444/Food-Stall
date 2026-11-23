// Client = Une commande - un prix à payer - un état (en attente/ servi)
// gestion client
const commandesDispo = [
    {
        food: "Café",
        prix: 3
    },

    {
        food: "Tarte aux pommes",
        prix: 6
    },
];

export function genererCommande() {
    const randomIndex = Math.floor(
        Math.random() * commandesDispo.length
    );

    return {
        ...commandesDispo[randomIndex],
        served: false
    };
}

