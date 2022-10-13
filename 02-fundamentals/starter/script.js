// activating strict mode
'use strict';   // algunas variables no pueden tener ciertos nombres
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('Drivers license :D') */

// functions

function fruta(apples, oranges){
    console.log(apples, oranges);
    const juice = `jugo con ${apples} y ${oranges}`
    return juice;
}

const pp = fruta(5,0)
console.log(pp)
console.log(fruta(5,0))