
// Javascript is made for web pages to be alive, using scripts. No relations to java
// Javascript virtual machines have different engines of v8-Chrome, opera, edge, Spidermonkey-firefox

// Engines work:
// Engine reads script
// Compiles script to machine code
// Machine code runs

// It does not provide low-level access to memory or the CPU
// Node.js supports functions that allow JavaScript to read/write arbitrary files, perform network requests, etc.
// JavaScript on a webpage may not read/write arbitrary files on the hard disk, copy them or execute programs.
// There are ways to interact with the camera/microphone and other devices, but they require a user’s explicit permission.

// Javascript Unique:
// Full integration with HTML/CSS.
// Simple things are done simply.
// Supported by all major browsers and enabled by default.
// Java program inserted inside script 
<script src="/js/script1.js">
    alert( 'Hello, world!' );
  </script>

"use strict" //allows old code to work woth new
(function() {
  'use strict';

  // ...your code here...
})()

let message = 'Hello!'; // define the variable and assign the value
alert(message); // Hello!

let userName; //camalCase

//const – is like let, but the value of the variable can’t be changed.

“dynamically typed”
// no error
let message = "hello";
message = 123456;

alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

//Typeof is an operator to see what type variable is 
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1) Built in object
typeof null // "object"  (2)
typeof alert // "function"  (3)

Example
let name = "Ilya";
// the expression is a number 1
alert( `hello ${1}` ); // hello 1
// the expression is a string "name"
alert( `hello ${"name"}` ); // hello name
// the expression is a variable, embed it
alert( `hello ${name}` ); // hello Ilya

//Alert, Prompt, Confirm
alert("Hello"); //shows message to user wait for them to close it

result = prompt(title, [default]); //2 parameters, default is optional
let age = prompt('How old are you?', 100);
alert(`You are ${age} years old!`); // You are 100 years old!

let isBoss = confirm("Are you the boss?"); //asks if ur boss to user if yes return true, if no then false  
alert( isBoss ); // true if OK is pressed

































