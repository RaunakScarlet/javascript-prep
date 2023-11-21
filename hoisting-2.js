console.log("line no.1", varName); // 1. line no.1 undefine
var varName = 10;// undefine    //10

function b() {
    // fn b
    console.log("line no.5", varName); //4. line no. 5, 10
}
console.log("line no.7", varName);// 2. line no. 7, 10
 
function fn() {
    //fn fn
    console.log("line no.10", varName); //  3. line no. 10, undefine
    var varName = 20; //undefine      20
    b();
    console.log("line no.13", varName); // 5. line no. 13, 20
}
fn();