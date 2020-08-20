function Checklights (color) {
    var color = prompt("what color is the light?");
    if (color === "red") {
        alert("Stop on Red!")
    }
    else if (color === "green") {
        alert("Proceed through the intersection")
    } else if (color === "yellow") {
        alert("Slow down and proceed with caution")
    } else {
        alert("Light is not working, come to a complete stop and proceed with caution")
    }
}
Checklights("yellow");


var pizzaPreference = prompt("What kind of pizza do you like?");
function startOrder(pizzaPreference) {
    switch (pizzaPreference) {
        case "pineapple and hot sauce":
            return alert("What a coincidence, that's my favorite!")
            break;
        case "cheese":
            return alert("Just plain cheese");
            break;
        case "Ham":
            return alert("Ham is easy to spell and awesome!");
        default:
            return alert(pizzaPreference + " isn't my favorite, but let's order some!");
    }
}
startOrder(pizzaPreference);