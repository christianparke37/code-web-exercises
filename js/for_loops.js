// returnMultiplicationTable function
 function returnMultiplicationTable(num) {
     timesTable = '';
     for (var i = 1; i < 11; i++) {
         var product = num * i;
     for (let i = 1; i < 11; i++) {
         let product = num * i;
         timesTable += num + " x " + i + " = " + product
         if (i != 10) timesTable += "\n"
         if (i !== 10) timesTable += "\n"
     }
     return timesTable
 }
 @@ -18,7 +18,7 @@ function returnEvenOddMessage(num) {

 // returnTenEvenOddMessages function
 function returnTenEvenOddMessages() {
     let output;
     let output = '';
     for (let i = 0; i < 10; i++) {
         output += returnEvenOddMessage(getRandomInt(20, 200))
         if (i < 9) output += '\n'
 @@ -43,7 +43,7 @@ function returnCountDownFrom100InFives() {
     let output = '';
     for (let i = 100; i > 0; i -= 5) {
         output += i
         if (i != 5) output += '\n'
         if (i !== 5) output += '\n'
     }
     return output
 } 
