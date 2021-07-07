class Car {
    addA() {
        console.log('A has added success')
    }

    addB() {
        console.log('B has added success')
    }

    addC() {
        console.log('C has added success')
    }

    addD() {
        console.log('D has added success')
    }
    //and more logic functions
}

class CarFacade {
    private car: Car
    constructor(car: Car) {
        this.car = car
    }

    assembleCar() {
        this.car.addA()
        this.car.addB()
        this.car.addC()
        this.car.addD()
    }
}

let car = new CarFacade(new Car())
car.assembleCar() //or car = car.assembleCar() if you use Javascript