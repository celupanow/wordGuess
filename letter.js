
function Letter(item, guessed) {
    this.item = item,
    this.guessed = guessed,
    this.toString = function () {
        if (this.guessed === true) {
            return item;
        } else {
            return "_";
        }
    },
    this.check = function (input) {
        if (input === this.item) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;
