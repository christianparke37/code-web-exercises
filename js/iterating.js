(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    var names = [
        'Mando Salazar',
        'Audie',
        'Blossom',
        'Caleb'
    ];
    console.log('There are ' + names.length + ' in this array');
    console.log(names[3]);
    console.log(names[2]);
    console.log(names[1]);
    console.log(names[0]);

    // for (var i = names.length - 1; i >= 0; i--); {
    //     console.log(names[i]);
    // }

    for (var i = 0; i < names.length; i++); {
        console.log('The name is ' + i + ' is: ' + names[i]);
        // console.log(names[i]);
    }
    // names.forEach(function(item, index) {
    //     console.log('The name is ' + i + ' is: ' + shapes);
    // })

    // students.forEach(function(student, index)); {
    //     console.log((index +1) + ":" + student);
    // }
    // var callback = function(student, index, array) {
    //     console.log ((index + 1) + ": " + student);
    // }
    // students.forEach(callBack);
    // /**

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
 var first = function(arr) {
     return [0];
     var second = function(arr) {
         return [1];
     var last = function(arr) {
         return arr[arr.length-1];
         }
     }
     }

})();