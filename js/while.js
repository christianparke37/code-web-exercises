
// powersOfTwo function
function powersOfTwo() {
    let num = 2
    while (num <= 65536) {
        console.log(num)
        num *= 2
    }
}

// sellCones function
function sellCones() {
    var allCones = Math.floor(Math.random() * 50) + 50;
    do {
        var conesWanted = Math.floor(Math.random() * 5) + 1;
        if (conesWanted <= allCones) {
            console.log(conesWanted + " cones sold...");
            allCones -= conesWanted;
        }
        else {
            console.log("Cannot sell you " + conesWanted + " cones I only have " + allCones + "...");
        }
    } while (allCones > 0);
    console.log("Yay! I sold them all!");
}
