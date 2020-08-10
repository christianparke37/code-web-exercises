"use strict";

console.log("Hello from JSwithHTML.js external file");

var suprise = "Hello!!!!!";
console.log(suprise);

console.log("Continuing on...")
alert(suprise);

var question = "Do you want to continue?";
var answer = confirm(question);
console.log("answer="+answer);

var question2 = "What is your sign?"
// if user hits cancel, the value is null* */
var answer2 = prompt(question2);
console.log(answer2)

var question3 = "What is your favorite number?"
var answer3 = prompt(question3);
console.log(answer3);
console.log(typeof answer3);
