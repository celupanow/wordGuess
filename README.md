<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url] [![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url] [![Issues][issues-shield]][issues-url] [![LinkedIn][linkedin-shield]][linkedin-url]

 
<h3 align="center">Word Guess</h3>
<p align="center">
This node application is a word guess game. It selects a random word from an array, then allows the user to input their guesses.
<br />
<br />
<a href="https://drive.google.com/file/d/1hwAIlh1Q5c0y5c-ECf5cDcTccWEMtzMA/view">View Demo</a>
·
<a href="https://github.com/celupanow/wordGuess/issues">Report Bug</a>
·
<a href="https://github.com/celupanow/wordGuess/issues">Request Feature</a>

</p>

</p>
<!-- TABLE OF CONTENTS -->

## Table of Contents

* [About the Project](#about-the-project)
	* [Built With](#built-with)
* [Getting Started](#getting-started)
	* [Prerequisites](#prerequisites)
	* [Installation](#installation)
* [Roadmap](#roadmap)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

 
<!-- ABOUT THE PROJECT -->

## About The Project
![News Scraper](./public/images/newscraper-pacific-journey.png "News Scraper")



### Built With
* [HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Materialize](https://materializecss.com/)

<!-- GETTING STARTED -->

## Getting Started
To get a local copy up and running follow these simple steps.


### Prerequisites

You will need to have the lastest version of npm installed.
* npm
```sh
npm install npm@latest -g
```
  
### Installation

1. Clone the repo

```sh

git clone https://github.com/celupanow/wordGuess.git

```
2. Install the NPM packages
```sh
npm install
```

<!-- ROADMAP -->

## Roadmap

  

See the [open issues](https://github.com/celupanow/wordGuess/issues) for a list of proposed features (and known issues).

<!-- CONTACT -->

## Contact

  

Christina Lupanow - christina@christinalupanow.com

  

Project Link: [https://celupanow.github.io/wordGuess/](https://celupanow.github.io/wordGuess/)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

  

* [GitHub Pages](https://pages.github.com)
* [Time](https://time.com)

<!-- MARKDOWN LINKS & IMAGES -->

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/celupanow/wordGuess.svg?style=flat-square

[contributors-url]: https://github.com/celupanow/wordGuess/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/celupanow/wordGuess.svg?style=flat-square

[forks-url]: https://github.com/celupanow/wordGuess/network/members

[stars-shield]: https://img.shields.io/github/stars/celupanow/wordGuess.svg?style=flat-square

[stars-url]: https://github.com/celupanow/wordGuess/stargazers

[issues-shield]: https://img.shields.io/github/issues/celupanow/wordGuess.svg?style=flat-square

[issues-url]: https://github.com/celupanow/wordGuess/issues

[license-shield]: https://img.shields.io/github/license/celupanow/wordGuess.svg?style=flat-square

[license-url]: https://github.com/celupanow/wordGuess/blob/master/LICENSE.txt

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555

[linkedin-url]: https://linkedin.com/in/celupanow

[product-screenshot]: images/screenshot.png



# wordGuess
This node application is a word guess game. It selects a random word from an array, then allows the user to input their guesses. 

No working link because there is no actual HTML or interactive DOM.

## Objectives

 - Use constructors for the words and the letters guessed.
 - Choose a random word and allow the user to guess the word.
 - Display if the guess was correct or incorrect.
 - Keep track of remaining guesses.
 - Use the inquirer npm package to receive input.
 
## How It Works
When the application is run, it starts by choosing a word from an array and then removing that word from the array so it can't be guessed again. It displays the letters as a series of blanks. Then it asks the user to input a letter. If the letter is correct, it puts the letter in the correct position within the displayed blanks. If the letter is incorrect, it decreases the users remaining guesses. If the user runs out of guesses, it will give them a new word. If the user guesses the word, it will give them the next word. If the user has gone through all of the words in the array, the game is over.

## Demonstration Video
https://drive.google.com/file/d/1hwAIlh1Q5c0y5c-ECf5cDcTccWEMtzMA/view

## Technologies

 - JavaScript
 - node.js
 - inquirer

<!--stackedit_data:
eyJoaXN0b3J5IjpbOTg4NTE5ODM3LC0xNjQxNTI2MDY3LC0xOT
g3MDkwMzk2XX0=
-->