// ReferenceError: Alert is not defined in JavaScript

// EXAMPLE 1 - Use `console.log` when outside the browser

console.log('hello');

console.error('an error occurred');

// ------------------------------------------------------------------

// // EXAMPLE 2 - Checking if you are on the browser or the server

// if (typeof window !== 'undefined') {
//   console.log('You are on the browser');
//   // 👉️ can use alert()
// } else {
//   console.log('You are on the server');
//   // 👉️ can't use alert()
// }

// ------------------------------------------------------------------

// // ReferenceError: Prompt is not defined in JavaScript

// // EXAMPLE 3 - Checking if you are on the Browser

// if (typeof window !== 'undefined') {
//   const result = prompt('What is your favorite number?');

//   console.log(result);
// }

// ------------------------------------------------------------------

// // EXAMPLE 4 - Using the prompt() method on the server in Node.js

// // using ES6 import statement
// import createPrompt from 'prompt-sync';

// const prompt = createPrompt();

// const result = prompt('What is your favorite number: ');
// console.log(result);
