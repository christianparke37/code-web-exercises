"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(name) {
    return "Hello, " + name;
}
console.log(sayHello("Chris"))

// Daniel had this in the walkthru
// function sayHello(name) {
//     var message = "Hello, " + name + "!";
//     return message;
// }
/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
var helloMessage = sayHello("Chris");
console.log(helloMessage)

// Daniel had this in the walkthru
// var helloMessage = sayHello("Chris");
//     console.log(helloMessage)
/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
var myName = sayHello("Chris")
console.log(myName)
// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
var random = Math.floor((Math.random() * 3) + 1);
function isTwo(num) {
    var answer = num === 2
    return answer
}
console.log(isTwo(random));

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
//
// function calculateTip(num){
//     return = .20
// }
// EatBill
// var bill =
function calculateTip(tip,bill){
    var tipPercentage = Number(tip/100);
    var mealAmount = Number(bill)
    var tipAmount = (mealAmount * tipPercentage).toFixed(2);
    return(tipAmount);
}
console.log(calculateTip(20,50))

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

var questionBill = "May I ask how much your bill?";
var billAnswer = prompt(questionBill);
var percentageTipQuestion = "What percentage you like to tip?";
var percentageTipAnswer = prompt(percentageTipQuestion);
var suggestedTip = (billAnswer/100 * percentageTipAnswer)
alert("Then you should tip $" +  suggestedTip);

// Daniel
// const calculateTip = function (tipPercentage, billTotal) {
//     var tipAmount = tipPercentage * billTotal;
//     return tipAmount;
//     return tipPercentage * billTotal;
//     console.log(calculateTip (tipPercentage .20, billTotal 20));
//     console.log(calculateTip (tipPercentage .25 billTotal 25.50));
//     console.log(calculateTip (tipPercentage .15 billTotal 33.42))''
// }

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
        // function applyDiscount (originalPrice, discountPe) {
        var originalPriceQuestion = "How much was the original price?";
        var originalPriceAnswer = prompt(originalPriceQuestion);
        var discountPercentQuestion = "How much is the discount?";
        var discountPercentAnswer = prompt(discountPercentQuestion);
        var applyDiscount = (originalPriceAnswer - (originalPriceAnswer/100) * discountPercentAnswer);
        alert("Your final price, after the discount, is " +applyDiscount)

        function applyDiscount1 (op,dp){
        var discounted = (op -(dp/100) * op);
        console.log(discounted);
        return discounted;
        }

        var myresult = applyDiscount1(100,20);
        console.log("After the discount, the final price is " + myresult)

//     var discountPercent = Number(dp/100);
//     var originalPrice= Number(op)
//     var applyDiscount = (discountPercent * originalPrice.toFixed(2);
//     return(applyDiscount);
// }
// alertg(calculateTip(20,50))
//
// f