var CarAccess = /** @class */ (function () {
    function CarAccess() {
    }
    CarAccess.prototype.open = function () {
        console.log('Success opened');
    };
    CarAccess.prototype.close = function () {
        console.log('Success closed');
    };
    return CarAccess;
}());
var SecurityMegaSuperUltraProxyPatternSystem = /** @class */ (function () {
    function SecurityMegaSuperUltraProxyPatternSystem(car) {
        this.car = car;
    }
    SecurityMegaSuperUltraProxyPatternSystem.prototype.authentificate = function (password) {
        return password === 'proxy';
    };
    SecurityMegaSuperUltraProxyPatternSystem.prototype.open = function (password) {
        if (this.authentificate(password)) {
            this.car.open();
        }
        else {
            console.log('Access denied');
        }
    };
    return SecurityMegaSuperUltraProxyPatternSystem;
}());
var car = new SecurityMegaSuperUltraProxyPatternSystem(new CarAccess());
car.open('proxy');
car.open('neproxy');
