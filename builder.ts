class Car {
    public autoRepair
    public autoDisable
    public engineType

    constructor() {
        this.autoRepair = false
        this.autoDisable = false
        this.engineType = ''
    }
}

class CarBuilder {
    private car: Car

    constructor() {
        this.car = new Car()
    }

    enableAutoDisable(status: boolean) {
        this.car.autoDisable = status
        return this
    }

    enableAutoRepair(status: boolean) {
        this.car.autoRepair = status
        return this
    }

    changeEngine(engine: string) {
        this.car.engineType = engine
        return this
    }

    build() {
        return this.car
    }
}

const car = new CarBuilder()
car.enableAutoDisable(true).enableAutoRepair(true).changeEngine('V8').build()
console.log(car)