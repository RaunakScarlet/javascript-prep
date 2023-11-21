var a = 10;//undefine 10
console.log("line no. 2", a);  // 1. line no. 2, 10
function fn() {
    //fn
    console.log("line no. 4", a); // 2. line no. 4 undefine
    var a = 20; // undefine 20
    a++; //21
    console.log("line no. 7", a); // 3. line no. 7 21
    if (a) {
        var a = 30;// undefine 30
        a++;//31
        console.log("line no. 11", a);//4. line no. 11 31
    }
    console.log("line no. 13", a);//5. line no. 13 31
}
fn();
console.log("line no. 16", a); //6. line no. 16 10