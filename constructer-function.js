function Car(brand,model, color) {
    (this.Model = model), (this.Brand = brand), (this.Color = color);
    this.display = function () {
        console.log(
            `the car is ${this.Brand} of model ${this.Model} with ${this.Color} color `
        );
    };
}
let car1 = new Car("bmw", "s6", "black");
car1.display()
