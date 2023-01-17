
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
//alert automatically converts any value to a string to show it. 
alert("Hello"); //shows message to user wait for them to close it
let value = true;
alert(typeof value); // boolean
value = String(value); // now value is a string "true"
alert(typeof value); // string
let num = Number(str); // becomes a number 123
alert( Boolean("0") ); // true

result = prompt(title, [default]); //2 parameters, default is optional
let age = prompt('How old are you?', 100);
alert(`You are ${age} years old!`); // You are 100 years old!

let isBoss = confirm("Are you the boss?"); //asks if ur boss to user if yes return true, if no then false  
alert( isBoss ); // true if OK is pressed

alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1

alert( null === undefined ); // false
alert( null == undefined ); // true

let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);

for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}

let sum = 0;
while (true) {
  let value = +prompt("Enter a number", '');
  if (!value) break; //break keywoard exits loop
  sum += value;
}
alert( 'Sum: ' + sum );

for (let i = 0; i < 10; i++) {
  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue; //continues breaks current loop and starts new
  alert(i); // 1, then 3, 5, 7, 9
}

let a = 2 + 2;
switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}

//Local variables
function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable
  alert( message );
}
showMessage(); // Hello, I'm JavaScript!
alert( message ); // <-- Error! The variable is local

//Outer variables 
let userName = 'John';
function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}
showMessage(); // Hello, John

//Function expressions is created when the execution reaches it and is usable only from that moment.
let sayHi = function() {
  alert( "Hello" );
};

function sayHi() {   // (1) create
  alert( "Hello" );
}
let func = sayHi;    // (2) copy
func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)

//Callback functions
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
ask(
  "Do you agree?",
  function() { alert("You agreed."); }, //if confirm yes 
  function() { alert("You canceled the execution."); } //if no
);

//Arrow Functions
let sum = (a, b) => a + b;
/* This arrow function is a shorter form of:
let sum = function(a, b) {
  return a + b;
};
*/
alert( sum(1, 2) ); // 3

let sayHi = () => alert("Hello!");
sayHi();

let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};
alert( sum(1, 2) ); // 3

// backtick quotes ` allow to split the string into multiple lines
let str = `
  ECMA International's TC39 is a group of JavaScript developers,
  implementers, academics, and more, collaborating with the community
  to maintain and evolve the definition of JavaScript.
`;



























































