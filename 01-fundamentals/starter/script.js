// linking a js file
/*
let js = 'amazing'
if (js === 'amazing') alert('javascript is fun!')

console.log(40 + 8 + 23 - 10);
*/

// values and variables
/*
let firstName = "ezequiel";
let years = 23
console.log(firstName + ' is ' + years + ' old!')
*/

// coding challenge #1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: 
BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀


const height_mark = 1.69
const height_john = 1.95
const weight_mark = 78
const weight_john = 92

let bmi_mark = weight_mark / height_mark**2
let bmi_john = weight_john / height_john**2

console.log(bmi_john, bmi_mark)

let markHigherBMI = bmi_mark > bmi_john

console.log(markHigherBMI)
*/

// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. 
The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀


if(markHigherBMI){
    console.log(`Mark's BMI (${bmi_mark}) is higher than John's! (${bmi_john})`)
} else {
    console.log(`John's BMI (${bmi_john}) is higher than Mark's! (${bmi_mark}))`)
}
*/

// type conversion and coercion
/*
// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear)+18)

console.log(Number('Jonas'))
console.log(typeof 'Jonas')

console.log(String(23),23)

// type coercion
console.log('I am ' + 23 + ' years old')
console.log('23' - '10' - 13) // 0
console.log('23' + '10' + 13) // 231013
console.log('23' - '10' + 13) // 23-10+13 
console.log('23' + '10' - 13) // 2310-13
console.log('23' * '10' / 10) // 23
console.log('23' / '10' * 10) // 23
console.log('10' - '4' - '3' - 2 + '5') // 15
*/

// truthy and falsy values
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('ezequiel'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0
if(money){
    console.log("ahorrá")
} else {
    console.log("agarralapalooza")
}
*/

// equality operators === or ==
/*
const age = '18';
if (age === 18) console.log('18 (strict)') // strict equality operator. no type coercion.
if (age == 18) console.log('18 (loose)') // loosely equality operator. type coercion.

let fav = prompt('numero fav?')
console.log(fav)
console.log(typeof(fav))
if(fav === 13) console.log('nice')

if (fav !== 13) console.log('13 (strict)') // strict equality operator. no type coercion.
if (fav != 13) console.log('13 (loose)') // loosely equality operator. type coercion.
*/

// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. 
Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. 
With this rule, a team only wins if it has a higher score than the other team, and at the same time a score of at least 100 points. 
HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! 
So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. 
Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀

1. promedio
2. comparar y decidir ganador
3. minimo puntaje de 100, si sacan 99 y 98 hay empate.
4. minimo puntaje para empate tambien, 100 puntos.


let avgKoalas = (88+91+110)/3
let avgDolphins = (96+108+89)/3

console.log('koalas = ' + avgKoalas)
console.log('dolphins = ' + avgDolphins)

if(avgKoalas < 100 && avgDolphins < 100){
    console.log('ni vencedores ni vencidos')
} else {
    if(avgKoalas > avgDolphins) console.log('koalas wins')
    if(avgKoalas < avgDolphins) console.log('dolphins wins')
    if(avgDolphins === avgKoalas) console.log('empate')
}
*/

// the switch statement
/*
const day = 'lunes'
switch(day){
    case 'lunes': // day === 'monday'
        console.log('lunes otra vez sobre la ciudad')
        console.log('la gente que ves vive en soledad')
        break;
    case 'martes':
    case "miercoles":
        console.log('avg mitad de semana enjoyer')
        break;
}*/

// the conditional operator
/*
 let age = 17
 // age >= 18 ? console.log('🍷') : console.log('no tomar 🍺')

 const drink = age >= 18 ? 'vino' : 'agua'
 console.log(drink)

 age++;
 const drink2 = age >= 18 ? 'vino' : 'agua'
 console.log(drink2)
 */

 // Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. 
In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. 
It's not allowed to use an if/else statement 😅 
(If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀

1. calcular tip
2. printear string de la cuenta, propina y la suma de estas dos


let check = 275
let tip = (check>=50 && check<=300) ? check*0.15 : check*0.2
console.log(`The bill was ${check}, the tip was ${tip}, and the total value ${check+tip}`)
*/




