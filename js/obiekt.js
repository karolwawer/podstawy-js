var osoba = {
    name: 'Marcin',
    height: 184,
    /*print: function() { console.log(this.name);}
     */
    //console.log(osoba.name + ' ' + osoba.height);
}
//osoba.print();
osoba.weigth = 73;
osoba.printDetail = function () {
    return this.name + ' ' + this.height + ' ' + this.weigth;
}
console.log(osoba.printDetail());

class Osoba {
    constructor(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
    }
    wyswietlDaneOsobowe() {
        console.log("Imię: " + this.imie + ", " + "Nazwisko: " + this.nazwisko);
    }
}
let marcin = new Osoba('Marcin', 'G');
let krzysztof = new Osoba('Krzysztof', 'M');

marcin.wyswietlDaneOsobowe();
krzysztof.wyswietlDaneOsobowe();

let liczba = Math.ceil((Math.random() *100) +1);

console.log(liczba);
