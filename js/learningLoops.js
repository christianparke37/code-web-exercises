
var returnMultiplicationTable = function(num){
    var output = "";
    for (var i=1;i <= num;i++) {
         output += num + " x " + i + " = " + (num * i) + '\n';
    }
    return output;
}
console.log(returnMultiplicationTable(7));
