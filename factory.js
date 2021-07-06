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
var DefaultEmployee = /** @class */ (function () {
    function DefaultEmployee(price) {
        this.price = price;
    }
    DefaultEmployee.prototype.getPrice = function () { return this.price; };
    return DefaultEmployee;
}());
var FullTime = /** @class */ (function (_super) {
    __extends(FullTime, _super);
    function FullTime() {
        return _super.call(this, 14) || this;
    }
    return FullTime;
}(DefaultEmployee));
var PartTime = /** @class */ (function (_super) {
    __extends(PartTime, _super);
    function PartTime() {
        return _super.call(this, 10) || this;
    }
    return PartTime;
}(DefaultEmployee));
var EmployeeFactory = /** @class */ (function () {
    function EmployeeFactory() {
    }
    EmployeeFactory.prototype.create = function (type) {
        var employee;
        if (type === 'fulltime') {
            employee = new FullTime();
        }
        else if (type === 'parttime') {
            employee = new PartTime();
        }
        employee.type = type;
        return employee;
    };
    return EmployeeFactory;
}());
var EmployeeCreator = new EmployeeFactory();
var fulltimeEmployee = EmployeeCreator.create('fulltime'), parttimeEmployee = EmployeeCreator.create('parttime');
console.log("Fulltime Employee cost " + fulltimeEmployee.getPrice() + "$");
console.log("Parttime Employee cost " + parttimeEmployee.getPrice() + "$");
