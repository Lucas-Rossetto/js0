/* td07 - Les tableaux

Cet exercice est assez similaire au td06,
cette-fois ci vous devez implémenter la 
fonction td07 qui prend en paramètre un
nombre nommé max et retourne un tableau 
contenant les nombres de 0 à max (inclus).

*/

/* TD Part */

function td07(max) {

    var tab = [];
    for(var i =0;i<max;i++){
        tab[i]=i;
    }
    //tab = tab.replace(/,/g,'');
    console.log(tab);
    return tab;


}

/* Testing Part */
const array = '0'.repeat(999).split('').map((i, id) => id);
if (td07(999).join('') === array.join('')) {
    console.log('TD07:: OK');
} else {
    console.log('TD07:: KO');
}
