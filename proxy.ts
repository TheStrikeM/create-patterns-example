class CarAccess {
    open() {
        console.log('Success opened')
    }

    close() {
        console.log('Success closed')
    }
}

class SecurityMegaSuperUltraProxyPatternSystem {
    car: CarAccess

    constructor(car: CarAccess) {
        this.car = car
    }

    authentificate(password: string) {
        return password === 'proxy'
    }

    open(password: string) {
        if (this.authentificate(password)) {
            this.car.open()
        } else {
            console.log('Access denied')
        }
    }
}

const car = new SecurityMegaSuperUltraProxyPatternSystem(new CarAccess())
car.open('proxy')
car.open('neproxy')
