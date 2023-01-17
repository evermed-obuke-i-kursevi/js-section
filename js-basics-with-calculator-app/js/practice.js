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
})