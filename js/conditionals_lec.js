"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
// code here runs if condition evaluates to true
// }


// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin
var isAdmin = false;
if (isAdmin === true) {
    // Show Navbar
}

//TODO Together: Send a 20% off coupon if its users birthday
var birthday = true;
if (birthday) {
    // Send coupon
}
if (birthday === true) {
    // Send coupon
}

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true
var isRainy = false;
if (isRainy) {
    alert("It's raining");
}

//TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.
/*
var itemCost = 300;
var currentBalance = 300;
if (itemCost <= currentBalance) {
    alert("You have enough money.")
}
*/


//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
/*var numberOfLives = 0;
if (numberOfLives === 0) {
    alert("Sorry, game over");
}*/

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
/*var weather = "snowing"
/*if (weather === "snowing") {
    alert('it\'s snowing')
}*/


//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10
/*var numberInput = 15;
if (numberInput > 10) {
    alert(true);
}*/


//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.
var currentWeather = "raining";

// Named function
/*function checkWeather(weather) {
    console.log(weather);
    if (weather === "snowing") {
        alert("it's snowing!")
    }
}*/
// checkWeather(weather);

// Anonymous function
/*var checkWeatherNamed = function(weather) {
    console.log(weather);
    console.log(weather === "snowing");
    if (weather === "snowing") {
        alert("it's snowing!")
    }
}*/
// checkWeatherNamed(currentWeather);


// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }


// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar
var isAdmin = true;
/*if (isAdmin) {
    alert("showing admin navbar");
} else {
   alert("showing non-admin navbar");
}*/

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"
/*isRainy = true;
if (isRainy) {
    alert("It's raining");
}
else {
    alert("have a nice day!");
}*/

//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"
/*
var numberOfLives = 5;
if (numberOfLives === 0) {
    alert("game over");
} else {
    alert("next level!")
}
*/

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"
/*var weather = "snowing";
if (weather === "snowing") {
    alert("it's snowing!")
}
else {
    alert("check back later for more details!")
}*/


//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"
var numberInput = 11;
/*if (numberInput > 10) {
    alert(true)
    alert("Number is: " + numberInput)
}
else {
    alert("the number is less than 10");
}*/


//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.

/*function checkIfGameIsOver(lives) {
    if (lives <= 0) {
        alert("game over");
    } else {
        alert("next level!")
    }
}*/

// checkIfGameIsOver(-1);


//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"

function areYouOldEnough() {
    // var over13 = confirm("Are you at least 13 years of age?");
    // if (confirm("Are you at least 13 years of age?")) {
    //     alert("You may proceed");
    // } else {
    //     alert("Sorry, you are not able to proceed.")
    // }
     var over13 = confirm("Are you at least 13 years of age?") ? "You may proceed" : "Sorry, you are not able to proceed.";
     alert(over13);
}

// areYouOldEnough();


// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }


// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases
var weather = "snowing";

/*if (weather === "snowing") {
    alert("it's snowing!")
}
// This else if statement does not get executed if the previous statement is satisfied
else if (weather === "raining") {
    alert("it's raining!")
} else {
    alert("have a nice day")
}*/


//TODO Together: refactor the above statement as a function
var checkWeather = function (weather) {
    if (weather === "snowing") {
        alert("it's snowing!")
    } else if (weather === "raining") {
        alert("it's raining!")
    } else {
        alert("have a nice day")
    }
}

// checkWeather("raining")


//TODO:
// 1. Write a function that accepts a string that is a traffic light color as an input.
// 2. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.
function checkLights(color) {
    if (color === "green") {
        alert("Proceed")
    } else if (color === "yellow") {
        alert("Proceed with caution")
    } else if (color === "red") {
        alert("STOP")
    } else {
        alert("Light is not working, come to a complete stop and proceed with caution.")
    }
}

// checkLights("rainbow");


// ================ NESTED STATEMENTS ===============
//TODO Together:
// 1. If user is under 15, they are not eligible for a learners permit, else they are.
// 2. If they are eligible, check age. If they are 15 they are eligible for a learners permit,
// 3. if they are 16 or older and have a permit, they are eligible for license,
// 4. if they are 16 or older and do not have a permit, they are not eligble for a license.
// var age = 16;
// var hasPermit = true;
function validateEligibility(age = prompt("Please enter your age"), hasPermit = confirm("Do you have a permit?")) {
    age = parseInt(age);
    if (age < 15) {
        alert("You are not eligible for a learner's permit.")
    } else {
        if (age === 15) {
            alert("You are eligible for a learner's permit.")
        } else if (age >= 16 && hasPermit) {
            alert("You are eligible for a license.")
        } else if (age >= 16 && !hasPermit) {
            alert("You are not eligible for a license.")
        }
    }
}

// validateEligibility();


// ================ TERNARY STATEMENT ================
//TODO Together: Regular way - rewrite as ternary

// var message;
var success = false;
// var success = "success";

// if (success === "success") {
//     message = "Operation was successful.";
// } else if (success === "failed"){
//     message = "Oops, something went wrong.";
// } else {
//     message = "I don't recognize that operation."
// }
// console.log(message);

//WRITE YOUR TERNARY STATEMENT HERE!
// (success === "success") ? message = "Operation was successful." : (success === "failed") ?  message = "Oops, something went wrong." : message = "I don't recognize that operation";
//
// console.log(message);

// var message = (success) ? "Operation was successful" : "Oops, something went wrong";

// console.log(message);


//TODO: Refactor the following conditional as a ternary

var weather = "sunny";
var weatherMessage;

if(weather === "rainy"){
   weatherMessage = "It's raining!";
} else {
    weatherMessage = "Have a nice day!";
}
// console.log(weatherMessage);

//WRITE YOUR TERNARY STATEMENT HERE!
weatherMessage = (weather === "rainy") ? "It's raining!" : "Have a nice day!";
// console.log(weatherMessage);

// TODO: write a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!".

function checkIfGameIsOver(numberOfLives) {
    alert((numberOfLives === 0) ? "Sorry Game over" : "Next Level!")
}

// checkIfGameIsOver(9)


// =============== SWITCH STATEMENT ================
//TODO Together:

/*TODO: switch (value) {
    case 0:
        // code here for case 0
        break;
    case 1:
        // code here for case 1
        break;
    default:
        // default case is similar to an else
}*/
//
// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);

/*if (pizzaPreference === "pineapple and hot sauce") {
    alert("What a coincidence, that's my favorite!");
} else if (pizzaPreference === "cheese") {
    alert("Just plain cheese? Okay...");
} else if (pizzaPreference === "ham") {
    alert("Ham is easy to spell and awesome!");
} else {
    alert(pizzaPreference + " isn't my favorite, but let's order some!");
}*/
var placedOrder = true;
// switch (placedOrder) {
//     case true:
//         // start order
//         startOrder(pizzaPreference);
//         break;
//     case false:
//         // do nothing
//         break;
// }

function startOrder(pizzaPreference) {
    switch (pizzaPreference) {
        case "pineapple and hot sauce":
            return alert("What a coincidence, that's my favorite!");
        case "cheese":
            return alert("Just plain cheese? Okay...");
        case "ham":
            return alert("Ham is easy to spell and awesome!");
        default:
            alert(pizzaPreference + " isn't my favorite, but let's order some!");
    }
}

// startOrder(pizzaPreference);

var dice = 5;
var message = "";
switch (dice) {
    case 1:
        // do something
        message = "you rolled a " + dice;
        // moving character
        // dealing damage to monster
        break;
    case 2:
        // do something
        message = "you rolled a " + dice;
        // move character
        // heal your character
        break;
    case 3:
        // do something
        message = "you rolled a " + dice;
        break;
    case 4:
        // do something
        message = "you rolled a " + dice;
        break;
    case 5:
        // do something
        message = "you rolled a " + dice;
        break;
    case 6:
        // do something
        message = "you rolled a " + dice;
        break;
}

if (dice === 1) {
    // do something
    message = "you rolled a " + dice;
} else if (dice === 2) {
    // do something
    message = "you rolled a " + dice;
} else if (dice === 3) {
    // do something
    message = "you rolled a " + dice;
} else if (dice === 4) {
    // do something
    message = "you rolled a " + dice;
} else if (dice === 5) {
    // do something
    message = "you rolled a " + dice;
} else if (dice === 6) {
    // do something
    message = "you rolled a " + dice;
}


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.

// Check the variable weather
/*
weather = "sleet";
switch (weather) {
    case "rainy":
        alert("It's raining!");
        break;
    case "sunny":
        alert("It's sunny!");
        break;
    case "snow":
        alert("It's snowing!");
        break;
    default:
        alert("Have a nice day!")
}
*/


//TODO: Rewrite the intersection function from earlier as a switch statement.
function traffic2(color) {
    var color = prompt("What color is the light?")
    switch (color) {
        case "green":
            alert("You may go");
            break;
        case "yellow":
            alert("Slow down to a stop");
            break;
        case "red":
            alert("Stop, do not proceed!");
            break;
        default:
            alert("Light is not working, come to a complete stop and proceed with caution!");
            break;
    }
}
traffic2();

// ================ REVERSE ENGINEERING =================
// Visit each of these links; outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html
