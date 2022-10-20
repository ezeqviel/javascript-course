'use strict';
/*
console.log(document.querySelector('.message').textContent)

document.querySelector('.message').textContent = 'Correct Number!'

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 912;

console.log(document.querySelector('.score').value)
document.querySelector('.guess').value = 912
*/

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess)
    
    if (!guess) {
        document.querySelector('.message').textContent = '⛔️ No number!'
    }
})