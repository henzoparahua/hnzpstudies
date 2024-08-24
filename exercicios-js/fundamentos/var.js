var a = 3;
var a = 30;
a = 7;

let b = 4;
b = 40;

// let b = 30;
// Uncaught SyntaxError: Identifier 'b' has already been declare

const c = 3;
const n = null;

// c = 60; var.js:8 
// Uncaught TypeError: Assignment to constant variable.

// const n;
// Uncaught SyntaxError: Missing initializer in const declaration 

console.log(c, a, b, n)
