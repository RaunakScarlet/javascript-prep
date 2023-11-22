let person1 = {
    name: "raunak",
    age: 21,

    show: function () {
        console.log(this.name + " is of " + this.age + " years old");
    },
};

let person2 = {
    name: "scarlet",
    age: 20,
};
// inherit properties from other object
person1.show();
person1.show.call(person2);

let address = function (city, country) {
    console.log(this.name + " lives in " + city + ", " + country);
};
// this will not call the address function bcz bind stores the function

address.bind(person1, "Muzaffarpur", "India");
address.bind(person2, "Mohali", "India");
// for calling
address.bind(person1, "Muzaffarpur", "India")();
// or
let bindAddress = address.bind(person2, "Mohali", "India");
bindAddress();

// don't pass arguments in array like apply . it will be same like call 