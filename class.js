class Support {
    name;
    role = 'sopport web dev';
    constructor(name) {
        this.name = name;
    }
    startSession() {
        console.log('start a support session')
    }
}

const ahnaf = new Support('Ahnaf')
console.log(ahnaf)