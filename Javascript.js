
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

//Objects
let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax

let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};

// get property values of the object:
alert( user.name ); // John
alert( user.age ); // 30
delete user.age;

let user = { name: "John", age: 30 };
alert( "age" in user ); // true, user.age exists. keyword in
alert( "blabla" in user ); // false, user.blabla doesn't exist

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};
//for in looop used in ojects loop through all porperties
for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}

//Object Order
let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};
for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}

let user = {
  name: "John",
  surname: "Smith"
};
user.age = 25; // add one more
// non-integer properties are listed in the creation order
for (let prop in user) {
  alert( prop ); // name, surname, age
}
//fixes order for number inlcuding +
let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA"
};
for (let code in codes) {
  alert( +code ); // 49, 41, 44, 1
}

//empty object
let user={};
user.name="John"; //adds john yo name property
user.name="Pete";
delete user.name; //removes property name

let schedule = {};
function isEmpty(obj){
 for(let key in obj){ //if somethign in obj return false;
    return false;   
 }
    return true;
}
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // fals

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum=0;
for(let key in salaries){
 sum +=salaries[key];   
}


// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
function multiplyNumeric(obj){
 for(let key in obj){
  if(typeof obj[key]=='number')
      obj[key]*=2;
 }
}
multiplyNumeric(menu);
// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

//A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.
//When an object variable is copied, the reference is copied, but the object itself is not duplicated.
let user = { name: "John" };
let admin = user; // copy the reference

let a = {};
let b = a; // copy the reference
alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true

let user = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2); //assign keyword used to add to object
// now user = { name: "John", canView: true, canEdit: true }
alert(user.name); // John
alert(user.canView); // true
alert(user.canEdit); // true

let clone = structuredClone(user); //structuredCLone clones all properties of an obejct into new object

//When we write our code using objects to represent entities, that’s called object-oriented programming, in short: “OOP”.
//this keyword
let user = {
  name: "John",
  age: 30,
  sayHi() {
    alert(this.name); // "this" is the "current object"
  }
};

let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

//calculator 
let calculator = {
  sum() {
   return this.a+this.b;
  },
  mul() {
   return this.a*this.b;
  },
  read() {
   this.a=+propmt('a?',0);
   this.a=+propmt('b?',0);
  }
};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

let user = new User("Jack"); //CONSTRUCTOR FUNCTION
When a function is executed with new, it does the following steps:
A new empty object is created and assigned to this.
The function body executes. Usually it modifies this, adds new properties to it.
The value of this is returned.

function User(name) {
  // this = {};  (implicitly)
  // add properties to this
  this.name = name;
  this.isAdmin = false;
  // return this;  (implicitly)
}

let user = new User("Jack") //same as
let user = {
  name: "Jack",
  isAdmin: false
};

function SmallUser() {
  this.name = "John";
  return; // <-- returns this
}
alert( new SmallUser().name );  // John


// Create an object and an array which we will use in our facebook exercise. 
// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
{
	username: "andrei",
	password: "supersecret"
}

// 2. Create an array which contains the object you have made above and name the arry "database"
var database = [
	{
		username: "andrei",
		password: "supersecret"
	}
];
// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];









