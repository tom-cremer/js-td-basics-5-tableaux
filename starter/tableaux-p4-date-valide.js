/*
TABLEAUX - PRÉPA 4 : Date valide - version 3
- Déclarez deux fonctions :
    - La première fonction 'isBissextile' retourne true ou false selon que l'année est bissextile ou pas.
    - La deuxième fonction 'isValid' retourne true ou false selon que la date est valide ou pas.
    Stockez cette fois le nombre maximum de jours autorisé par mois dans un tableau (utilisez 'isBissextile' pour gérer le cas du mois de février).
- Utilisez 'isValid' pour décider si votre date est valide avant d'afficher votre message dans la console.
*/

// Fonction pour vérifier si une année est bissextile
function isBissextile(annee) {
    return (annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0);
}

// Fonction pour vérifier si une date est valide
function isValid(jour, mois, annee) {
    const joursParMois = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Verification de l'annee est bissextile + changement affectation pour le mois de fevrier
    if (isBissextile(annee)) {
        joursParMois[1] = 29;
    } else {
        joursParMois[1] = 28;
    }

    // Verification du mois
    if (mois < 1 || mois > 12) {
        return false;
    }

    // Verification du jour
    return jour >= 1 && jour <= joursParMois[mois - 1];
}

// Utilisez 'isValid' pour vérifier si une date est valide avant d'afficher un message dans la console

const jour = 31;
const mois = 12;
const annee = 2023;

if (isValid(jour, mois, annee)) {
    console.log("La date est valide !");
} else {
    console.log("La date n'est pas valide !");
}
