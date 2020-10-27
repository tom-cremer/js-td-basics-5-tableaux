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
var mines = [[0, 1, 0, 1], 
             [1, 0, 0, 0], 
             [1, 0, 1, 0], 
             [0, 0, 0, 0]];
/* 
EXERCICE :
- évaluez chacune des expressions qui suivent
- vérifiez votre réponse en affichant la valeur de l'expression dans la console
*/
mines		// …………………………………………………………………
mines[1]	// …………………………………………………………………
mines[0][3] // …………………………………………………………………




/*
EXERCICE 7 : 
- Etape 1 : 
	- récupérez la valeur qui se trouve à la deuxième ligne troisième colonne du tableau
	- si cette valeur est 1, affichez "Pas de chance, vous avez explosé !",
	sinon affichez "Vous avez de la chance, cet emplacement ne contient pas de mine"
	- testez de la même façon l'emplacement situé en première ligne quatrième colonne
- Etape 2 : 
	- indiquez combien de mines contient
		- la première ligne de ce tableau
		- le tableau en entier
*/

