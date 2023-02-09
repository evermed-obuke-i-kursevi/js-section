var numberResults = [];
// let textResults: string[] = [];
var textResults = [];
function add(x, y, z, description) {
    if (typeof x === 'number' && typeof y === 'number' && z) {
        var numRes = x + y + z;
        numberResults.push(numRes);
        return numRes;
    }
    else if (typeof x === 'string' && description) {
        var strRes = x + ' ' + y;
        textResults.push(strRes);
        console.log("Short description: ".concat(description.shortDesc, "\nLong description: ").concat(description.longDesc));
        return strRes;
    }
    return +x + +y;
}
console.log(add(4, 4, 9));
console.log(add(4, 4));
console.log(add('10', 5));
console.log(add('5', 3));
console.log(add('20', 4, undefined, { shortDesc: 'short description of this math operation', longDesc: 'long description bla bla' }));
