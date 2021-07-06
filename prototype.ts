class Primate {
    name;
    iq;

    constructor(name: string, iq: number) {
        this.name = name
        this.iq = iq
    }

    copy() {
        return new Primate(this.name, this.iq)
    }
}

const defaultPrimate = new Primate('Порошенко', 20)

const copiedPrimate1: Primate = defaultPrimate.copy()
copiedPrimate1.name = "Лукашенко"

const copiedPrimate2 = defaultPrimate.copy()

console.log(copiedPrimate1)
console.log(copiedPrimate2)
