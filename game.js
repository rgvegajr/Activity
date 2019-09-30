// JavaScript source code

//global variables
let birds = ["hawk", "cardinal", "dove", "osprey", "bluejay", "finch", "bald eagle","heron","egret"];  //array of bird names
let gameBird = birds[Math.floor(Math.random() * birds.length)]; //name of bird selected randomly from array
let guessesAvail = guessesRem = birds.length*2;  //f of length of bird name i.e. bird.length*2
let wrongGuesses = []; //array of wrong guesses 
let wins = 0;  //number of wins for display

//objects
let wordGuessGame = {
    init: function () {
        wins = guessesRem = wrongGuesses = 0;
        gameBird = birds[Math.floor(Math.random() * birds.length)];
        guessesAvail = guessesRem = birds.length * 2;
        alert(gameBird);
        alert(guessesRem);
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("guessesRem").innerHTML = guessesRem;
        return;
    },
    reset: function () {
        wins, guessesAvail, guessesRem, wrongGuesses = 0;
    },
    play: function () {
        let guess = document.getElementById("guess");
        //guess.value = guess.value.toUpperCase();
        let goodGuess = gameBird.includes(guess);
        if goodGuess {
            guess = wrongGuesses.pop.guess;
            guessesRem = guessesRem - 1;
            };
        guessesRem = document.getElementById("guessesRem").innerHTML;
        }
    }


}






//calls


wordGuessGame.init();
//document.getElementById("wins").innerHTML = wins;
wordGuessGame.play();
wordGuessGame.reset();
