// Impure functions

let a = 5;
function fn(b) {
    console.log(a+b);
}
fn(3);

// fn is dependent on variable "a" which make it impure as it can give multiple output with same input

// to make it pure....pass "a" argument with fn

function fun(c,d) {
    console.log(c+d);
}
fun(3, 6);
// this is pure with side effects(console.log())

// pure function without side effects
function func(c, d) {
    return c + d;
}


console.log(func(3, 6));