//requiring the Word constructor 
//and the inquirer npm package
var Word = require("./word.js");
var inquirer = require("inquirer");

//an array of words to choose from
var breakfastFoods = ["pancakes", "bacon", "syrup"];

//a variable that will later become our Word object
var food;

//the askQuestion function
var askQuestion = function () {
    //checks to see if there are any guesses remaining
    if (food.remaining > 0) {
        //checks to see if any of the guessed items in the Letter objects in the array are false (as in there are still letters that haven't been guessed)
        if (food.array.filter(e => e.guessed === false).length > 0) {
            //run the inquirer package asking the user to choose a letter
            inquirer
                .prompt([
                    {
                        type: "input",
                        message: "Choose a letter!",
                        name: "guess"
                    }
                ]).then(function (inquirerResponse) {
                    //run the guessCheck function which sends the input to see if the letter has been guessed
                    food.guessCheck(inquirerResponse.guess);
                    //run the guessString function which will return the new string with the letter in it (since the guessCheck changes the guessed to true)
                    food.guessString();
                    //run the askQuestion function again
                    askQuestion();
                });
        } else {
            //if there are no more letters to guess
            console.log("You got it!");
            //rest the game to choose a new word
            gameReset();
        }
    } else {
        //if there are no guesses remaining
        console.log("You lose! Try a new word!");
        //resets the game
        gameReset();
    }
};

//gameReset function resets the game and starts it
function gameReset() {
    //checks to see if there are any items left in the breakfastFoods array
    if (breakfastFoods.length > 0) {
    //a variable to hold the randomly selected word
    var random = breakfastFoods[Math.floor(Math.random() * breakfastFoods.length)];
    //finds the index of the chosen word
    var index = breakfastFoods.indexOf(random);
    //splice the word from the array
    if (index > -1) {
        breakfastFoods.splice(index, 1);
    }
    //a new Word object using the randomly chosen word
    food = new Word(random, 9);
    //running the newWord function which creates all the Letter objects
    food.newWord();
    //running the guessString object which returns the blank spaces
    food.guessString();
    //running the initial askQuestion function for the first input
    askQuestion();
    } else {
        //game over if all words in the array have been chosen
        console.log("Game Over");
    }
}

//starting the game
gameReset();
