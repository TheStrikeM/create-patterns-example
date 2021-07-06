class Car {
    protected price: number;
    protected desc: string;

    constructor() {
        this.price = 100
        this.desc = 'Ultra Default Car'
    }

    getPrice() {
        return this.price
    }

    getDescription() {
        return this.desc
    }
}

class BMW extends Car {
    constructor() {
        super();
        this.price = 200
        this.desc = "Ultra BMW Car"
    }
}

class Lamborghini extends Car {
    constructor() {
        super();
        this.price = 2000
        this.desc = "Ultra Lamborghini Car"
    }
}

class AutoPilot {
    private car: Car
    constructor(car: Car) {
        this.car = car
    }

    getPrice() {
        return this.car.getPrice() + 100
    }

    getDescription() {
        return `${this.car.getDescription()} with AutoPilot`
    }
}

let bmw: any = new BMW()
let lamborghini: any = new Lamborghini()

bmw = new AutoPilot(bmw)

console.log(bmw.getPrice(), bmw.getDescription())
console.log(lamborghini.getPrice(), lamborghini.getDescription())
