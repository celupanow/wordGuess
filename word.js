var Letter = require("./letter.js");

function Word(word) {
    this.word = word,
        this.array = [],
        this.newWord = function (item, guessed) {
            for (var i = 0; i < this.word.length; i++) {
                this.array.push(new Letter(word[i], false));
            }
            var y = [];
            for (var x = 0; x < this.array.length; x++) {
                y.push(this.array[x].toString());
            }
            console.log(y.join(" "));
        },
        this.guessCheck = function (input) {
            for (var z = 0; z < this.array.length; z++){
                
            }
        }
}

module.exports = Word;