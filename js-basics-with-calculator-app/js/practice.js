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


// ! 2. cas JS-a (21. cas) (13.12.2022.)

console.log('--------------- 2. cas JS-a (21. cas) (13.12.2022.) --------------');

// uz string konkatinaciju

someNumber = 53;
let operationDesc = '(' + someNumber + ' / 2) + (10 - 4) * 3';

console.log(operationDesc);

let example = 'Hello ' + 'world';

console.log(example);

// uz template literals format:
// (variable / 2) + (10 - 4) * 3;

let templLiteralExample = `(${someNumber} / 2) + (10 - 4) * 3`;

console.log(templLiteralExample);

let goToNewLine = `My string going \nto new line`;

console.log(goToNewLine);


// TODO Zadatak za vezbu:
/**
 * 1. Kreirati dve varijable. Jedna neka bude tipa number i neka se zove 
 *    userInputEx (na koju god vrednost je postavite) i druga neka se naziva 
 *    result i nemojte je postaviti ni na kakvu vrednost.
 * 2. Postavite result varijablu na vrednost userInputEx plus neki broj (npr 20).
 * 3. U naredne 3 linije koda, varijablu result promenite u svakoj 
 *    narednoj liniji koda operacijama oduzimanja, mnozenja i deljenja 
 *    nad tom result varijablom i svaki put ispisati vrednost varijable 
 *    na konzoli u formatu koji zelite s tim da pre toga stoji String 
 *    `Current result is: `
 * 4. Na kraju varijablu result ispisati u okviru alert prozora, 
 *    a userInput varijablu ispisati samo na konzoli.
*/

let userInputEx = 100;
let result;

result = userInputEx + 20;

result = (userInputEx / 20) * 2 - 1;

console.log(`Current result is ${result}`);

// alert(result);

console.log(`User input example value is ${userInputEx}`);


// ! Functions

// broj parametara moze biti od 0..n
function sayHi(name) { // name je parametar funkcije
   alert(`Hi ${name}`);
}

// sayHi('Marko');

// sayHi('Petar'); // 'Petar' je argument funkcije

// sayHi('Marko Markovic');


// TODO Zadatak za vezbu:

/**
 * Deklarisati funkciju koja treba da sabere dva broja i kao svoj rezultat
 * vrati vrednost rezultata sabiranja u formatu: `Result is _RESULT_`
 */

/**
 * Function which adds summates 2 numbers passed
 * @param {Number} number1 
 * @param {Number} number2 
 * @returns string - result of operation
 */
function add(number1, number2) {
   const addResult = number1 + number2;
   return `Result is ${addResult}`;
}

console.log(add(10, 20));

console.log(add(50, 50));

// console.log(name); // undefined

// alert(add(50, 100));


// TODO Zadatak za vezbu

/**
 * 1. Napraviti funkciju square() koja ce broj prosledjen kao parametar
 *    podici na kvadrat
 * 2. Rezultat vratiti u formatu `Squared _number_ is _square-number_`
 * 3. Pozvati funkciju sa nekom vrednoscu (npr 5)
 */

/**
 * Function which takes a number and gives squared number back
 * @param {Number} number 
 * @returns string in format of squared number
 */
function square(number) {
   // const squareResult = number * number;
   const squareResult = number**2;
   return `Squared ${number} is ${squareResult}`;
}

console.log(square(5));

console.log(square(4));

// c = 25;

// let c;

// ! kod od gore vraca Referentnu gresku

function print() {
   let testingVar = 5;
   console.log(testingVar);
}

let testingVar = 'Hello World!';

print();


// ! 3. cas JS-a (22. cas) (15.12.2022.)

// Konverzija tipova podataka

// * 1. eksplicitna konverzija tipova

console.log('--------------- 3. cas JS-a (22. cas) (15.12.2022.) --------------');

let t = 33 + '2';

console.log(t); // 332 (string)

let resVar = 33 + parseInt('2');

console.log(`Result of adding is ${resVar}`);

let resVar2 = 100 + parseFloat('50.5');

console.log(`Decimal result of adding is ${resVar2}`);

let resVar3 = 33 + +'2.5'; // * najbolji nacin za konverziju (plus predznakom)

console.log(resVar3); // number (float)

let resVar4 = resVar3.toString();

console.log(resVar4); // string


// * Implicitna konverzija tipova

let resVar5 = 3 * '3';

console.log(resVar5); // 9

let resVar6 = '15' - 4;

console.log(resVar6); // 11

let resVar7 = 20 / '2';

console.log(resVar7); // 10

let resVar8 = 2**'2';

console.log(resVar8); // 4


// ! Kraci nacin pisanja operatora

let resVar9 = resVar8 + 10;

console.log(resVar9); // 14

// resVar9 = resVar9 + 6; // ! duzi nacin

resVar9 += 6; // * kraci nacin

console.log(resVar9); // 20

resVar9 -= 10;

console.log(resVar9); // 10

resVar9 *= 3;

console.log(resVar9); // 30

resVar9 /= 15;

console.log(resVar9); // 2


// Increment and decrement

let j = 1;
let i = j++;

console.log(`j: ${j} , i: ${i}`); // j: 2 , i: 1

let k = 1;
let n = ++k;

console.log(`k: ${k} , n: ${n}`); // k: 2 , n: 2


// Boolean --> true ili false ==> let isDone = true; // false

// Object --> 

/**
 * const employee = {
 *    name: 'Marko',
 *    age: 28,
 *    isStudent: false
 * }
 */

// Arrays -->

/**
 * const numbers = [
 *    1,2,3, '50', true, employee
 * ]
 */


// ! Arrays

let myArray = [];

// myArray = [1,2,3,4,5];

myArray.push(100);

myArray.push(200);

myArray.push(500);

myArray.push(1000);

myArray.push(400);

myArray.push(20);

console.log(myArray);

console.log(myArray[0]);

// console.log(myArray[10]); // ! undefined

console.log(myArray[myArray.length-1]);


// ! Objects

const person = {
   firstName: 'Marko',
   lastName: 'Markovic',
   age: 25,
   gender: 'male',
   isStudent: true,
   favouriteBooks: ['Harry Potter', 'LOTR']
}

console.log(person.favouriteBooks);

console.log(`Person's name is ${person.firstName} and last name is ${person.lastName}`); // Person's name is IME and last name is PREZIME

console.log(`Person's gender is ${person['gender']}`);


// ! Undefined, NULL, NaN

let someVar;

console.log(someVar); // undefined --> default vrednost za neinicijalizovane varijable


let someVar2 = 55;

someVar2 = null; // null --> gadja neku nepostojecu vrednost, i cesto se dodeljuje varijabli ako hocemo da resetujemo vrednost te varijable na nepostojecu vrednost.


console.log('Welcome'-6); // NaN


// ! TypeOf operator

console.log(typeof(55)); // number

console.log(typeof(100.42)); // number

console.log(typeof(NaN)); // number

console.log(typeof(`Neki string`)); // string

console.log(typeof `Neki string`); // string

console.log(typeof(true)); // boolean

console.log(typeof(undefined)); // undefined

console.log(typeof(null)); // object

console.log(typeof(myArray)); // object

console.log(typeof(person)); // object

// TODO Homework (3. cas)

/**
 * DOMACI 3. cas:

   1. Kreirati varijablu proizvoljnog naziva. U varijablu dodati vrednost koja se dobije tako sto saberu vrednosti 33 (tipa number) i ‘27’ (tipa string). Obezbediti konverziju (parsiranje) string-a u number kako bi se matematicka operacija uspesno izvrsila. Na kraju napraviti novu varijablu u koju cete dodati vrednost koja se dobija parsiranjem dobijenog number-a u string.
   2. Prvu varijablu (tipa number) uvecati za 10 koristeci skraceni tip operatora. Nakon toga istu varijablu dekrementovati za jedan i ispisati konacnu vrednost na konzoli uz ispis ‘Current value is vrednost_varijable’.
   3. Kreirati niz sa od sledecih elemenata: ‘hello’ , ‘planet’ , ‘Jupiter’. Na kraju izvrsiti konkatinaciju ovih stringova i rezultat ispisati na konzoli.
   4. Kreirati objekat course i u njega dodati property-je: courseName (tipa string) i proizvoljnu vrednost, courseTeacher (tipa string) i proizvoljnu vrednost, duration (tipa number) i proizvoljnu vrednost i languages (tipa array) i proizvoljan niz elemenata.
   5. Ispisati na konzoli kompletan niz elemenata (languages property) iz course objekta.
   6. Ispisati poslednji element istog tog niza na konzoli.
   7. Resetovati vrednost varijable iz prvog zadatka na praznu vrednost uz odgovarajuci tip podatka.
   8. Proveriti tip podatka varijable iz prvog zadatka.

 */

let randomVar = 33 + +'27';

let randomVarStr = randomVar.toString();

randomVar += 10;

randomVar--;

console.log(`Current value is ${randomVar}`); // 69

let testArray = ['Hello', 'planet', 'Jupiter'];

console.log(`${testArray[0]} ${testArray[1]} ${testArray[2]}!`); // Hello planet Jupiter

const course = {
   courseName: 'Frontend Programming',
   courseTeacher: 'Petar Petrovic',
   duration: 1.5,
   languages: ['JavaScript', 'HTML5', 'CSS3']
}

console.log(course.languages);

// course['languages'];

console.log(course.languages[course.languages.length-1]); // 'CSS3'

randomVar = null;

console.log(typeof randomVar);