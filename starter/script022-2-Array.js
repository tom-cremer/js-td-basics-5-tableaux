/*****************************
* 022 - Les tableaux indicés (Arrays)
*/


// 8. Tableau à deux dimensions

/* 
Chaque élément d'un tableau peut lui-même être un tableau.
On parle alors de tableau à deux dimensions.
Voici un exemple de tableau à deux dimensions (un tableau de tableaux),
qui pourrait être utilisé comme tableau de positionnement des mines d'un jeu du démineur.
*/
const mines = [[0, 1, 0, 1],
             [1, 0, 0, 0], 
             [1, 0, 1, 0], 
             [0, 0, 0, 0]];
/* 
EXERCICE :
- évaluez chacune des expressions qui suivent
- vérifiez votre réponse en affichant la valeur de l'expression dans la console
*/
mines		// affiche toute la matrice complete
mines[1]	// affiche le deuxieme element de la liste
mines[0][3] // affiche la valeur de la premiere liste 4eme element de la liste imbriqué





// EXERCICE 7 :
// Etape 1 :
// Pour récupérer la valeur à la deuxième ligne troisième colonne du tableau,
// utilisez les indices corrects (n'oubliez pas que les indices commencent à zéro).

console.log(mines[1][2]);


// Testez de la même manière l'emplacement situé en première ligne quatrième colonne

console.log(mines[0][3]);
console.log(mines[0].length);

// Etape 2 :
// Pour indiquer combien de mines contient la première ligne de ce tableau,
// vous devez parcourir les éléments de cette ligne et compter combien d'entre eux sont égaux à 1.

// comptent uniquement les mines dans la premiere liste de la matrice
let nbrMines = 0;
for(let i = 0; i <= mines[0].length - 1; i++){
    if (mines[0][i] === 1) {
        nbrMines++;
    }
}

console.log(nbrMines);

// comptent les mines dans toutes la matrice mines
let nbrMines2 = 0;
for (let j = 0; j <= mines.length - 1; j++) {
    for (let i = 0; i <= mines[j].length - 1; i++) {
        if (mines[j][i] === 1) {
            nbrMines2++;
        }
    }
}
console.log(nbrMines2);
