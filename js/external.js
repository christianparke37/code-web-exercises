console.log("Hello from external JavaScript");

alert("Welcome to Website!")

var question = "What is your favorite color?";
var response = prompt(question);
alert ("Great, " + response + " is my favorite color, too!");

var littleMermaidDays = prompt("How many days did you rent the Little Mermaid?");
var brotherBearDays = prompt("How many days did you rent the Brother Bear?");
var herculesDays = prompt("How many days did you rent the Hercules?");
var blockBusterBill = (+littleMermaidDays + +brotherBearDays + +herculesDays) *3;
alert("Your total Blockbuster Bill is $ " + blockBusterBill);


var googleRate = 400;
var amazonRate = 380;
var facebookRate = 350;
var googlehours = prompt("How many hours did you work at Google?");
var facebookhours = prompt("How many hours did you work at Facebook?");
var amazonhours = prompt("How many hours did you work at Amazon?");

console.log = (+googlehours * googleRate) + (+facebookhours * facebookRate) + (+amazonhours * amazonRate)

console.log("You made $" + salary.toFixed(2) + " this week!");


var classCapacity = 30;
var registeredStudents = 20;
var classDoesNotConflict = confirm("Press okay if ths does not conflict with your schedule.");
var canEnroll = (classCapacity > registeredStudents) && !classConflicts;

alert("Can she register?" + canEnroll);

// A product offer can be applied only if a perso more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
var offerNOTExpired = confirm("Press okay if offer not expired.");
var numberItems = prompt("How many items are you purchasing?");
var premiumMembership = confirm("Press okay if you are a premium member.");
var offerApplied = (numberItems > 2 || premiumMembership) &&!offerNotExpired;
console.log("Offer applied " + offerApplied);
