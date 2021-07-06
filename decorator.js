var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car() {
        this.price = 100;
        this.desc = 'Ultra Default Car';
    }
    Car.prototype.getPrice = function () {
        return this.price;
    };
    Car.prototype.getDescription = function () {
        return this.desc;
    };
    return Car;
}());
var BMW = /** @class */ (function (_super) {
    __extends(BMW, _super);
    function BMW() {
        var _this = _super.call(this) || this;
        _this.price = 200;
        _this.desc = "Ultra BMW Car";
        return _this;
    }
    return BMW;
}(Car));
var Lamborghini = /** @class */ (function (_super) {
    __extends(Lamborghini, _super);
    function Lamborghini() {
        var _this = _super.call(this) || this;
        _this.price = 2000;
        _this.desc = "Ultra Lamborghini Car";
        return _this;
    }
    return Lamborghini;
}(Car));
var AutoPilot = /** @class */ (function () {
    function AutoPilot(car) {
        this.car = car;
    }
    AutoPilot.prototype.getPrice = function () {
        return this.car.getPrice() + 100;
    };
    AutoPilot.prototype.getDescription = function () {
        return this.car.getDescription() + " with AutoPilot";
    };
    return AutoPilot;
}());
var bmw = new BMW();
var lamborghini = new Lamborghini();
bmw = new AutoPilot(bmw);
console.log(bmw.getPrice(), bmw.getDescription());
console.log(lamborghini.getPrice(), lamborghini.getDescription());
