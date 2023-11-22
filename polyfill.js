// A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.


//es6 map
let arr = [1, 2, 3, 4, 5];
// let mapArr = arr.map((x) => x * x);
// console.log(arr, mapArr);

//polyfills for map
function callback(i) {
    return i * i;
}
function mapPoly(arr,callback) {
    let newArr = [];
    for (var i = 0; i < arr.length; i++){
        newArr.push(callback(arr[i]));
    }
    return newArr;
}
console.log(arr, mapPoly(arr, callback));


// regular filter es6
let filterArr = arr.filter((x) => x % 2 === 0)
console.log(arr, filterArr);

// polyfill filter
function cb(x) {
    if (x % 2 === 0) return x;
    
}
function filterPoly(arr, cb) {
    let newFilterArr = [];
    for (var i = 0; i < arr.length; i++){
        if (cb(arr[i])) {
            newFilterArr.push(arr[i]);
       };

    }
    return newFilterArr;
}

console.log(arr, filterPoly(arr, cb));


// reduce es6
let redArr = arr.reduce((acc, x) => acc + x, 0)
console.log(arr, redArr);

//polyfill reduce

function c(sum, x) {
    return sum + x;
}
function redPoly(arr, c,y) {
    let sum = y;
    for (let i = 0; i < arr.length; i++){
        sum= c(sum, arr[i]);
    }
    return sum;
}
console.log(arr,redPoly(arr,c,0));