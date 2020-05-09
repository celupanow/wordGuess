var Word = require("./word.js");
var inquirer = require("inquirer");

breakfastFoods = ["pancakes", "bacon", "syrup", "waffles", "oatmeal", "hashbrowns", "coffee", "overeasy",
"cereal", "bagels", "donuts", "sausage", "toast"];

var random = breakfastFoods[Math.floor(Math.random() * breakfastFoods.length)];

var food = new Word(random);

console.log(food.word);

food.newWord();

inquirer   
    .prompt([
        {
            type: "input",
            message: "Choose a letter!",
            name: "guess"
        }
    ]).then(function (inquirerResponse) {
        food.guessCheck(inquirerResponse.guess);
    });