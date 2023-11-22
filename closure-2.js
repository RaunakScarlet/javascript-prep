// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

function add(a) {
    
    function display() {
        console.log(a);
    }
    return display;
}
// let b=add('a');
// b();

let b = add('a')();



// ƒ display() {
//         console.log(a);
//     }