var Car = /** @class */ (function () {
    function Car() {
        this.autoRepair = false;
        this.autoDisable = false;
        this.engineType = '';
    }
    return Car;
}());
var CarBuilder = /** @class */ (function () {
    function CarBuilder() {
        this.car = new Car();
    }
    CarBuilder.prototype.enableAutoDisable = function (status) {
        this.car.autoDisable = status;
        return this;
    };
    CarBuilder.prototype.enableAutoRepair = function (status) {
        this.car.autoRepair = status;
        return this;
    };
    CarBuilder.prototype.changeEngine = function (engine) {
        this.car.engineType = engine;
        return this;
    };
    CarBuilder.prototype.build = function () {
        return this.car;
    };
    return CarBuilder;
}());
var car = new CarBuilder();
var advancedCar = car.enableAutoDisable(true).enableAutoRepair(true).changeEngine('V8').build();
console.log(advancedCar);
