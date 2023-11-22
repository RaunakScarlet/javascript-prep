// Currying is a function that takes one argument at a time and returns a new function expecting the next argument. It is a conversion of functions from callable as f(a,b,c)into callable as f(a)(b)(c).

// Basically Currying doesn’t call a function. It just transforms a function. They are constructed by chaining closures by immediately returning their inner functions simultaneously.

// function f(a, b) {
//     return "Works";
// }
function f(a) {
    return function (b) {
        return "works"
    }
}
console.log(f(1)(2));


//  convert this into curried function
// const add = (a, b, c) => {
//     return a + b + c;
// };

function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
console.log(add(1)(2)(3));


/*Straightforward and time-taking solution*/
// const sum = function(a) {
//     return function(b) {
//         return function(c) {
//             return function(d) {
//                 ...
//                 ...
//                 ...
//                 return a + b + c + d + ... n;
//             }
//         }
//     }
// }

const sum = function (a) {
    return function (b) {

        return b ? sum(a + b) : a;
    //     if (b) {
    //        return sum(a+b)
    //     } else {
    //         return a;
    //    }
    }
}

console.log(sum(1)(2)(3)(4)(5)(7)());