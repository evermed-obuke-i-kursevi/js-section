// ! 1. cas JS-a (20. cas) (08.12.2022.)

/**
 * Neki komentar
 * u 
 * vise
 * redova
 */

console.log('--------------- 1. cas JS-a (20. cas) (08.12.2022.) --------------');

// var mojBroj = 5; ne koristi se vise toliko

let myNumber = 5;

let myString = 'This is our test variable';

// let myNumber = 555; ! nije moguce re-deklarisanje let varijabli

myNumber = 555; // * re-definisanje let varijabli je moguce

console.log(myNumber);

const myFixedNumber = 100;

// const myFixedNumber = 200; ! nije moguce re-deklarisanje const varijabli

// myFixedNumber = 200; // ! re-definisanje const varijabli nije moguce

console.log(myFixedNumber);

// * let varijable mogu prvo biti deklarisane, a onda kasnije inicijalizovane
let initalizeMeLater;

initalizeMeLater = 'finally initalized';

console.log(initalizeMeLater);

// ! const varijable moraju u istom redu biti i deklarisane i inicijalizovane
// const tryToInitLater;

// tryToInitLater = 55;


// ! Imenovanje varijabli

// * dobra praksa

let camelCaseVarFormat = 'camel case format';
let top11 = 'number can be in variable number';

// ! losa praksa
let snake_case_name = 5;
// let 7continents;
// let kebab-case-format;
// let const;
// const let;

// TODO zadatak za vezbu 1:

/**
 * ZADATAK ZA VEZBU:
 * 
   1. U practice.js fajlu kreirati varijable proizvoljnog naziva uz svaku od mogucih naming sintaksi i 
      dodeliti im ili neki string ili number vrednost (npr. let myTop1 = ‘Audi A6’ ili npr. let age = ‘27’).
   2. Varijable kreirati i uz let i const, proizvoljnim rasporedom.
   3. Pokusati redefinisanje vrednosti svake od varijabli (i let i const). 
   4. Ispisati vrednosti varijabli na konzoli uz console.log() funkciju i sintaksu koju smo radili na casu (`${myVar}`).
   5. Obratiti paznju na pokusaj redefiinisanja CONST varijabli i gresku koja se dobija u konzoli Web Browser-a.
*/

let carName = 'Mercedes';

carName = 'Audi';

console.log(carName);

let age = 66;

const nesto = 'Random string';

console.log(nesto);

// nesto = 55;



// ! OPERATORI

/**
 * operator dodele vrednosti (=)
 * sabiranje (+)
 * oduzimanje (-)
 * mnozenje (*)
 * deljenje (/)
 * eksponencijalni operator (**)
 * remainder operator - operator 'ostatak pri deljenju' (%)
 */

let number1 = 20;

number1 = number1 + 50;

console.log(number1);

const number2 = 30;

// number2 = number2 + number1;

number1 = number1 + number2;

console.log(number1);

let number3;

number3 = number1 + (number1 * 2) - number1;

console.log(number3);

let number4 = 20;

number3 = number4 / 4;

console.log(number3);

// * Tipovi podataka (za sada):
// NUMBER:
    // INTEGER --> 55, 77, 123, 987, 1542
    // FLOAT --> 101.23, 0.55, 77.312312

// STRINGS --> 'Hello World', "Hello World", `Hello World`

console.log('Trenutna vrednost varijable number3 je = ' + number3);

console.log("Trenutna vrednost varijable number4 je = " + number4);

console.log(`Trenutna vrednost varijable number1 je = ${number1}`);



// TODO 1. cas JS-a (homework):
/**ZADATAK ZA VEZBU:
 * 
 * 1. Napraviti dve varijable.
   2. Smisleno odabrati LET ili CONST.
   3. Prva varijabla neka cuva rezultat neke matematicke operacije po izboru.
   4. Druga varijabla neka opise matematicku operaciju koju ste za prvu varijablu koristili (u STRING formatu ispisete samu operaciju).
*/

let someNumber = 4;

let description;

someNumber = (someNumber / 2) + (10 - 4) * 3;

console.log(`Rezultat je ${someNumber}`);

description = `(4 / 2) + (10 - 4) * 3`;

console.log(description);