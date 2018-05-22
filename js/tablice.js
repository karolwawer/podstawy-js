'use strict'
//tablice indeksujemu od 0
let tablica = ['Agata', 'Michal', 'Andrzej'];

console.log(tablica[1]);

/*dodawanie wartości do tablicy:
    sposób 1 : nazwa_tablicy[numer_indexu] = [przypisana wartosc]*/

tablica[3] = 'Stefan';

//    drugi sposób

tablica.push('Monika');


//    trzeci sposób

tablica.unshift('Beata');

//usuwanie ostatniego elementu z tablicy za pomocą .pop()

tablica.pop();


///usuwanie pierwszego elementu z tablicy za pomocą .shift()

tablica.shift();
//console.log(tablica);

//sprawdzenie długości tablicy
console.log(tablica.length);

//aby wypisać wszystkie elementy tablicy w jednym ciągu używamy metody .join

console.log(tablica.join('-'));

console.log(tablica.sort());
