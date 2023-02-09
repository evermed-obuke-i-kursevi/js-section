let numberResults: number[] = [];
// let textResults: string[] = [];
const textResults: Array<string> = [];

type NumOrStringType = number | string;

interface Description {
    shortDesc: string,
    longDesc: string
}

function add(x: NumOrStringType, y: number, z?: number, description?: Description) {
    if (typeof x === 'number' && typeof y === 'number' && z) {
        const numRes = x + y + z;
        numberResults.push(numRes);
        return numRes;
    } else if (typeof x === 'string' && description) {
        const strRes = x + ' ' + y;
        textResults.push(strRes)
        console.log(`Short description: ${description.shortDesc}\nLong description: ${description.longDesc}`)
        return strRes;
    }
    return +x + +y;
}

console.log(add(4, 4, 9));
console.log(add(4, 4));
console.log(add('10', 5));
console.log(add('5', 3));

console.log(add('20', 4, undefined, {shortDesc: 'short description of this math operation', longDesc: 'long description bla bla'}));