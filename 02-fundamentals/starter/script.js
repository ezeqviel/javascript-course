// activating strict mode
'use strict';   // algunas variables no pueden tener ciertos nombres
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('Drivers license :D') */

// functions
/*
function fruta(apples, oranges){
    console.log(apples, oranges);
    const juice = `jugo con ${apples} y ${oranges}`
    return juice;
}

const pp = fruta(5,0)
console.log(pp)
console.log(fruta(5,0)) */

// arrow functions

const calcAge = birthYear => 2022 - birthYear;
const age = calcAge(1998)
console.log(age)

const jubilacion = birthYear => {
    const age = calcAge(birthYear)
    const j = 65 - age;
    return j;
}

console.log(jubilacion(1998))