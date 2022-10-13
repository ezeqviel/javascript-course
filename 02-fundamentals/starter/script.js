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
/*
const calcAge = birthYear => 2022 - birthYear;
const age = calcAge(1998)
console.log(age)

const jubilacion = birthYear => {
    const age = calcAge(birthYear)
    const j = 65 - age;
    return j;
}

console.log(jubilacion(1998))
*/

// Coding Challenge #1
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'),
and then logs the winner to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀

*/
/*
const avg = (score1, score2, score3) => (score1+score2+score3)/3

const scoreKoalas = avg(65,54,4900)
const scoreDolphins = avg(44,23,71)

function checkWinner (avgDolhins, avgKoalas){
    if(avgKoalas >= 2*avgDolhins) console.log('koalas ftw')
    if(avgDolhins >= 2*avgKoalas) console.log('dolphins ftw')
}

checkWinner(scoreDolphins,scoreKoalas); */

// arrays
/*
const friends = ['enzo', 'juanfer', 'pity', 'ivael', 'tercero']
console.log(friends[1])

const years = new Array(1998, 2018)
console.log(years[1])
console.log(friends[friends.length - 3])

friends[4] = `leo` 
// puedo cambiarlo aunque sea const porque los arrays no son primitivos
// lo que no puedo hacer es friends = [`marcelo`, `milton`]
*/

// basic array operations

// Basic Array Operations (Methods)
const friends = ['enzo', 'juanfer', 'pity', 'ivael', 'tercero']

// agregar elementos
const newLength = friends.push('leo');  // agrega al final
console.log(friends);
console.log(newLength);

friends.unshift('julian'); // agrega al principio
console.log(friends);

// quitar elementos
friends.pop(); // ultimo
const popped = friends.pop(); // guarda el elemento popeado
console.log(popped);
console.log(friends);

console.log(`shift`)
friends.shift(); // primero
console.log(friends);

console.log(friends.indexOf('pity'));
console.log(friends.indexOf('enzo'));

friends.push(23);
console.log(friends.includes('ivael'));
console.log(friends.includes('tercero'));
console.log(friends.includes(912));
friends.push('912')


if (friends.includes('912')) {
  console.log('3 a 1');
}