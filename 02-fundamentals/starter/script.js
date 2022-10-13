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
/*
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
*/

// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, 
calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). 
Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀

1. calcTip function
2. array bills
3. array tips
4. array total
*/
/*
const calcTip = bill => bill>=50 && bill <= 300 ? bill*0.15 : bill*0.2
const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(bills)
console.log(tips)
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(total) */

// intro to objects
/*
const eze = {
    name: 'ezequiel',
    age: 23,
    job: 'error 404',
    ultimaComida: 'pollo',
    amigos: ['john', 'paul', 'ringo', 'george']
}

// dot vs bracket notation

console.log(eze)
console.log(eze.name)
console.log(eze['job'])

const nameKey = 'Comida';
console.log(eze['ultima' + nameKey])

//const question = prompt('que queres saber loko? (name, age, job, ultimaComida)')
//console.log(question)
//console.log(eze[question]) // no hacen falta comillas porque prompt lo devuelve como string

eze.ubicacion = 'argentina'
eze['provincia'] = 'buenos aires'
console.log(eze)

// challenge
console.log(`${eze.name} tiene ${eze.amigos.length} amigos, 
y su mejor amigo es ${eze.amigos[1]}`)
*/

// object methods

const eze = {
    name: 'ezequiel',
    age: 23,
    job: 'estudiante',
    ultimaComida: 'pollo',
    amigos: ['john', 'paul', 'ringo', 'george'],
    birthYear: 1998,
    tieneRegistro: true,

    calcAge: function(){ 
        this.age = 2022 - this.birthYear
        return this.age;
    },

    getSummary: function(){
        console.log(`${this.name} tiene ${this.calcAge()} años y es ${this.
            job}. ${this.tieneRegistro ? '' : 'no '} tiene registro.`)
    }
}

console.log(eze.age)
console.log(eze['calcAge'](eze.birthYear))

// challenge
// "eze tiene x años y es. tiene registro."
console.log(eze.getSummary())
