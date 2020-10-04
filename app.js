// import functions and grab DOM elements

import { gamePlay } from './utils.js';

const userInput = document.getElementById('user-input');
const submitButton = document.getElementById('submit-button');
const resetButton = document.getElementById('reset-button');
const messDisplay = document.getElementById('message-display');
const tryAgain = document.getElementById('tryAgain');



// initialize state
let totalGuesses = 4;
let compGuess = Math.ceil(Math.random() * 20);



// set event listeners to update state and DOM
submitButton.addEventListener('click', () => {

    const userNum = userInput.value;

    
    const result = gamePlay(userGuess, compGuess);
    
    
//I want this to decide between the computer chosen number, and the number chosen
//by the user and print a response of win, too high, or too low
    if (userNum === compGuess) {
        totalGuesses++;
        messDisplay.textContent = 'Congratulations, You Win!!';
         } if (userNum > compGuess) {
         totalGuesses++;
         messDisplay.textContent = 'Sorry, too high...';
         } if (userNum < compGuess) {
             totalGuesses++;
             messDisplay.textContent = 'Sorry, too low...'
         }

