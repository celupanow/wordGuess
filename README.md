# wordGuess
This node application is a word guess game. It selects a random word from an array, then allows the user to input their guesses. 



## Objectives

 - Use constructors for the words and the letters guessed.
 - Choose a random word and allow the user to guess the word.
 - Display if the guess was correct or incorrect.
 - Keep track of remaining guesses.
 - Use the inquirer npm package to receive input.
 
## How It Works
When the application is run, it starts by choosing a word from an array and then removing that word from the array so it can't be guessed again. It displays the letters as a series of blanks. Then it asks the user to input a letter. If the letter is correct, it puts the letter in the correct position within the displayed blanks. If the letter is incorrect, it decreases the users remaining guesses. If the user runs out of guesses, it will give them a new word. If the user guesses the word, it will give them the next word. If the user has gone through all of the words in the array, the game is over.

## Technologies

 - JavaScript
 - node.js
 - inquirer

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE5ODcwOTAzOTZdfQ==
-->