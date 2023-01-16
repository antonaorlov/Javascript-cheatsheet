
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






