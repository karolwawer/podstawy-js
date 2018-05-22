//komentarze w JavaScript za pomocą ctrl + / lub shift ctrl /
//console.log('123');

//dodawać na początku aby script był bardziej dokładny
'use strict';

//zmienne

let liczba = 10;
let Liczba = 20;

//duże liczby zarezerwowane są dla nazewnictwa klas
console.log(liczba)
console.log(Liczba)

//funkcję

function logujDoKonsoli(){
    console.log('123');
}
logujDoKonsoli();

//funkcja anonimowa
 var nazwaFunkcji = function() {
     
 }
 nazwaFunkcji();

//funkcja z parametrami argumentami

function dodaj(par1, par2, par3) {
    console.log(par1 + par2 + par3);
}
dodaj(1,2,3);
function odejmij(par1, par2, par3) {
    console.log(par1 - par2 - par3);
}
odejmij(4,2,1);

//return zwraca wartość i przerywa działanie funkcji

function dodaj(par1, par2, par3) {
//    console.log(par1 + par2 + par3)
    return par1 + par2 + par3;
}
dodaj(1,2,3);
function odejmij(par1, par2, par3) {
    console.log(par1 - par2 - par3);
}
odejmij(dodaj(1,2,3),2,3);
