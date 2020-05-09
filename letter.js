
//Letter constructor that passes "item", which is the letter itself and "guessed" which is a boolean
function Letter(item, guessed) {
    //this variable holds the letter
    this.item = item,
    //this boolean states whether the letter has been guessed or not
    this.guessed = guessed,
    //this function returns a string based on whether the letter has been guessed
    this.toString = function () {
        if (this.guessed === true) {
            return item;
        } else {
            return "_";
        }
    },
    //this function changes the boolean to true when the guessed letter is in the word
    this.check = function (input) {
        if (input === this.item) {
            this.guessed = true;
        }
    }
};

module.exports = Letter;
