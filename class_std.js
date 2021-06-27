var Car = /** @class */ (function () {
    function Car(model, doors, isElectric) {
        this.model = model;
        this.doors = doors;
        this.isEletric = isElectric;
    }
    Car.prototype.displaymake = function () {
        console.log('this car is ' + this.model);
        console.log('this car has ' + this.doors + ' doors');
        console.log('this is an electric ' + this.isEletric);
    };
    return Car;
}());
var BMW = new Car("BMW5", 4, true);
var Lambo = new Car("Lambo2", 2, false);
BMW.displaymake();
Lambo.displaymake();
var myCar = {
    model: "BMW",
    make: "BMWi8",
    display1: function () {
        console.log("This is" + myCar.make + " car. model :" + myCar.make);
    }
};
myCar.display1();
