console.log('hello world');
function revStr(str) {
    var revString = "";
 
    for (var i = str.length - 1; i >= 0; i--) { 
        revString += str[i]; 
    }
    return revString; 
}
 
console.log(revStr('abcd'));

test