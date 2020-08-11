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

var salary = (+googlehours * googleRate) + (+facebookhours * facebookRate) + (+amazonhours * amazonRate)

console.log("You made $" + salary + " this week!");