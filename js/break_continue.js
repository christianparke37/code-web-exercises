
// queryUser function
function queryUser() {
    let num
    while (true) {
        num = prompt("Please enter an odd number between 1 and 50.")
        if (isValidOddNumber(num) && num >= 1 && num <= 50) break
        alert('Invalid entry:\n' +
            num + ' is not an odd number between 1 and 50.')
    }
    return(getOddNumbers(num))
}

// isValidOddNumber Function
function isValidOddNumber(num) {
    if (isNaN(num)) return false
    num = Number(num)
    if (!Number.isInteger(num)) return false
    return (num % 2 === 1)
}

// getOddNumbers function
function getOddNumbers(skip) {

    // validate inputs
    if (isNaN(skip))
        return 'Error: The skip value must be a number.'
    skip = Number(skip) // Make sue it's not in quotes
    if (!Number.isInteger(skip)) return "Error: The skip value must be an integer.";
    if (skip < 1 || skip > 50) return "Error: The skip value is outside of the range.";
    if (skip % 2 !== 1) return "Error: The skip value must be an odd number.";

    // process data
    let output = 'Number to skip is: ' + skip + '\n\n'
    for (let i = 1; i < 50; i += 2) {
        if (i === skip) {
            output += 'Yikes! Skipping number: ' + skip + '\n'
            continue
        }
        output += i
        if (i < 49) output += '\n'
    }
    return output
}