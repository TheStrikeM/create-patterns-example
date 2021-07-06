class Counter {
    constructor() {
        if (typeof Counter.instance === 'object') {
            return Counter.instance
        }
        this.count = 0;
        Counter.instance = this;
        return this
    }

    getCounter() {
        return this.count
    }

    incrementCount() {
        return this.count++
    }
}

const counter1 = new Counter()
const counter2 = new Counter()

counter1.incrementCount()
counter2.incrementCount()

console.log(counter1.getCounter())