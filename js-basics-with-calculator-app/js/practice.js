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




// ! 5. cas JS-a (24. cas) (22.12.2022.)

console.log('--------------- 5. cas JS-a (24. cas) (22.12.2022.) --------------');

// ! Operatori poredjenja

// * 1. ==  -->  loose (slab) equality (poredi samo vrednosti)

console.log(10.5 == 10.5); // poredjenje Number tipova

console.log('Hello' == 'Hello'); // poredjenje Stringova

console.log('Hello' == 'hello'); // false

console.log(true == true); // poredjenje Boolean-a

console.log(5 != 5); // false, jer 5 JESTE jednako 5 (po vrednosti)

console.log('44' == 44); // true , jer se radi poredjenje SAMO PO VREDNOSTI


// * 2. ===   -->  strict (jaci) equality (poredi i tipove i vrednosti)

console.log(10.5 === 10.5); // true

console.log(55 === '55'); // false , jer se radi poredjenje I PO TIPU I PO VREDNOSTI

console.log('hey' !== 'hey'); // false, jer su isti i po tipu i po vrednosti

console.log('hey' !== 'Hey'); // true, jer iako su isti po tipu nisu isti po vrednosti



// * 3. > , < , >= , <=

console.log(25 > 3); // true
console.log(-15.3 < 0); // true
console.log(5 >= 5); // true
console.log(0 <= 0); // true
console.log(999 < 1); // false
console.log('5' > 3); // true



// * NOT OPERATOR (!)

console.log(`Not operator for 'false' returns: ${!false}`);
console.log(`Not operator for 'true' returns ${!true}`);
console.log(`20 > 10 with NOT operator returns ${!20 > 10}`);
console.log(`3 === 3 with NOT operator returns ${!2 === 2}`);



// * Poredjenje STRINGOVA

console.log(`b > a = ${'b' > 'a'}`);
console.log(`ab > aa = ${'ab' > 'aa'}`);



// ! STATEMENTI (klauzule, blokovi)

// 1. IF
// 2. IF - ELSE
// 3. IF - ELSE IF - ELSE


// 1. IF

if ('5' === 5) {
   console.log(`petice su jednake`);
}

if (1 !== 1) {
   console.log(`kecevi nisu jednaki`);
}

if (true) {
   console.log('proslo');
}


// 2. IF - ELSE blok

let broj = 100/100 - 1;

if (broj > 0) {
   console.log(`${broj} is bigger then zero`);
} else {
   console.log(`${broj} is less then zero`);
}

// 3. IF - ELSE IF - ELSE blok

if (broj > 0) {
   console.log(`${broj} is bigger then zero!`);
} else if (broj < 0) {
   console.log(`${broj} is less then zero!`);
} else {
   console.log(`${broj} is equal to zero!`);
}


// TODO Kroz PROMPT prozor ukucati neki broj i proveriti da li je taj broj veci/manji/jednak nuli i ispisati odgovarajucu poruku.

const myNumber1 = 3; // prompt('Enter your number:');

if (myNumber1 == 0) {
   console.log(`Equal to 0`);
} else if (myNumber1 < 0) {
   console.log(`Less then 0`);
} else {
   console.log(`Greater then 0`);
}


// ! Ugnjezdeni IF - ELSE IF - ELSE blokovi

if (myNumber1 >= 0) {
   if (myNumber1 > 0) {
      console.log('Positive');
   } else {
      console.log('Zero');
   }
} else {
   console.log('Negative');
}


// ! Poredjenje objekata i nizova

const ob1 = {
   name: 'test'
}

const ob2 = {
   name: 'test'
}

console.log(ob1 === ob2); // false

const arr1 = ['test', 'test2'];

const arr2 = ['test', 'test2'];

console.log(arr1 === arr2); // false


// TODO 5. cas domaci
/**
 * 1. Kreirati dve varijable tipa number sa vrednostima 30 i 50
 * 2. Uporediti varijable koristeci == i === i rezultate poredjenja ispisati na konzoli
 * 3. Uporediti varijable koristeci != i !== i rezultate poredjenja ispisati na konzoli
 * 4. Rezultat poredjenja iz 2. zadatka invert-ovati uz NOT operator i ispisati na konzoli
 * 5. Kreirati 3. varijablu sa vrednoscu '30' (tipa string)
 * 6. Uporediti varijablu sa vrednoscu 30 (number) i '30' (string) pomocu oba tipa equality operatora
 *    (== i ===), uporediti razlike rezultata poredjenja
 * 7. Kreirati 4. varijablu (npr. promptAnswer) cija se vrednost dobija kroz prompt prozor browser-a
 * 8. Vrednost varijable proveriti kroz if - else if - else uslove i shodno tome ispisati status o varijabli u formatu
 *    `Value ${promptAnswer} is ________`
*/


const variable1 = 30;
const variable2 = 50;

console.log(`variable1 is equal to variable 2: ${variable1 == variable2}`); // false
console.log(`variable1 is equal to variable 2: ${variable1 === variable2}`); // false
console.log(`variable1 is not equal to variable 2: ${variable1 != variable2}`); // true
console.log(`variable1 is not equal to variable 2: ${variable1 !== variable2}`); // true

const compareOfVars = variable1 === variable2;

console.log(compareOfVars); // false
console.log(!compareOfVars); // true  // ! Revert-ovan false u true pomocu ! znaka (NOT operatora)

const variable3 = '30';

console.log(`variable3 is equal to 30: ${variable3 === 30}`); // false
console.log(`variable3 is equal to 30: ${variable3 == 30}`); // true

const promptAnswer = 3; //prompt('Enter your value:');

if (promptAnswer > 0) {
    console.log(`Value ${promptAnswer} is positive.`);
} else if (promptAnswer < 0) {
    console.log(`Value ${promptAnswer} is negative.`);
} else {
    console.log(`Value is zero.`);
}


// ! 6. cas JS-a (25. cas) (27.12.2022.)

console.log('--------------- 6. cas JS-a (25. cas) (27.12.2022.) --------------');

// * visestruki logicki uslovi:

// 1. logicko AND (&&) --> nalaze da svi logicki uslovi moraju biti zadovoljeni

   // true + true ==> onda ovo daje TRUE
   // true + false ==> onda ovo daje FALSE
   // false + false ==> onda ovo daje FALSE

// 2. logicko OR (||) --> kaze da BAR 1 od uslova mora biti zadovoljen (mora davati true bar 1)

   // true + true ==> onda ovo daje TRUE
   // true + false ==> onda ovo daje TRUE
   // false + false ==> onda ovo daje FALSE

broj = 8;

if (broj < 0 && broj === -4) {
   console.log(`Your number is ${broj}.`);
}

if (broj > 0 || broj === 0) {
   console.log(`Number ${broj} is either greater than 0 or equal to it.`);
}

// ! logicko AND ima prioritet u odnosu na logicko || 

if (broj > 0 && broj === 5 || broj === 8) {
   console.log(`Condition is met`);
}


// ! Ternarni (kondicioni) operator

let answer = broj < 0
   ? `${broj} is less than 0` 
   : `${broj} is equal to 0 or greater than 0`;

console.log(`Answer is '${answer}'`);

// * primer kombinovanja IF - ELSE bloka i ternarnog operatora
if (broj < 0) {
   console.log(`Less then 0`);
} else {
   let answer2 = broj === 0 ? 'Equal to zero' : 'Greater than 0';
   console.log(answer2);
}


// ! THRUTY and FALSY values

/**
 * FALSY vrednosti: false, '', ``, "", 0, NaN, null, undefined
 * THRUTY vrednosti: bilo sta sto nije ovo gore navedeno: 'Petar', true, 24, -44.33, itd.
 */

let value2 = ``;
let value3 = '6. cas JS-a';

if (value2) {
   console.log(`Entered first block`);
}

if (value3) {
   console.log(`Entered second block`);
}

broj = 0;

let resOfOp = broj > 0 && broj === 8 
   ? broj 
   : '';

if (resOfOp) {
   console.log(`Entered third block`);
}


// ! Trikovi:

// * 1. thruty ili falsy vrednosti mozemo pretvoriti u bukvalan TRUE ili FALSE

someVar = !!resOfOp; // pretvaranje u TRUE ili FALSe (u zavisnosti od toga da li je prosledjena thruty ili falsy vrednost)

console.log(`Result of check is ${someVar}`);


// * 2. moguce je vrednost neke varijable dobiti na osnovu nekog logickog operatora

// 2.1. primer sa logickim OR (||)

let usersName = 'Bilo sta';

let someValue = usersName || 'Mirko';

console.log(`Value is ${someValue}`); // 'Value is Bilo sta'

// 2.2 primer sa logickim AND (&&)

let registeredUser = true;

someValue = registeredUser && 'marko@gmail.com';

console.log(`Value 2 is ${someValue}`); // 'Value 2 is marko@gmail.com'



// ! SWITCH CASE-evi:

const grade = 'A';

switch(grade) {
   case 1: 
      console.log(`Math grade is ${grade} 😥`);
      break;
   case 2:
      console.log(`Math grade is ${grade} 😣`);
      break;
   case 3:
      console.log(`Math grade is ${grade} 😑`);
      break;
   case 4:
      console.log(`Math grade is ${grade} 🙂`);
      break;
   case 5:
      console.log(`Math grade is ${grade} 😁`);
      break;
   default:
      console.log(`Math grade is ${grade}. Not in range between 1 and 5`);
      break;
}

// if (grade === 1) {
//    //
// } else if (grade === 2) {
//    //
// } else if (grade === 3) {
//    //
// } else if (grade === 4) {
//    //
// } else if (grade === 5) {
//    // 
// } else {
//    //
// }


// ! PETLJE (loops)

/**
 * 1. FOR petlja (sluzi za pozivanje nekog koda nekoliko puta u zavinosti od npr nekog brojaca)
 * 2. FOR OF petlja (sluzi za pozivanje nekog koda nad svakim elementom nekog niza)
 * 3. FOR IN petlja (sluzi za vracanje svih KEY-eva (kljuceva, naziva property-a) nekog objekta i evenutalno vrednosti vezane za te kljuceve)
 * 4. WHILE petlja (sluzi za izvrsavanje nekog koda dokle god je neki logicki uslov zadovoljen)
 * 5. DO-WHILE petlja
 */

// * 1. FOR petlja

for(let counter = 1; counter <= 5; counter++) {
   console.log(`Counter of current iteration is ${counter}`);
}

// Primer --> program koji racuna zbir prvih 100 prirodnih brojeva:

let sum = 0;

for(let i = 1; i <= 100; i++) {
   sum += i;
}

console.log(`Zbir prirodnih brojeva od 1 do 100 je ${sum}`);


// * 2. FOR OF petlja

const programmingLanguages = ['Java', 'JS', 'C#', 'Python', 'C']; // 5

console.log(programmingLanguages);

for(let j = 0; j < programmingLanguages.length; j++) {
   console.log(`Language: ${programmingLanguages[j]}`)
}


// FOR OF:

for (let prLanguage of programmingLanguages) {
   console.log(`Language is: ${prLanguage}`);
}


// ! 6. cas homework:

/**
 * 1. Pokusati prepraviti kod iz app.js-a (calculator app):
 *  a) Prvo uz IF-ELSE blokove
 *  b) Pa onda uz Switch case-ove
*/


// ! 7. cas JS-a (26. cas) (29.12.2022.)

console.log('--------------- 7. cas JS-a (26. cas) (29.12.2022.) --------------');

const greetings = 'Welcome!';

for(let letter of greetings) {
   console.log(letter);
}


// * 3. FOR IN petlja

const someUser = {
   name: 'Pera Peric',
   email: 'pera@gmail.com',
   age: 22,
   student: true
}


for(let prop in someUser) {
   console.log(prop);
}

console.log(`Age of student is ${someUser.age}`); // 1. nacin pristupa property-u (vrednosti)

console.log(`Name of student is ${someUser['name']}`); // 2. nacin pristupa property-u (vrednosti)


for(let key in someUser) {
   console.log(`${key}: ${someUser[key]}`); // dinamicko dobavljanje vrednosti vezane za svaki key u objektu
}


// * Kombinacija FOR OF i FOR IN loop-a

const bankAccountTest = {
   owner: 'Petar Petrovic',
   pin: 4424,
   phone: '0661623123',
   transactions: [300, -250, 500, -150, 1000]
}

for(let prop in bankAccountTest) {
   console.log(`${prop}: ${bankAccountTest[prop]}`);
   if (prop === 'transactions') {
      const transactionsArr = bankAccountTest.transactions;
      for(let i = 0; i < transactionsArr.length; i++) {
         console.log(`Transaction ${i+1}. = ${transactionsArr[i]}`);
      }
   }
}


// * WHILE petlja

let isUserLoggedIn = true;
let m = 0;

// ! primer beskonacne petlje , jer je logicki uslov UVEK zadovoljen
// while(isUserLoggedIn) {
//    console.log(m);
//    m++;
// }

while(m < 5) {
   console.log(`M variable is equal to: ${m}`);
   m++;
}

console.log(`M is ${m}`); // M is 5

// * DO WHILE petlja

m = 0;

do {
   console.log(m);
   m++;
} while(m <= 5);

console.log(`Now M is ${m}`); // Now M is 6


// * BREAK and CONTINUE

// * break - sluzi da prekinemo neku petlju u odredjenoj iteraciji (u odredjenom momentu)

for (let j = 5; j > 0; j--) {
   if (j === 3) {
      break;
   }
   console.log(`j is ${j}`);
}


// * continue - sluzi ako hocemo da preskocimo odredjenu iteraciju ako je neki logicki uslov zadovoljen

for (let u = 0; u < 5; u++) {
   if (u === 3) {
      continue;
   }
   console.log(`u is ${u}`);
}



// ! TRY , CATCH, FINALLY blokovi

try {
   console.log(marko);
   // console.log(m);
} catch(error) {
   console.log(error.name + ' ---> ' + error.message);
} finally {
   console.log(`Always running finally block!`);
}

console.log('Dobar dan');


// ! PRIMITIVNI (vrednosni) i REFERENTNI TIPOVI

// ! Primitivni tipovi podataka nalaze se na STACK memoriji (number, string, boolean, symbol, undefined, null)

let s = 1;
let f = 1;

console.log(s === f); // number

let st1 = 'cao';
let st2 = 'cao';

console.log(st1 === st2); // string

let b1 = false;
let b2 = false;

console.log(b1 === b2); // true


// ! Referentni tipovi - objects i arrays (cuvaju se na HEAP memoriji)

let referenceObj = {
   firstName: 'Sara',
   lastName: 'Saric'
}

let copyObject = {
   firstName: 'Sara',
   lastName: 'Saric'
}

copyObject.age = 22;

console.log(referenceObj === copyObject);

let nizTest1 = [1,2,3];

let nizTest2 = [1,2,3];

console.log(nizTest1 === nizTest2);


// * Kopiranje vrednosti kod PRIMITIVNIH (vrednosnih) TIPOVA:

let h = 7;
let g = h;

console.log(`H is ${h}`);
console.log(`G is ${g}`);

console.log(g === h);


// * Kopiranje vrednosti kod REFERENTNIH (slozenih) TIPOVA:

let originalObject = {
   age: 44
}

let copyOfOriginal = originalObject;

console.log(copyOfOriginal === originalObject);

originalObject.city = 'Novi Sad';

console.log(originalObject);
console.log(copyOfOriginal);


const originalNiz = [1,2,3];

const copyNiz = originalNiz;

// console.log(copyNiz);
// console.log(originalNiz);

originalNiz.push(4);

console.log(copyNiz);
console.log(originalNiz);



function logNumber(number) {
   console.log(number);
}

function sumFunc(x,y) {
   let z = x+y;
   logNumber(z);
}

sumFunc(5,10);


// 7. cas JS-a homework:

// 1. Uporediti vrednost kreirane varijable (const someNum = prompt('Please enter your number')) pomocu ternarnog operatora tako da se ispise da li je broj pozitivan ili negativan
// 2. Dodati OR (||) logicki operator kako bi se proverilo da li je someNum vrednost nula ili veca od nule i rezultat ispisati na konzoli zajedno
// 3. Dodati breakpoint u prethodnom izvrsavanju if bloka i utvrditi potencijalnu gresku na osnovu iscitavanja vrednosti

// 4. za svaku liniju koda u nastavku ispisati sta vraca:
// 
//     const userEmail = 'marko@gmail.com';
//     const backupEmail = '';
//     console.log(userEmail === 'marko@gmail.com');
//     console.log(userEmail);

//     console.log(userEmail || null);
//     console.log(backupEmail || 'milan@gmail.com');
//     console.log(backupEmail || '');
//     console.log(backupEmail || null || 'petar@gmail.com');

//     console.log(userEmail && 'petar@gmail.com');
//     console.log(backupEmail && 'petar@gmail.com');
//     console.log(userEmail && ''); 
//  
//

// 5. Kreirati varijablu "dayOfTheWeek" i postaviti na danasnji dan (hardkodovati, npr: 'tuesday'). Promeniti case-ove switch opcijom i u skladu sa tim ispisati vrednost na konzoli.

// 6. Ispisati proizvod svih brojeva od 1 do 10

// 7. Kreirati niz "foreignLanguages" i 3 jezika dodati u njega. Svaki jezik treba da ima svoj naziv i recenicu na tom jeziku. 

// 8. Nakon toga, proci kroz niz jezika i ispisati svaki element u formatu:
//    'Here is a sentence on LANGUAGE_NAME : LANGUAGE_SENTENCE'

// 9. Za PRVI jezik iz foreignLanguages dodati (nalepiti) jos jedan property -> teachers niz nastavnika koji predaju jezik (3). 
// Za svakog od nastavnika napraviti property firstName i lastName i dodeliti neke vrednosti.

// 10. Ispisati redni broj nastavnika te njegovo ime i prezime i taj jezik koji predaje u formatu:
// Teacher number BROJ : IME PREZIME is teaching JEZIK

// 1. zadatak

// const someNum = prompt('Please enter your number:');

const someNum = 10;

let answerSomeNum = someNum > 0 ? `${someNum} is positive!` : `${someNum} is negative!`;

console.log(`1. zadatak: ${answerSomeNum}`);

// 2. i 3. zadatak

if(someNum === 0 || someNum > 0) {
  console.log(`${someNum} is either equal to 0 or positive value!`);
}

// 4. zadatak

const userEmail = 'marko@gmail.com';
const backupEmail = '';
console.log(userEmail === 'marko@gmail.com'); // ! vraca -> true
console.log(userEmail); // ! vraca -> 'marko@gmail.com'

console.log(userEmail || null); // ! vraca -> 'marko@gmail.com'
console.log(backupEmail || 'milan@gmail.com'); // ! vraca -> 'milan@gmail.com'
console.log(backupEmail || ''); // ! vraca -> ''
console.log(backupEmail || null || 'petar@gmail.com'); // ! vraca -> 'petar@gmail.com'

console.log(userEmail && 'petar@gmail.com'); // ! vraca -> 'petar@gmail.com'
console.log(backupEmail && 'petar@gmail.com'); // ! vraca -> ''
console.log(userEmail && ''); // ! vraca -> ''



// 5. zadatak

const dayOfTheWeek = 'tuesday';

switch(dayOfTheWeek) {
  case 'monday':
      console.log(`Today is Monday!`);
      break;
  case 'tuesday':
      console.log(`Today is Tuesday!`);
      break;
  case 'wednesday':
      console.log(`Today is Wednesday!`);
      break;
  case 'thursday':
      console.log(`Today is Thursday!`);
      break;
  case 'friday':
      console.log(`Today is Friday!`);
      break;
  case 'saturday':
      console.log(`Today is Saturday!`);
      break;
  case 'sunday':
      console.log(`Today is Sunday!`);
      break;
}

// 6. zadatak

let multiplyResult = 1;

for(let j = 1; j <= 10; j++) {
  multiplyResult *= j;
}

console.log(`Result of multiplying first 10 numbers ${multiplyResult}`); // Result of multiplying first 10 numbers 3628800


// 7. zadatak
const foreignLanguages = [
  {name: 'English', sentence: 'This is some sentence on English.'},
  {name: 'German', sentence: 'JS ist sehr gut.'},
  {name: 'Latin', sentence: 'Lorem ipsum dolor sit amet.'}
];

// 8. zadatak
for(let language of foreignLanguages) {
  console.log(`Here is a sentence on ${language.name} : ${language.sentence}`);
}

// 9. zadatak
foreignLanguages[0].teachers = [
  {firstName: 'Marko', lastName: 'Markovic'},
  {firstName: 'Petar', lastName: 'Petrovic'},
  {firstName: 'Sara', lastName: 'Saric'}
]

// 10. zadatak
for(let i=0; i < foreignLanguages[0].teachers.length; i++) {
  console.log(`Teacher number ${i+1}: ${foreignLanguages[0].teachers[i].firstName} ${foreignLanguages[0].teachers[i].lastName} is teaching ${foreignLanguages[0].name}`);
}


// ! 8. cas JS-a (27. cas) (17.01.2023.)

console.log('--------------- 8. cas JS-a (27. cas) (17.01.2023.) --------------');


const personObj = {
   name: 'Marko Markovic',
   sayHello: function() {
      console.log(`Good morning!`); // ! Ovo je sada METODA objekta personObj
   }
}

console.log(personObj.sayHello());


// * Function Declaration (deklaracija funkcija)

function mojaFunkcija(x) {
   return `Kvadratni koren od ${x} je ${Math.sqrt(x)}`;
}

console.log(mojaFunkcija(25));

// * Function Expression (ekspresija funkcija) --> dozvoljava smestanje funkcija u varijable

const mojaFunkcija1 = function(x, y) {
   return x*y;
}

console.log(mojaFunkcija1(5,2));

const printPersonName = function(person) {
   return `Person's name is ${person.name}`;
}

console.log(printPersonName(personObj));


/**
 * Razlika izmedju function expression-a i function declaration-a je u Hoistingu.
 * 
 */

// console.log(getCurrentYear()); // ! Cannot access 'getCurrentYear' before initialization

const getCurrentYear = function() {
   const date = new Date();
   return date.getFullYear();
}

console.log(getCurrentYear()); // ! mozemo pristupiti getCurrentYear funkciji (tj pozvati je) SAMO nakon njene deklaracije


console.log(getRandomNumber());

function getRandomNumber() {
   return Math.random();
}


// ! Anonimne funkcije --> najcesce se koriste kao callback funkcije drugih funkcija (setTimeout-a, setInterval-a, nekog event listener-a)

setTimeout(function() {
   console.log(`Testing anonymous function`);
}, 2000);

// setInterval(function() {
//    console.log(`Testing set Interval`);
// }, 3000);

const btnClickMe = document.getElementById('btn-click-me');

// btnClickMe.addEventListener('click', function() {
//    console.log(`Button is clicked`);
// });

btnClickMe.addEventListener('click', function btnClickedMeHandler() {
   console.log(`Button is clicked`);
});



// ! Arrow funkcije ( => )

const myFirstArrowFunction = (s, v) => {
   return s+v;
}

console.log(`Result is ${myFirstArrowFunction(30,40)}`);


// Dodatni primer arrow funkcija:

const mySecondArrowFunction = (x, y) => x+y;

console.log(`Another result is ${mySecondArrowFunction(100,200)}`);

// const testArrowFunc = (x,y) => { // * ovo je validna sintaksa
//    const zbir = x+y;
//    return zbir;
// }

const arrowFuncNoParams = () => {
   console.log(`No params arrow func`);
}

arrowFuncNoParams();

const arrowFuncNoParams2 = () => console.log(`No params arrow func 2`);

arrowFuncNoParams2();

const arrowFuncWithOneParam = (z) => z**3;

console.log(arrowFuncWithOneParam(2));

const arrowFuncWithOneParam2 = (z) => {
   return z**3;
}

console.log(arrowFuncWithOneParam2(2));


const arrowFuncWithOneParam3 = z => z**3;

console.log(arrowFuncWithOneParam3(3));


/*
    1. Prepraviti sledecu funkciju:
 * 
 *          function sumUp(a, b) {
 *              return a + b;
 *          } 
 * 
 *     u format ARROW funkcije.
 * 
 *  2. U istu funkciju (sumUp) za parametar b dodati default vrednost, koja ce biti koriscena u slucaju da se vrednost
 *      ne prosledi (npr 10).
 * 
 *  3. Kreirati u DOM-u dva button-a (Start Counting i Stop Counting).
 *  4. Kreirati po jedan event za ta oba button-a.
 *  5. Kada se klikne start counting button, na svaki sekund neka se na konzoli ispise trenutna vrednost counter-a.
 *  6. U momentu kada se klikne na stop counting button, ispisivanje na konzoli counter-a treba da prestane.
*/

// const sumUp = (a, b) => { // * 1. nacin
//    return a+b;
// }

const sumUp = (a, b) => a+b; // * 2. nacin

console.log(sumUp(25,35));

const sumUp2 = (a, b=10) => a*b; // ! primer default parametra (vrednost koja se koristi kao backup originalne vrednosti ako ta originalna vrednost nije prosledjena pri pozivu funkcije)

console.log(sumUp2(10,2));

console.log(sumUp2(10)); // NaN


// * 3.

let myCounter = 0;
let stopCounting = false;
const btnStart = document.getElementById('btn-start-count');
const btnStop = document.getElementById('btn-stop-count');

btnStart.addEventListener('click', function increaseCounter() {
   setInterval(function() {
      if (!stopCounting) {
         ++myCounter;
         console.log(`Counter is ${myCounter}`);
      }
   },1000);
})

btnStop.addEventListener('click', function stopCounter() {
   stopCounting = true;
});



// ! 9. cas JS-a (28. cas) (19.01.2023.)

console.log('--------------- 9. cas JS-a (28. cas) (19.01.2023.) --------------');


// ! NIZOVI (ARRAYS)

// 1. nacin i najcesci za kreiranje niza u JS-u

const arrayOfNumbers = [5,10,15];

console.log(arrayOfNumbers);


// 2. nacin kreiranja niza

const arrayOfNumbersWithConstructor = new Array(5,6,7);

console.log(arrayOfNumbersWithConstructor);


// mozete mix-ovati tipove podataka u nekom nizu:

const mixedExampleArr = [
   10,
   'Hello',
   false,
   {
      name: 'Sara Saric',
      age: 30
   }
]

console.log(mixedExampleArr);

const nestedExampleArr = [
   [6,7,8],
   ['Java', 'JS']
]

console.log(nestedExampleArr);


for(let array of nestedExampleArr) {
   for(let value of array) {
      console.log(value);
   }
}



// ! ARRAY FUNKCIJE

// ! 1. PUSH -> dodaje element na kraj niza i vraca novu duzinu niza

const pushArrayExample = [1,2,3,4,5];

let pushArrayLength = pushArrayExample.push(6);

console.log(`Array ${pushArrayExample} has length of ${pushArrayLength} after calling push.`);


// ! 2. UNSHIFT -> dodaje element na pocetak niza i vraca novu duzinu niza

pushArrayLength = pushArrayExample.unshift(0);

console.log(pushArrayLength);


// ! 3. POP -> uklanja element sa kraja niza, ali i vraca sam element koji je izbacen sa kraja niza

let removedElement = pushArrayExample.pop();

console.log(`Poped element is ${removedElement}`);


// ! 4. SHIFT -> uklanja element sa pocetka niza, ali i vraca sam element koji je izbacen sa pocetka niza

removedElement = pushArrayExample.shift();

console.log(`Shifted element is ${removedElement}`);


// * Dodavanje elemenata na tacno odredjeno mesto

pushArrayExample[2] = 32; // ! ovakav pristup potpuno uklanja element koji je do tog momenta bio na tom indexu i zamenjuje ga novim


pushArrayExample[10] = 111;

pushArrayExample[8] = 'hello world';



// ! SPLICE -> koristi se za dosta stvari:

// * a) uklanja odredjeni broj elemenata iz niza OD odredjenog indeksa i kreira novi niz od tih obrisanih elemenata:

const langs = ['Java', 'JS', 'C#', 'Swift', 'Python'];

const splicedArr = langs.splice(3, 2);

console.log(langs);

console.log(splicedArr);


// * b) moze da se koristi za dodavanje elemenata na tacno odredjeno mesto:

langs.splice(2, 0, 'TypeScript');

console.log(langs);


// * c) moze da se koristi za brisanje SVIH elemenata iz niza:

// langs.splice(0);

console.log(langs);


// * d) brisanje elemenata od odredjene pozicije pa sve do kraja niza:

// langs.splice(1);

console.log(langs);

splicedArr.splice(1,1);

console.log(splicedArr);


// * e) brisanje elemenata sa KRAJA niza prosledjivanjem negativnog indexa

langs.splice(-1,1);

console.log(langs);



// ! SLICE -> vraca kopiju odredjenog dela niza ili celog niza

const sliceArrayExample = [1,2,3,4,5,6,10,12];

// * a) vracanje kopije DELA niza:

const partOfSliceArray = sliceArrayExample.slice(0, 2);

console.log(sliceArrayExample);

console.log(partOfSliceArray);


// * b) vracanje kopije CELOG niza (ali shallow kopije):

const copyOfSliceArray = sliceArrayExample.slice();

sliceArrayExample.push(100);

console.log(copyOfSliceArray);

console.log(sliceArrayExample);



// ! CONCAT -> funkcija koja spaja elemente nizova

const allArray = sliceArrayExample.concat(copyOfSliceArray, arrayOfNumbers);

console.log(allArray);



// ! INDEX_OF i LAST_INDEX_OF metode -> metode koje vracaju indekse elemenata

const indexOf100 = allArray.indexOf(100);

console.log(`Index of 100 is ${indexOf100}`);

console.log(`Index of 999 is ${allArray.indexOf(999)}`); // -1


// * U slucaju referentnih tipova podataka indexOf i lastIndexOf ne funkcionisu

const myStudents = [
   {
      name: 'Pera',
      age: 25
   },
   {
      name: 'Sara',
      age: 20
   },
   {
      name: 'Marko',
      age: 30
   }
]

console.log(myStudents.indexOf({
   name: 'Pera',
   age: 25
})); // ! -1 , jer indexOf ne funkcionise nad referentnim tipovima


console.log(`Last index of 10 is ${allArray.lastIndexOf(10)}`);



// ! FIND i FIND_INDEX metode

// ! FIND -> vraca PRVI element pronadjen na osnovu nekog uslova pretrage

const sara = myStudents.find((student) => {
   return student.name === 'Sara';
});

console.log(sara);

const pera = myStudents.find(student => student.name === 'Pera');

console.log(pera);

const studentOfAge30 = myStudents.find(student => student.age === 30);

console.log(studentOfAge30);


// ! FIND_INDEX -> vraca indeks elementa koji trazimo na osnovu nekog uslova pretrage

const idxOfMarko = myStudents.findIndex(student => student.name === 'Marko');

console.log(`Index of Marko in students array is ${idxOfMarko}`); 




// ! INCLUDES -> metoda proverava da li odredjeni element postoji u nizu

const is100 = allArray.includes(100);

const is87 = allArray.includes(87);

console.log(is100);

console.log(is87);

const odgovor = is100 
   ? `100 is in array` 
   : `100 is not in array`;

console.log(odgovor);


// * Provera da li odredjeni element postoji u nizu:

   // a) includes()
   // b) indexOf()

console.log(allArray.indexOf(100) !== -1);



// ! Homework -> 9. cas JS-a (28. cas) (19.01.2023.)
/**
 *  1. Kreirati niz sa artiklima u radnji (svaki artikl ima svoj naziv i svoju cenu)
 *  2. Dodati u niz artikala jos 2 elementa, jedan na pocetak, a drugi na kraj niza 
 *  3. Na trece mesto u nizu dodati novi artikl, ali tako da se trenutno treci element NE OBRISE, vec samo pomeri za jedno mesto udesno
 *  4. Obrisati poslednji element iz niza
 *  5. Kreirati novi niz na osnovu samo poslednja tri elementa iz artikala
 *  6. Iz tog novog niza, odvojiti samo prva dva elementa u novi niz
*/

const articles = [
   {
       name: 'Bread',
       price: 50
   },
   {
       name: 'Bannanas',
       price: 30
   },
   {
       name: 'Yogurt',
       price: 10
   }
]

// 2.
articles.push({
   name: 'Milk',
   price: 6
});

articles.unshift({
   name: 'Chocolate',
   price: 12.55
});


// 3.
articles.splice(2,0, {
   name: 'Orange Juice',
   price: 50
});

console.log('articles', articles);


// 4.

// articles.pop();

articles.splice(-1,1);

console.log('articles', articles);


// 5.

const lastThreeArticles = articles.slice(-3);

console.log(lastThreeArticles);

// 6.

const firstTwoArticles = lastThreeArticles.slice(0,2);

console.log(firstTwoArticles);


// ! 10. cas JS-a (29. cas) (24.01.2023.)

console.log('--------------- 10. cas JS-a (29. cas) (24.01.2023.) --------------');


// ! ForEach -> metoda koja se poziva nad svakim elementom nekog niza

const myTransactions = [100, -30, 200, -40, -150];

// * 1. nacin (uz FOR OF)

for (let transaction of myTransactions) {
   console.log(`${transaction} $`);
}


// * 2. nacin (uz obicnu FOR petlju)

for (let i = 0; i < myTransactions.length; i++) {
   console.log(`${myTransactions[i]}`);
}

// * 3. nacin (uz FOR EACH metodu)

// myTransactions.forEach((transaction, i) => {
//    console.log(`${++i}: ${transaction} $`);
// });

myTransactions.forEach((transaction, i) => console.log(`${++i}: ${transaction}`));


// TODO Na svaku transakciju ukalkulisemo proviziju bankomata od 5 % i te transakcije sa provizijom dodamo u novi niz

const bankProvision = 0.05;
const noviNiz = [];

myTransactions.forEach(transaction => {
   const provision = transaction * bankProvision;
   const totalTransaction = transaction + provision;
   noviNiz.push(totalTransaction);
});

console.log(`Transactions with provisions array: ${noviNiz}`);


noviNiz.forEach((trans, i) => {
   console.log(`${++i}: ${trans}`);
});


// TODO hocemo da za svaku transakciju (sa provizijom) zabelezimo njenu poziciju i iznos i to dodamo u nekiNoviNiz

const nekiNoviNiz = [];

noviNiz.forEach((transaction, i) => {
   const ob = {
      position: i+1,
      value: `${transaction} $`
   }
   nekiNoviNiz.push(ob);
});



// ! MAP -> metoda koja prihvata kao svoj argument funkciju koja transformise svaki element niza i vraca NOVI niz (transformisani niz)

let letters = ['a', 'b', 'c', 'd'];

// hint: uz funkciju toUpperCase() mozemo svaki malo slovo pretvoriti u veliko

const bigLetters = letters.map(letter => {
   return letter.toUpperCase();
});

console.log(letters);
console.log(bigLetters);

const normalPrices = [30.5, 20, 15, 7.4, 10];

const pdv = 0.08;

const updatedPrices = normalPrices.map(price => (price * (1 + pdv)).toFixed(2));

console.log(updatedPrices);

const basketItems = [
   {
      name: 'Chair',
      price: 50.0
   },
   {
      name: 'Table',
      price: 100.0
   },
   {
      name: 'Lamp',
      price: 20.0
   }
];

// * 1. nacin (uz npr ForEach metodu)

// let onlyNames = [];

// basketItems.forEach(item => onlyNames.push(item.name));

// console.log(onlyNames);

// * 2. nacin (uz npr map metodu)

const namesArray = basketItems.map(item => item.name);

console.log(`Items names:`, namesArray);



// ! SORT -> metoda koja sortira i MUTIRA (modifikuje) niz nad kojim se ova metoda i poziva

let brojevi = [10, 23, 11, 4.2, 5, 123, 55, 0];

// * 1. nacin sortiranja (Ascending sort)

// brojevi.sort((a, b) => {
//    if (a > b) {
//       return 1;
//    } else if (a === b) {
//       return 0;
//    } else {
//       return -1;
//    }
// });

// console.log(brojevi);

// * 2. nacin sortiranja (Ascending sort)

brojevi.sort((a, b) => {
   return a-b;
});

console.log(brojevi);


// * Descending Sort

// brojevi.sort((a, b) => {
//    return b-a;
// });

// console.log(brojevi);


// ! REVERSE -> revers-uje niz u kontra pravcu

console.log(brojevi.reverse());



// ! FILTER -> metoda koja filtrira niz vracajuci samo elemente koji prolaze (zadovoljavaju) odredjeni logicki uslov

const greaterThan10Nums = brojevi.filter(broj => broj >= 10);

console.log(greaterThan10Nums);

const randomWords = ['Marko', 'Mars', 'Pluton', 'JavaScript'];

const onlyMWords = randomWords.filter(word => word[0] === 'M');

console.log(onlyMWords);



// * podsetnik: sumirati (sabrati) sve elemente u nizu BROJEVI

// * 1. nacin (uz FOR OF petlju npr)
// let zbirBrojeva = 0;

// for (let br of brojevi) {
//    zbirBrojeva += br;
// }

// console.log(`Zbir svih brojeva je ${zbirBrojeva}`);


// ! REDUCE -> metoda koja redukuje niz na jednu vrednost na osnovu uslova koji zadamo

let reduceSum = brojevi.reduce((prevValue, currValue) => {
   return prevValue += currValue;
}, 0);

console.log(`Reduce sum of brojevi is ${reduceSum}`);



// ! FLAT -> metoda koja na povrsinu niza PRVOG reda izvlaci elemente podnizova

const arrWithNestedArrays = [
   [4, 5, 1],
   ['Java', 10, 'Neptun'],
   8, 10
]

console.log(arrWithNestedArrays);

const flatArray1 = arrWithNestedArrays.flat(1);

console.log(flatArray1);


const arrWithNestedArraysDeep = [
   [30, 201, 1, ['java', true], 50, 'hello', [8, 7]]
]

const flatArray2 = arrWithNestedArraysDeep.flat(2);

console.log(flatArray2);


// ! Chaining u JS-u:

// const veciOd10Brojevi = brojevi.filter(broj => broj > 10);

// console.log(veciOd10Brojevi);

// const pomnozeniSa2 = veciOd10Brojevi.map(broj => broj * 2);

// console.log(pomnozeniSa2);

// const zbirPomnozenihSa2 = pomnozeniSa2.reduce((prevVal, currVal) => {
//    return prevVal += currVal;
// }, 0);

// console.log(zbirPomnozenihSa2);

const chainningResult = brojevi
   .filter(broj => broj > 10)
   .map(broj => broj * 2)
   .reduce((prevVal, currVal) => prevVal + currVal);

console.log(chainningResult);

const accounts = [
   {
      owner: 'Marko Markovic',
      age: 55,
      city: 'Novi Sad',
      transactions: [50, 30, -150, 300, -20]
   },
   {
      owner: 'Sara Saric',
      age: 25,
      city: 'Novi Sad',
      transactions: [100, 30, -150, 300, -220]
   },
   {
      owner: 'Petar Petrovic',
      age: 55,
      city: 'Novi Sad',
      transactions: [500, 30, -10, 300, -20]
   },
]


const saldo = accounts
   .map(account => account.transactions)
   .flat()
   .reduce((prevVal, currVal) => prevVal + currVal);

console.log(saldo);


// ! Homework -> 10. cas JS-a (29. cas) (24.01.2023.)
/**
 *  1. Kreirati poseban niz koji je spoj poslednja dva niza dobijena (iz 5. i 6. zadatka iz PRETHODNOG domaceg)
 *  2. U nizu artikala, pronaci artikl koji se naziva 'Yogurt' i smestiti ga u varijablu 'yogurt'
 *  3. Pronaci indeks artikla koji ima cenu 30
 *  4. Nad svakim artiklom dodeliti novi property 'formatedPrice' koji ce sadrzati prefiks '$' i cenu tog artikla
 *  5. Kreirati novi niz koji ce sadrzati sve cene svakog artikla.
 *  6. Proveriti da li se u novom nizu svih cena nalazi ijedna cena koja iznosi 7 i ispisati odgovor u formatu 'cena 7 postoji' ili 'cena 7 ne postoji'
 *  7. Za svaku cenu obracunati dodatan PDV (npr. od 8 %) i dodati ga na postojecu cenu i za svaku cenu dodati njen redni broj u nizu
*/

// 1.

const concatedArticles = lastThreeArticles.concat(firstTwoArticles);

console.log('Concated articles', concatedArticles);


// 2.

const yogurt = articles.find(article => article.name === 'Yogurt');

console.log('Yogurt', yogurt);


// 3.

const ofPrice30 = articles.findIndex(article => article.price === 30);

console.log('Off price 30', ofPrice30);

articles.splice(ofPrice30, 1);

console.log(articles);


// 4.

articles.forEach(article => article.formattedPrice = `$ ${article.price}`);

console.log(articles);



// 5.

const allPrices = [];
articles.forEach(article => allPrices.push(article.price));

console.log(allPrices);


// 6.

const isPrice7 = allPrices.includes(7) ? 'cena 7 postoji' : 'cena 7 ne postoji';

console.log(isPrice7);


// 7.

const pricesWithPDV = [];

allPrices.forEach((price, idx) => {
    const priceObj = {
        number: idx+1,
        price: price * (1+0.08)
    }
    pricesWithPDV.push(priceObj);
})

console.log(pricesWithPDV);



// ! 11. cas JS-a (30. cas) (26.01.2023.)

console.log('--------------- 11. cas JS-a (30. cas) (26.01.2023.) --------------');


// ! Kraci nacin racunanja salda svih racuna banke
// * FLATMap ide do dubine 1 (depth argument je po default-u 1 i ne moze se menjati)

// const newSaldo = accounts
//    .map(account => account.transactions)
//    .flat()
//    .reduce((prevVal, currVal) => prevVal + currVal);

// console.log(saldo);

const newSaldo = accounts
   .flatMap(acc => acc.transactions)
   .reduce((prevVal, currVal) => prevVal + currVal);

console.log(`Saldo with flatMap is ${newSaldo}`);



// ! SPLIT -> metoda koja splituje (razdvaja) string po odredjenom sepratoru

let nekiStr = 'Jupiter';

console.log(nekiStr.split(''));

nekiStr = 'Welcome to my world!';

console.log(nekiStr.split(' '));

let weatherData = 'city: Novi Sad;weather: snow;degrees 0 C';

let splitData = weatherData.split(';');

console.log(splitData);


// ! JOIN -> metoda koja spaja elemente iz niza po odredjenom parametru

let originalData = splitData.join(';');

console.log(originalData);

let locationSite = 'nl_NL';

let myLoc = locationSite.split('_')[1];

console.log(myLoc);

console.log(`Incoming location is ${myLoc}`);



// ! SOME -> metoda koja vraca true ako BAR JEDAN element zadovoljava neki logicki uslov

console.log(brojevi);

let manjiBrojevi = [1,2,3,4,5];

const isAnyBiggerThan10 = number => number > 10;

console.log(isAnyBiggerThan10(3));

console.log(`Niz brojevi sadrzi neki broj veci od 10: `, manjiBrojevi.some(isAnyBiggerThan10));

if (brojevi.some(isAnyBiggerThan10)) {
   console.log('Nesto');
}



// ! REMAINDER operator -> % -> utvrdjuje ostatak pri deljenju brojeva

const findEvenNumber = num => num % 2 === 0;

console.log(`Niz brojevi sadrzi parne brojeve: `, brojevi.some(findEvenNumber));



// ! EVERY metoda -> vraca true ako SVAKI element nekog niza zadovoljava postavljeni logicki uslov

const findOddNumber = n => n % 2 !== 0;

console.log(`Niz brojevi sadrzi SVE neparne brojeve: `, brojevi.every(findOddNumber));



// ! FILL metoda -> metoda koja menja sve elemente niza u odredjenu vrednost. Cak mozemo zadati i poziciju odakle se vrednosti menjaju.

const randNumbers = [100,200,300,400,500,600];

console.log(randNumbers);

console.log(`Primer fill metode: `, randNumbers.fill('*',2));

console.log(`Primer fill metode 2: `, randNumbers.fill('x'));




// ! SPREAD operator -> operator koji izvlaci iz niza pojedine elemente i vraca listu tih elemenata

const addNumbers = (a,b,c,d) => {
   return a+b+c+d;
}

let fourNumbers = [5,10,11,14];

let addNumbersRes = addNumbers(...fourNumbers);

console.log(`Zbir 4 broja je ${addNumbersRes}`);


// * moze se koristiti i za kopiranje niza (niza PRIMITIVNIH tipova podataka)

let fourNumbersCopy = [...fourNumbers];

fourNumbers.push(400);

console.log(fourNumbers);
console.log(fourNumbersCopy);


let zaposleni = [
   {
      id: 1,
      name: 'Pera Peric',
      degree: 'master eng'
   },
   {
      id: 2,
      name: 'Sara Saric',
      degree: 'bachelor eng'
   }
];

let zaposleniCopy = [...zaposleni];

console.log(zaposleni);
console.log(zaposleniCopy);

zaposleni.push({
   id: 3,
   name: 'Marko Markovic',
   degree: 'master'
});

console.log(zaposleni);
console.log(zaposleniCopy);


zaposleni[1].degree = 'doktor nauka';

console.log(zaposleni);
console.log(zaposleniCopy);


// ! Destrukturiranje niza -> koncept kojim destruktuiramo niz u varijable

let studentExample = ['Pera', 'Peric', 'master', 30];

const [stName, stLastName, stDegree, stAge] = studentExample;

console.log(`Student's name: ${stName} ${stLastName} with degree ${stDegree} is ${stAge} years old.`);


let student2Example = ['Sara', 'Saric', 'bachelor', 25, true, 'not married'];

const [fName, lName, ...additionalData] = student2Example;

console.log(`Second Student name is ${fName} ${lName}`);

console.log(additionalData);

console.log('----------------- DOMACI -> 11. cas JS-a (30. cas) (26.01.2023.) -------------')

/**
 * TODO Zadaci za vezbu:
 */

/*
 *  1. Kreirati prodavnicu za odecu (5 item-a dodati)
 *  2. Svaki odevni predmet ima svoj ID, naziv, cenu, moguce boje i moguce velicine
 *  3. Dodati u korpu 3 item-a po izboru na osnovu njihovog ID-a, pri cemu se ID-evi artikla 
 *     unose kroz jedan ISTI prompt prozor, pri cemu se ID-evi odvajaju zarezom (1,3,5 npr.)
 *  4. Pronaci proizvode sa unesenim ID-evima i ispisati ih na konzoli svaki POJEDINACNO uz poruku 
 *     'Chosen products are: ' nakon cega sledi lista odabranih proizvoda.
 *  5. Poslednji proizvod iz korpe ukloniti (iz niza) i dodati neki drugi proizvod ciji se ID takodje unosi 
 *     kroz prompt prozor.
 *  6. Izracunati ukupnu cenu svih proizvoda iz korpe i ispisati je uz poruku `Total price is CENA $`
 *  7. Na ukupnu cenu obracunati popust od 10 % i sniziti je za tu vrednost i ispisati je na konzoli uz poruku:
 *     `Total Price with discount is CENA $`;
 *  8. Proizvode iz korpe sortirati opadajuce po ceni
 *  9. Ispisati sve moguce velicine proizvoda iz korpe (kao deo jednog niza)
 *  10. Iz niza dobijenih velicina otkloniti duplikate (dakle jedna velicina se sme pojaviti samo jednom u istom tom nizu)
*/

// * 1. i 2.

const clothes = [
   {
      id: 1,
      name: 'T-shirt',
      price: 20.00,
      colors: ['blue', 'black', 'white'],
      sizes: ['S', 'M', 'L']
   },
   {
      id: 2,
      name: 'Pants',
      price: 40.00,
      colors: ['gray', 'black', 'white'],
      sizes: ['XL', 'M', 'L']
   },
   {
      id: 3,
      name: 'Hat',
      price: 12.5,
      colors: ['black', 'gray', 'white'],
      sizes: ['S', 'M']
   },
   {
      id: 4,
      name: 'Socks',
      price: 7.5,
      colors: ['red', 'black', 'white'],
      sizes: ['S', 'M', 'L', 'XL']
   },
   {
      id: 5,
      name: 'Hoodie',
      price: 25.00,
      colors: ['blue', 'black', 'white', 'yellow'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
   },
]

// 3. 
const enteredIds = prompt('Enter up to 3 clothes items'); // 2,3,4

// 4.
const basket = [];
const chosenIds = enteredIds
   .split(',')
   .map(id => +id);

console.log(chosenIds);

for(let id of chosenIds) {
   for(let item of clothes) {
      if(item.id === id) {
         basket.push(item);
      }
   }
}

console.log(`Chosen products are:`, basket);
// basket.forEach(item => console.log(item));


// 5.

// basket.pop();
basket.splice(-1, 1);
console.log(basket);

const newProductID = prompt('Enter another product ID:');

const newProduct = clothes.find(product => +newProductID === product.id);

basket.push(newProduct);

console.log(basket);



// TODO 1. deo Domaceg -> dovrsiti ostalih 5 zadataka od gore


// 6.
let totalPrice = basket
    .map(item => item.price)
    .reduce((prevVal, currVal) => prevVal + currVal);

console.log(`Total price of basket is ${totalPrice} $`);

let discount = 0.1;

totalPrice -= totalPrice * discount;

console.log(`Total price with discount is ${totalPrice} $`);


// 7.
basket.sort((a,b) => {
    return b.price - a.price;
});

console.log(basket);


// 8.
// let sizesArray = [...basket.flatMap(item => item.sizes)];

let sizesArray = basket
    .slice()
    .flatMap(item => item.sizes);

console.log(sizesArray);

// 9.
let filteredArray = sizesArray.filter((size, idx, sizesArray) => {
    return sizesArray.indexOf(size) === idx;
});

console.log(filteredArray);


// TODO 2. deo Domaceg -> 20 zadataka ispod:

// ! (KOMBINACIJE NIZOVA i FUNKCIJA)

/**
 * 1. Napisati funkciju koja klonira niz koji joj je prosledjen kao argument
 * 2. Napisati funkciju koja vraca poslednji element iz niza koji joj je prosledjen kao argument
 * 3. Napisati funkciju koja spaja sve elemente jednog niza u String
 * 4. Napisati funkciju koja prihvata niz brojeva kao argument i za svaki od njih proverava da li je paran ili neparan.
 *    Ukoliko je paran vraca `$BROJ is even`, u suprotnom `$BROJ is odd.` Ako je nula, onda `Number is zero!`
 * 5. Napisati funkciju koja ce niz koji prihvati kao argument da sortira u rastucem redosledu (testirati na nizu Brojeva i nizu Stringova)
 * 6. Napisati funkciju koja ispisuje elemente pod nizova. Npr ako su pod-nizovi [[1,2,3] , [4,5,6]] onda je rezultat funkcije:
 *    `Array number $REDNI_BROJ_NIZA contains these elements: $ELEMENTI`
 * 7. Napisati funkciju koja sabira ukupan PROIZVOD i ukupan ZBIR svih elemenata iz niza prosledjenog kao argument. Takodje, dodati
 *    validaciju koja provera da li je SVAKI element iz prosledjenog niza broj. Ako bar jedan element nije broj, ispisati `Each element in
 *    array has to be a number.`
 * 8. Pozvati funkciju prompt() 3 puta i svakom prilikom uneti nesto u input polje. Unetu vrednost dodati u isti niz i na kraju ga ispisati.
 * 9. Svaku vrednost iz prethodnog niza ukoliko je u pitanju broj zapisan u String formatu (npr '55') pretvoriti u broj 55 i pri tome ga zameniti
 *    u nizu. Dakle, ako je '55' (string), pretvori se u 55 (broj) i potom se umesto '55' (stringa) sada u nizu treba naci 55 (broj)
 * 10. Napisati funkciju koja ce za niz godina prosledjen kao argument utvrditi koja je od godina prestupna. Ako je prestupna, ispisati 
 *     `$GODINA is a leap year!`
 *     ! NAPOMENA: Godina je prestupna ako je deljiva za 400. Takodje, godina je prestupna ako je deljiva sa 4 i nedeljiva sa 100.
 * 11. Napisati funkciju koja iz niza prihvacenog kao argument vraca duplikate
 * 12. Napisati funkciju koja ce sabrati sve brojeve iz unije 3 niza
 * 13. Napisati funkciju koja ce vrednosti 0, false, undefined, null otkloniti iz niza prosledjenog kao argument
 * 14. Napisati funkciju koja ce ovaj niz sa knjigama sortirati rastuce po naslovu:
 *      [
 *          {
 *              id: 1,
 *              author: 'Steven King',
 *              title: 'Misery'
 *          },
 *          {
 *              id: 2,
 *              author: 'Steven King',
 *              title: 'The Shining'
 *          },
 *          {
 *              id: 3,
 *              author: 'Steven King',
 *              title: 'Doctor Sleep'
 *          }
 *      ]
 *  15. Napisati funkciju koja ce iz niza prosledjenog kao argument vratiti najveci broj 
 *  16. Kreirati funkciju koja vraca niz koji inicijalno na svakoj poziciji ima broj 0 (dakle npr -> [0,0,0,0,0]); Parametar neka bude broj
 *      koji odredjuje duzinu niza (npr ako se funkciji prosledi broj 5, onda se kreira niz od 5 elemenata (duzine 5)).
 *  17. Napisati funkciju koja reverse-uje niz prosledjen kao argument. Npr [1,2,3] => [3,2,1]. Pokusati prvo BEZ reverse() funkcije.
 *  18. Napisati funkciju koja vraca TRUE ako su dva niza identicna (ako su im svi elementi medjusobno isti)
 *  19. Napisati funkciju koja vraca broj kopija u nizu. 
 *      Ako ima duplikata ispisati: There are $BROJ_DUPLIKATA duplicates in this array
 *      Ako nema duplikata ispisati: There are no duplicates in this array
 *  20. Napisati funkciju koja ce za prosledjeni objekat (ucenika) sracunati prosek njegovih zakljucenih ocena na kraju godine.
 *      Npr ako su predmeti sledeci: tehnicko: [3,4,5,5,4]
 *                                   matematika: [5,2,3,5,4]
 *                                   srpski jezik: [4,4,3,5,4]
 *      Onda na osnovu ova 3 predmeta izvuci UKUPNU prosecnu ocenu i tu ocenu dodeliti tom uceniku kao prosek za kraj godine:
 *      Npr: 'Pera Peric has an average grade: $PROSEK'
 *      ! HINT: proveriti da li se moze FOR IN loop iskoristiti
*/

// 1.
const cloneFunc = (array) => {
   let arrayCopy = [...array];
   return arrayCopy;
}

console.log('Clone function', cloneFunc([1,2,3,4,5]));


// 2.
const lastElementFunc = (array) => {
   return array[array.length - 1];
}

console.log('Last element', lastElementFunc([19,'hello',22,33,'world']));


// 3.
const toStringFunc = (array) => {
   return array.join(' ');
}

console.log('To String function', toStringFunc(['Sara', 'Pera', 'Marko', 'Lazar']));


// 4.
const checkIfEvenFunc = (numbers) => { // [3,7,10,23,0]
   numbers.forEach((number) => {
       if(number % 2 === 0 && number !== 0) {
           console.log(`${number} is even.`);
       } else if(number % 2 !== 0) {
           console.log(`${number} is odd.`);
       } else {
           console.log('Number is 0.');
       }
   });
}

checkIfEvenFunc([3,7,10,23,0]);


// 5.
const sortAscFunc = (array) => {
   if(array.every(element => typeof element === 'string')) {
       return array.sort();
   } else {
       return array.sort((x,y) => x-y);
   }
}

console.log(sortAscFunc([1,5,7,12,9,8,4,6]));

console.log(sortAscFunc(['Avocado', 'Az Alkmar', 'Yogurt', 'Bannanas', 'Milk', 'Cereals']));


// 6. 
const extractSubArraysFunc = (array) => {
   array.forEach((arr, idx) => {
       console.log(`Array ${idx+1} contains these elements:`);
       arr.forEach(element => console.log(element));
   })
}

extractSubArraysFunc([[1,4,5], ['test', 22, 33], [88, 99, 'hello']]);


// 7.
const calcFunc = (array) => {
   if(array.every(element => typeof element === 'number')) {
      const sum = array.reduce((prevVal, currVal) => prevVal + currVal);
      const product = array.reduce((prevVal, currVal) => prevVal * currVal);
      return `Result is ${sum + product}`; 
   }
   return `Each element in array has to be a number.`
}

console.log(calcFunc([1,5,10]));

console.log(calcFunc(['Avocado', 5, 6]));


// 8.
const promptArrFunc = () => {
   const promptArr = [];
   for(let i = 0; i < 3; i++) {
       let item = prompt('Enter your value');
       promptArr.push(item);
   }
   return promptArr;
}

// console.log('Prompt Array', promptArrFunc());


// 9.
const checkIfNumber = (array) => {
   array.map((element, idx, array) => {
       let parsedEl = parseInt(element);
       if(!isNaN(parseInt(parsedEl))) {
           array[idx] = parsedEl;
       }
   });
   return array;
}

let promptArr = promptArrFunc();
let modifiedPromptArr = checkIfNumber(promptArr);
console.log('Modified Prompt Array', modifiedPromptArr);


// 10.
const checkLeapYearFunc = (years) => {
   years.forEach(year => {
       if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
           console.log(`${year} is a leap year!`)
       }
   });
}

checkLeapYearFunc([2020, 2022, 1741, 1882, 2000]);


// 11.
const checkForDuplicateFunc = (array) => {
   let duplicates = array.filter((element,idx,array) => {
       return array.indexOf(element) !== idx;
   });
   return duplicates;
};

console.log('Duplicates', checkForDuplicateFunc([1,2,1,3,4,5,4,6,3,7,6,9]));


// 12.
const sumUnionFunc = (array1, array2, array3) => {
   // const unionArr = array1.concat(array2, array3); // ! 1. nacin - spajanje pomocu CONCAT funkcije
   const unionArr = [...array1, ...array2, ...array3]; // ! 2. nacin - spajanje pomocu SPREAD operatora
   return unionArr.reduce((prevVal, currVal) => prevVal + currVal);
}

console.log(`Sum of union of arrays is: ${sumUnionFunc([1,2,3], [4,5,6], [7,8,9])}`);


// 13. 
const removeItemsFunc = (array) => {
   array.forEach((item,idx,array) => {
       if(item === null || item === undefined || item === 0 || item === false) {
           array.splice(idx,1);
       }
   });
   return array;
}

console.log('Removed unwanted items', removeItemsFunc([undefined, 1, null, 'hey', 0 , 100, false, true]));


// 14. 
const books = [
   {
       id: 1,
       author: 'Steven King',
       title: 'Misery'
   },
   {
       id: 2,
       author: 'Steven King',
       title: 'The Shining'
   },
   {
       id: 3,
       author: 'Steven King',
       title: 'Doctor Sleep'
   }
];

console.log(books.sort((a,b) => {
   return a.title > b.title ? 1 : -1;
}));


// 15.
const findBiggestNum = (numbers) => {
   return Math.max(...numbers);
}

console.log(`The biggest number is: ${findBiggestNum([1,4,111,2,3,5])}`);


// 16.
const createArrayFunc = (length) => {
   let arr = new Array(length);
   return arr.fill(0);
}

console.log('Filled with 0 array:', createArrayFunc(5));


// 17.
const reverseArray = (array) => {
   const reversedArr = [];
   for(let i = array.length-1; i >= 0; i--) {
       reversedArr.push(array[i]);
   }
   return reversedArr;
}

console.log('Reversed Array', reverseArray([1,2,3,4,5]));


// 18.
const checkIfSameFunc = (array1, array2) => {
   if(array1.length !== array2.length) {
       return false;
   }
   const comparation = array1.map((item,idx) => array2[idx] === item);

   return comparation.includes(false) ? false : true;
}

console.log('Arrays are same: ',checkIfSameFunc([1,2,3], [1,2,3])); // true
console.log('Arrays are same: ',checkIfSameFunc([1,12,3], [1,2,3])); // false
console.log('Arrays are same: ',checkIfSameFunc([1,2,3,10], [1,2,3])); // false


// 19.
const getArrayDuplicatesNumber = (array) => {
   let counterOfDuplicates = 0;
   array.filter((element,idx,array) => {
       if(array.indexOf(element) !== idx) {
           counterOfDuplicates++;
       }
   });
   return counterOfDuplicates > 0 ? `There are ${counterOfDuplicates} duplicates in this array` : `There are no duplicates in this array`;
}

console.log(getArrayDuplicatesNumber([1,2,3,1,2,4,5,6,3])); // There are 3 duplicates in this array

console.log(getArrayDuplicatesNumber([1,2,3,4,5])); // There are no duplicates in this array


// 20.
const peraOb = {
   name: 'Pera Peric',
   grades: {
       tehnicko: [4,3,2,4,5],
       matematika: [4,4,2,5,4],
       srpski: [5,5,4,3,2]
   }
}

const findAnAverageFunc = (student) => {
   const allGrades = [];
   let average = 0;
   for(let key in student.grades) {
       for(let grade of student.grades[key]) {
           allGrades.push(grade);
       }
   }
   average = allGrades.reduce((prevVal, currVal) => prevVal + currVal, 0) / allGrades.length;
   return average;
}

console.log(`${peraOb.name} has an average grade of ${findAnAverageFunc(peraOb)}`);



// ! 12. cas JS-a (31. cas) (31.01.2023.)

console.log('--------------- 12. cas JS-a (31. cas) (31.01.2023.) --------------');


// ! OBJECTS 

const studentObExample = {
   name: 'Marko Markovic',
   age: 25,
   courses: ['OOP Java', '.NET Core', 'Full-Stack WEB dev'],
   gender: 'male',
   isStudent: true,
   address: {
      street: 'Bul. Vojvode Stepe 44',
      zipCode: 21000,
      city: 'Novi Sad',
      apartment: {
         number: 111,
         floor: 4
      }
   }
}

console.log(studentObExample.address.apartment.floor);

// ! Studying ce sada biti metoda objekta studentObExample
studentObExample.studying = function() {
   console.log(`I am studying!`);
}

studentObExample.studying();


// * Menjanje vrednosti postojecih property-a objekta

studentObExample.isStudent = false;


studentObExample.address.apartment.number = 55;



// * Brisanje property-a objekta

delete studentObExample.gender;

console.log(studentObExample);




// ! SQUARE BRACKET sintaksa (sintaksu uglastih zagrada)

console.log(`Student name is ${studentObExample['name']}`);

let studentCourses = 'courses';

console.log(`Courses of student ${studentObExample[studentCourses]}`);

for (let property in studentObExample) {
   console.log(studentObExample[property]);
}


let avgGrade = 'averageGrade';

studentObExample[avgGrade] = 8.98;

console.log(studentObExample);



// ! JSON interfejs --> interfejs koji vam pruza razne metode, kao npr:

// 1. PARSE --> daje mogucnost da string (zapisan u nekom JSON formatu) parsirate u normalan JS objekat

let exampleString = '{"id": 101, "name": "Petar Petrovic", "isStudent": true}';

let exampleOb = JSON.parse(exampleString);

console.log(exampleOb);


// 2. STRINGIFY --> daje mogucnost da JSON objekat pretvorite u string zapis

exampleOb.age = 30;

let backToString = JSON.stringify(exampleOb);

console.log(backToString);



// ! KOPIRANJE OBJEKATA

const car = {
   name: 'Audi A6',
   gasTypes: ['diesel', 'gas'],
   gears: 6
}

const newCar = car;

car.gears = 5;

console.log(car);
console.log(newCar);


// * SPREAD OPERATOR se moze koristiti za pravljenje SHALLOW kopija

const newCar2 = {...car};

newCar2.name = 'BMW X6';

console.log(car);
console.log(newCar2);

newCar.gasTypes.push('benzin');

console.log(car);
console.log(newCar2);


// * Kreiranje DEEP kopija (kopiranje i primitivnih i referentnih tipova podataka)

const newCar3 = {
   ...car,
   gasTypes: [...car.gasTypes]
}

console.log(newCar3);

newCar3.gasTypes.push('eletric power');

console.log(car);
console.log(newCar3);


const newCar4 = structuredClone(car); // *****

newCar4.owner = 'Pera Peric';

console.log(car);
console.log(newCar4);

newCar4.gasTypes.push('atomic power');

console.log(car);
console.log(newCar4);



// ! Object Destructing

const book = {
   id: Math.ceil(Math.random() * 100), // 0.3123123213123 ==> 31.23123213123 ==> 32
   bookName: 'Harry Potter',
   writter: 'J.K. Rowling',
   editions: [1,2,3,4,5,6],
   pages: 550
}

// 1. slucaj:

// const bookEditions = book.editions; // ! stariji nacin

const {editions} = book; // ! naziv varijable sa leve strane (od znaka =) mora da se POKLAPA SA nazivom property-a iz objekta

console.log(editions);

// 2. slucaj:

const {id, bookName, writter} = book;

console.log(`ID of book: ${id} with name ${bookName} with writter ${writter}`);

// 3. slucaj:

const {pages, ...otherProps} = book;

console.log(`${bookName} has ${pages} pages.`);

console.log(otherProps);




// ! Proveravanje da li odredjeni property postoji u nekom objektu

// * 1. nacin -> uz IN rezervisanu rec

if ('numberOfPages' in book) {
   console.log(`Property numberOfPages exists in this book!`);
}

if ('pages' in book) {
   console.log(`Property pages exists in this book!`);
}

if (!('publisher' in book)) {
   book.publisher = 'Vulkan DOO';
}

console.log(book);


// 2. nacin -> uz proveru da li je nesto undefined

// console.log(book.available);

if (book.available === undefined) {
   book.available = true;
} else {
   book.available = false;
}

console.log(book);



// ! THIS referenca
// * THIS je referenca koja ukazuje na objekat koji odredjenu metodu i poziva

const song = {
   title: 'Whole Lotta Rosie',
   artist: 'AC/DC',
   play: function() {
      console.log(`Whole Lotta Rosie by AC/DC is now playing...`);
   }
}

song.play();

const song1 = {
   title: 'Best of you',
   artist: 'Foo Fighters',
   play: function() {
      console.log(`${this.title} by ${this.artist} is now playing...`);
   }
}

// song1.play(); // ! ako bismo probali samo ovo: console.log(`${title} by ${artist} is now playing...`); dobili bi ReferenceError: title is not defined

song1.play();

song1.pause = function() {
   console.log(`Song with name: ${this.title} has been paused.`);
}

song1.pause();



const album = {
   artist: 'AC/DC',
   name: 'High Voltage',
   songs: ['High Voltage', 'Are you ready?', 'Thunderstruck']
}

album.listAllSongs = function() {
   this.songs.forEach((song, idx) => {
      console.log(`Song ${++idx}: ${song}`);
   })
}

album.listAllSongs();

