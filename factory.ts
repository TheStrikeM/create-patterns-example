class DefaultEmployee {
    private readonly price: number
    constructor(price: number) {
        this.price = price
    }

    getPrice() { return this.price }
}

class FullTime extends DefaultEmployee {
    constructor() { super(14); }
}

class PartTime extends DefaultEmployee {
    constructor() { super(10); }
}

class EmployeeFactory {
    create(type) {
        let employee
        if (type === 'fulltime') {
            employee = new FullTime()
        } else if (type === 'parttime') {
            employee = new PartTime()
        }

        employee.type = type
        return employee
    }
}

const EmployeeCreator: EmployeeFactory = new EmployeeFactory()

const fulltimeEmployee = EmployeeCreator.create('fulltime'),
      parttimeEmployee = EmployeeCreator.create('parttime')

console.log(`Fulltime Employee cost ${fulltimeEmployee.getPrice()}$`)
console.log(`Parttime Employee cost ${parttimeEmployee.getPrice()}$`)