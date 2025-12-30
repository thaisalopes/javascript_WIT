//CONSTRUCTOR - a method that is called when a new object is created
//use to set initial values

class Mammal {
    constructor(name, habitat, noise){
        this._name = name;
        this._habitat = habitat;
        this._noise = noise;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    static sayMammalCharacteristic() {
        console.log('Mammals are animals who breastfeed.')
    }

    makeNoise() {
        console.log(`${this._name} ${this._noise}s`);
    }

    introduce() {
        console.log(`${this._name} is a Mammal. Its natural habitat is ${this._habitat} and the noise it makes is a ${this._noise}.`)
    }
}


class Human extends Mammal {
    constructor(name, habitat, profession) {
        super(name, habitat, "scream");
        this._name = name;
        this._profession = profession;
    }

    getProfession() {
        console.log(this._profession);
    }

    introduce() {
        console.log(`${this._name} is a Human, which is a subclass of Mammal. Its natural habitat is ${this._habitat} and the noise it makes is a ${this._noise}.`)
    }
}

thaisa = new Human("Thaisa", "Land", "Dev");
thaisa.makeNoise();
thaisa.getProfession;
thaisa.introduce();
Mammal.sayMammalCharacteristic();