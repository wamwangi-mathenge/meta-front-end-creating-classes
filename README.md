# Creating Classes

By the end of this reading, you should be able to explain, with examples, the concept of extending classes using basic inheritance to alter behaviors within child classes.

All objects that are built from the prototype share the same functionality.

When you need to code more complex OOP relationships, you can use the class keyword and its easy-to-understand and easy-to-reason about syntax.

Imagine that you need to code a Train class.

Once you've coded this class, you'll be able to use the keyword new to instantiate objects of the Train class.

For now though, you first need to define the Train class using the following syntax:

```
class Train {}
```

In between the curly braces, the first piece of code that you need to define is the constructor:

```
class Train {
    constructor() {

    }
}
```

The constructor will be used to build properties on the future object instance of the Train class.

For now, let's say that there are only 2 properties that each object instance of the Train class should have at the time it gets instantiated: color and lightsOn.

```
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
}
```

Notice that there's no function keyword. Also, notice that the keyword constructor is used to define this function. You give your constructor function parameters inside an opening and closing parenthesis, just like in regular functions. The names of parameters are color and lightsOn.

Next, inside the constructor function's body, you assigned the passed-in color parameter's value to this.color and the passed-in lightsOn parameter's value to this.lightsOn

What does this 'this' keyword here represent?

Essentially, this is all the code that you need to write to achieve 2 things:

1. This code allows me to build new instances of the Train class
2. Each object instance of the Train class that I build will have its own custom properties of color and lightsOn.

Now, to actually build a new instance of the Train class, I need to use the following syntax:

```
new Train()
```

Inside the parentheses, you need to pass values such as "red" and false, for example, meaning that the color property is set to "red" and the lightsOn property is set ot false.

And to be able to interact with the new object built this way, you need to assign it to a variable.

Putting it all together, here's your first train:

```
var myFirstTrain = new Train('red', false);
```

Just like any other variable, you can now console log the myFirstTrain object:

```
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
```