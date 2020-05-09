var Word = require("./word.js");
var inquirer = require("inquirer");

breakfastFoods = ["pancakes", "bacon", "syrup", "waffles", "oatmeal", "hashbrowns", "coffee", "overeasy",
"cereal", "bagels", "donuts", "sausage", "toast"];

var random = breakfastFoods[Math.floor(Math.random() * breakfastFoods.length)];

var food = new Word(random);

console.log(food.word);

food.newWord();
food.guessString();



// console.log(food.array);

// for (var f = 0; f < food.array.length; f++) {
//     if (food.array[f].guessed === false) {
//         wordComplete = false;
//     }
// }







var askQuestion = function(){
    if (food.array.filter(e => e.guessed === false).length > 0) {
inquirer   
    .prompt([
        {
            type: "input",
            message: "Choose a letter!",
            name: "guess"
        }
    ]).then(function (inquirerResponse) {
        
            /* vendors contains the element we're looking for */
            food.guessCheck(inquirerResponse.guess);
            food.guessString();
          askQuestion(); 
    });
} else {
    console.log("You got it!");
}

};

askQuestion();




// we only run this code once the last iteration has been completed
// checking the condition before each iteration

// var count = 0; (outside function)

// var askQuestion = function() {
// if (count<5)
// prompts

// then(function(answers) {
// answers.etc
// prorgrammerArray.push(newProgrammer);
// increment
// askQuestion(); 
// }

// store each object in an array