// import functions and grab DOM elements

import { compareNumbers } from './utils.js';

const userInput = document.getElementById('user-input');
const submitButton = document.getElementById('submit-button');
const resetButton = document.getElementById('reset-button');
const messDisplay = document.getElementById('message-display');
const tryAgain = document.getElementById('tryAgain');



// initialize state
let totalGuesses = 4;
let compNum = Math.ceil(Math.random() * 20);
let totalWin = 0;



// set event listeners to update state and DOM
submitButton.addEventListener('click', () => {

    const userNum = Number(userInput.value);

    totalGuesses--;
    const result = compareNumbers(userNum, compNum);
    
    guessesRemaining.textContent = totalGuesses;
//I want this to decide between the computer chosen number, and the number chosen
//by the user and print a response of win, too high, or too low

if (result === 0) {
    totalGuesses++;
    messDisplay.textContent = 'Congratulations, You Win!!';
     } if (result === 1) {
     totalGuesses++;
     messDisplay.textContent = 'Sorry, too high...';
     } if (result === -1) {
         totalGuesses++;
         messDisplay.textContent = 'Sorry, too low...'
     }