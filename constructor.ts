class HiddenPattern {
    private readonly name
    private readonly type

    constructor(name: string, type: string) {
        this.name = name
        this.type = type
    }
}

const constructorPattern = new HiddenPattern('Constructor', 'Create pattern')
