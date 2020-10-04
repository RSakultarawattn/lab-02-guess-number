// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { compareNumbers } from '../utils.js';

const test = QUnit.test;

test('This test should return 0 if the user chooses correctly.', (expect) => {
    
    const userGuess = 3;
    const compGuess = 3;

    const expected = 0;
    const actual = compareNumbers(userGuess, compGuess); 

   
    expect.equal(actual, expected);

});


test('This test should return -1 if the user chooses too low.', (expect) => {
    
    const userGuess = 2;
    const compGuess = 3;

    const expected = -1;
    const actual = compareNumbers(userGuess, compGuess); 

   
    expect.equal(actual, expected);

});

test('This test should return 1 if the user chooses too high.', (expect) => {
    
    const userGuess = 3;
    const compGuess = 2;

    const expected = 1;
    const actual = compareNumbers(userGuess, compGuess); 

   
    expect.equal(actual, expected);

});



