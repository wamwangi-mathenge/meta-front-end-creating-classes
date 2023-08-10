// Define the Train class
class Train {
    // define the constructor
    constructor(color, lightsOn) {
        // build properties on future object instances of the Train class
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this)
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

// Build a new instance of the train class and assign it to a variable
var myFirstTrain = new Train('red', false);
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('grey', true)

console.log(myFirstTrain);
console.log(mySecondTrain);
console.log(myThirdTrain);

var train4 = new Train('red', false);

console.log(train4.toggleLights());
console.log(train4.lightsStatus());
console.log(train4.getSelf())
console.log(train4.getPrototype())