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
*/

const height_mark = 1.69
const height_john = 1.95
const weight_mark = 78
const weight_john = 92

let bmi_mark = weight_mark / height_mark**2
let bmi_john = weight_john / height_john**2

console.log(bmi_john, bmi_mark)

let markHigherBMI = bmi_mark > bmi_john

console.log(markHigherBMI)
