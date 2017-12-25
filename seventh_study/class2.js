class Car {
    constructor() {
        this.speed = 0;
    }
    excel() {
        this.speed ++;
    }
}

class Bus extends Car { //상속받을 수 있다.
    constructor() {
        super();
        this.passengerNumber = 40;
    }
}
const car = new Car();
const bus = new Bus();
car.excel();
bus.excel();
bus.excel();
bus.excel();
bus.excel();
bus.excel();


console.log(car);
console.log(bus);


class Person {
    constructor() {
        this.year = 0;
    }
    passYear() {
        this.year ++;
    }
}
class Man extends Person {
    constructor() {
        super();
        this.dna = 'xy';
    }
}
const seungju = new Man();

seungju.year = 28;
const man = new Man();

console.log(seungju.dna);
man.passYear();
man.passYear();
console.log(man.year);
seungju.passYear();
console.log(seungju.year)


