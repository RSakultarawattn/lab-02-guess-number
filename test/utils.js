
export function gamePlay(userGuess, compGuess) {

    if(userGuess === compGuess) {
        return 0;
    
    }
    if (userGuess < compGuess) {
        return -1;
    }
    if (userGuess > compGuess) {
        return 1;
    }
}


    