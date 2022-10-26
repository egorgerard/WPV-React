
let firtName;
let lastName;

class Person{
    constructor(first, last){
        this.firstName = first;
        this.lastName = last;
    }
}

// Ist das selbe wie:

function Person(first, last){
    this.firstName = first;
    this.lastName = last;
}