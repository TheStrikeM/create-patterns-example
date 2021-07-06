var Primate = /** @class */ (function () {
    function Primate(name, iq) {
        this.name = name;
        this.iq = iq;
    }
    Primate.prototype.copy = function () {
        return new Primate(this.name, this.iq);
    };
    return Primate;
}());
var defaultPrimate = new Primate('Порошенко', 20);
var copiedPrimate1 = defaultPrimate.copy();
copiedPrimate1.name = "Лукашенко";
var copiedPrimate2 = defaultPrimate.copy();
console.log(copiedPrimate1);
console.log(copiedPrimate2);
