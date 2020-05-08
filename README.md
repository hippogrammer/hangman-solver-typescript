# Hangman Solver Class
Written in typescript, cuz type safety and also why not ???
## Purpose
The HangmanSolver class will take an array of words to run the hangman puzzle check. The _solve(puzzle)_ method will return an array of words that match the puzzle criteria passed in.
## Class Members
#### Variables
* __dict: _string[]___ - string type array, contains list of words to run _puzzle_ match on.

##### Methods
* __constructor(dict: string[]): _void___ - will initialize the __dict__ class property with what's passed into the constructor.
* __solve(puzzle: string): _string[]___ - will take in a string parameter _puzzle_ to match the words in __dict__ array property. Will return a string array with words that match the _puzzle_, if any.