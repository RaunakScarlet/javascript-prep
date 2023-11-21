let arr = [1, 2, 3, 4];

let mapArr = arr.map((x) => {
   return  x*x
})
// map return new array
console.log(arr, mapArr);


let filterArr = arr.filter((x) => {
    return x %2=== 0;
});
// filter return new array
console.log(arr, filterArr);


let reduceArr = arr.reduce((acc, x) => {
    return acc + x;
}, 0)

// reduce return new array
console.log(arr, reduceArr);
