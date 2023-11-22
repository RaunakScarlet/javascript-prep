let person1 = {
    name: "raunak",
    age: 21,
    
    show: function () {
        console.log(this.name+" is of "+this.age+" years old");
    }
}

let person2= {
    name: "scarlet",
    age: 20,
};
// inherit properties from other object
person1.show();
person1.show.call(person2);


// without parameters
let quality = function () {
    console.log(this.name + " is awsm");
}

quality.call(person1);
quality.call(person2);
// with parameters
let address = function (city,country) {
    console.log(this.name + " lives in "+city+ ", "+country);
};

address.call(person1, 'Muzaffarpur', 'India')
address.call(person2, "Mohali", "India");

