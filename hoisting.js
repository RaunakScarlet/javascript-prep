console.log("varName", varName);// undefine   varname undefine
var varName;//undefine
console.log("varName", varName);//undefine    varname undefine
var varName = "caA";// undefine
console.log("varName", varName);//undefine     varname caA
fn();                                     // hello from fn
function fn() {
    console.log("Hello from fn");// fn       
}
fn();                                    // hello from fn

var fnContainer=function() {
    // undefine
    console.log("I am expression");
}
fnContainer();//                            I am expression