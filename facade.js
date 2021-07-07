var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.addA = function () {
        console.log('A has added success');
    };
    Car.prototype.addB = function () {
        console.log('B has added success');
    };
    Car.prototype.addC = function () {
        console.log('C has added success');
    };
    Car.prototype.addD = function () {
        console.log('D has added success');
    };
    return Car;
}());
var CarFacade = /** @class */ (function () {
    function CarFacade(car) {
        this.car = car;
    }
    CarFacade.prototype.assembleCar = function () {
        this.car.addA();
        this.car.addB();
        this.car.addC();
        this.car.addD();
    };
    return CarFacade;
}());
var car = new CarFacade(new Car());
car.assembleCar(); //or car = car.assembleCar() if you use Javascript
