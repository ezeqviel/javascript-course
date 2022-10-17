// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// prettier: meh

// nodejs
/*
    https://nodejs.org/en/download/
    
*/

// tips
/*
realistic time-based goal
big project in mind
research related technologies
*/

const measureKelvin = function(){
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: Number(prompt('Degrees celsius:')),
    }

    console.table(measurement)
    const kelvin = measurement.value + 273
    return kelvin;
}

console.log(measureKelvin())