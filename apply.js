// same like call just passing the parameter in array;


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

address.apply(person1, ["Muzaffarpur", "India"]);
address.apply(person2,[ "Mohali", "India"]);

