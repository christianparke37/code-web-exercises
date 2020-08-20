// var returnMultiplicationTable = function(input) {
//     var a;
//     for (var i = i; i <11; i++);
//     console.log({$input} x $(i) = ${ipnut *i}\n);
// }
//
// for (i=1, i<10, i++)
// console.log("while loop iteration #" + 1);
//     i++


let returnMultiplicationTable = function() {
    let output = "";
    for(let i = 1; i <= 10; i++) {
        output = output + 7 + " x " + i +" = " +(7 * i)+"\n";
        if(i !==10) output += "\n"
    }
    console.log(output)
    return output;
}
console.log(returnMultiplicationTable())
// for (i = 100, i > 0, i = i - 5); {
//     console.log(i);
//
// }
// var i = 1
// while (i <= 50);
//  i % 2 === 1, then b

// returnEvenOddMessage function
function returnEvenMessage(input) {
    if (!Number.isInteger(input)) return input + "is invalid"
    if (input%2=== 0) return input + "is even"
    else return input + "is odd"
}

function returnTenEvenOddMessages() {
    return "odd"
}

function returnTenEvenOddMessages() {
    let output = ''
    for (var i = 0; i <10; i++) {
        output += returnEvenOddMessage(getRandomInt(20,200))
        if(i <9) output += '\n'
    }
}

// utility function
function getRandomInt(min,max) {
        min = Math.ceil(min);
        max = Math.floor(max);

}

//returnNumberSail function
// function returnNumberSail() {
//     let output = ""
//     for (var i = 1; i <=9; i++) {
//         for (var j = 0; j<i; j++) {
//             output +=i
//         }
//         if (i <9) output +- "\n"
//     }
//     return output
// }
//
// 3. Using TDD, create a function named return MultiplicationTable that accepts a number and returns the multiplication table for that number (just multiply by the numbers 1 through 100). For example, returnMultiplicationtable(7) should return a string that when logged to the console should output:
var returnNumberSail = function() {
    let output = "" //makes sure to change output as a string
    for (var i = 1; i <= 9; i++) {
        var row = ("" + i).repeat(i); //what will be in each row
        if (i !== 9) {
            output = output.concat(row + "\n");
        } else {
            // Output = Output + row +’\n’
            // Output += row + ‘\n’ 
            output = output.concat(row); //makes sure last row doesnt have line break
        }
    }
    return output;
}
//countdown by five
function countDownByFive() {
    let output = ""
    for (let i = 100; i > 4; i -=5) {
        output += i
        if (i > 5) output += "\n"
    }
    return output
}

// // (returnTenEvenOddMessages(random).includes('even'))).toBe("boolean");boolean
// .includes()     looks for things in and infront