// Define a base Animal class
class Animal {
    constructor(sound) {
        this.sound = sound;
    }

    speak(message) {
        return message.split(" ").join(` ${this.sound} `) + ` ${this.sound}`;
    }
}

// Define Lion class
class Lion extends Animal {
    constructor() {
        super("roar");
    }
}

// Define Tiger class
class Tiger extends Animal {
    constructor() {
        super("grrr");
    }
}


// TESTING CASES
const lion = new Lion();
const tiger = new Tiger();

console.log(lion.speak("I'm a lion"));
console.log(tiger.speak("Lions suck"));