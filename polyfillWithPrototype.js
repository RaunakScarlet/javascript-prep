// this in prototype points to same caller object
Array.prototype.show = function () {
    console.log(this);// this -> Array
}
Array.prototype.myMap = function (cb) {
    let newMap = [];
    for (let i = 0; i < this.length; i++){
        newMap.push(cb(this[i]));
    }
    return newMap;
}
function cb(x) {
    return x * x;
}

Array.prototype.myfilter = function (c) {
    let newfilter = [];
    for (let i = 0; i < this.length; i++){
        if (c(this[i])) {
            newfilter.push(this[i]);
        }
    }
    return newfilter;
}
function c(x) {
    return x % 2 == 1;
}


Array.prototype.myReduce = function (acc, callback) {
    let sum = acc;
    for (let i = 0; i < this.length; i++){
        sum = callback(sum, this[i]);
    }
    return sum;
}
function callback(sum, x) {
    return sum + x;
}


let arr = [1, 2, 3, 4, 5];


arr.show();// [1,2,3]
console.log(arr.myMap(cb));// [ 1, 4, 9, 16, 25 ]
console.log(arr.myfilter(c));// [ 1, 3, 5 ]
console.log(arr.myReduce(0,callback));// 15