let obj1 = {
    name: 'raunak',
    address:"Bihar"
}

let obj2 = obj1;
obj2.name = "scarlet"

console.log(obj1, obj2);
//{ name: 'scarlet', address: 'Bihar' } { name: 'scarlet', address: 'Bihar' }   mutates obj1 also

// how to immutates
// 2 ways i. Object.assign ii. spread operator

let obj3 = {
    name: "raunak",
    address: "Bihar",
};

let obj4 = Object.assign({},obj3);
obj4.name = "scarlet";

console.log(obj3, obj4);
// { name: 'raunak', address: 'Bihar' } { name: 'scarlet', address: 'Bihar' }

let obj5 = {
    name: "raunak",
    address: "Bihar",
};

let obj6 = {...obj5}
obj6.name = "scarlet";

console.log(obj5, obj6);