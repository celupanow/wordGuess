//requiring the letter.js and the Letter constructor
var Letter = require("./letter.js");

//the Word constructor takes in the randomly selected word
function Word(word, remaining) {
    //variable that holds the word
    this.word = word,
    //variable that holds the guesses remaining
    this.remaining = remaining,
    //an empty array that will hold all of the Letter objects
    this.array = [],
    //this function creates new Letter objects for each letter in the word and pushes them to the empty array
    this.newWord = function (item, guessed) {
        for (var i = 0; i < this.word.length; i++) {
            this.array.push(new Letter(word[i], false));
        }
    },
    //this function runs every letter through the toString function from the Letter constructor
    //it pushes the results of that function to an empty array
    //and then joins the array together to form the word
    this.guessString = function () {
        var y = [];
        for (var x = 0; x < this.array.length; x++) {
            y.push(this.array[x].toString());
        }
        console.log(y.join(" "));
    },
    //this function takes in the user input - the letter they are guessing
    //and runs it through the check function from the Letter constructor
    //to check if the letter has been guessed and change the boolean accordingly
    this.guessCheck = function (input) {
        for (var z = 0; z < this.array.length; z++) {
            this.array[z].check(input);
        }
        //this checks to see if the guessed letter is in the array
        if (this.array.filter(e => e.item === input).length > 0) {
            //if it is, it displays correct and the remaining guesses
            console.log("Correct!");
            console.log("Guesses Left: " + this.remaining);
        } else {
            //if it isn't, it displays try again and decrements the guesses remaining
            console.log("Try again!");
            this.remaining--;
            console.log("Guesses Left: " + this.remaining);
        }
    }
};

module.exports = Word;