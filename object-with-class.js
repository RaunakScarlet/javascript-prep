class Person{
    constructor(name,age) {
        this.Name = name,
            this.age = age;
    }
    display() {
        console.log("my name is ",this.Name," and i am", this.age+" years old");
    }
    
}
let person1 = new Person("raunak",21)
person1.display();

// experincing with classical inheritence
class childPerson extends Person{
    constructor(name) {
         super(name,50);// super must be call before accessing this
        this.Name = name;
    }
    displayChild() {
        console.log("i am from child "+this.Name);
    }
}
let persom2 = new childPerson("happy");
persom2.displayChild();
persom2.display();
console.log(persom2.Name);
