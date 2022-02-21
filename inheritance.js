class Support {
    name;
    role = 'sopport web dev';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log('start a support session')
    }
}

class StudentCare {
    name;
    designnation = 'caring';
    constructor(name) {
        this.name = name;
    }
    buildARoutine(student) {
        console.log(this.name, 'build a routine for', student)
    }
}

class TeamMember {
    startSession() {
        console.log(this.name, 'start');
    }
}

class Support extends TeamMember {
    groupSupportTime;
    constructor(time) {
        this.time = time;
    }
}

const ahnaf = new Support('Ahnaf')
console.log(ahnaf)