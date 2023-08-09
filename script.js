// Define the Train class
class Train {
    // define the constructor
    constructor(color, lightsOn) {
        // build properties on future object instances of the Train class
        this.color = color;
        this.lightsOn = lightsOn;
    }
}

// Build a new instance of the train class and assign it to a variable
var myFirstTrain = new Train('red', false);
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('grey', true)

console.log(myFirstTrain);
console.log(mySecondTrain);
console.log(myThirdTrain);