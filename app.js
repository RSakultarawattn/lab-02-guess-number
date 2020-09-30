// import functions and grab DOM elements



const userInput = document.getElementById('user-input')
const submitButton = document.getElementById('submit-button');
const resetButton = document.getElementById('reset-button');
const numGuess = document.getElementById('num-guess');
const messDisplay = document.getElementById('message-display');
const correctAnswer = Math.floor((Math.random() * 20)+1)


// initialize state
let attempts = 0;
let numWins = 0;

// set event listeners to update state and DOM
submitButton.addEventListener('click', () => {

    const guess = Number(numGuess.value);
    attempts++;
    numWins++;
    
    
    if (correctAnswer === guess) { 
        messDisplay.textContent = 'Congratulations, You win!';
    }

    if  (guess < correctAnswer) {
        messDisplay.textContent = 'Sorry, too low...';
    }

    if (guess > correctAnswer)  {
        messDisplay.textContent = 'Sorry, too high...';
    }
    if (numWins 
        
    if (attempts === 4) {
        messDisplay.textContent = 'Sorry, you lose!';
       
    } 
    
    

});

