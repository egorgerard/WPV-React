console.log("Aufgabenteil 1: ")
console.log()

class House{
    //#privateField;
    constructor(floors, windows, doors, garage, rooms){
        this.floors = floors;
        this.windows = windows;
        this.doors = doors;
        this.garage = garage;
        this.rooms = rooms;
        this.nation = "france";
    }

    //getHouseFloors = () => {
    //    return this.floors
    //}

    //setHouseFloors = (floors) => {
    //    this.floors = floors
    //}

    get getHouseFloors(){
        return this.floors
    }

    set setHouseFloors(floors){
        this.floors = floors
    }

    getFullHouseName = () =>{
        console.log(`${this.floors} ${this.windows} ${this.doors} ${this.garage} ${this.rooms}`)
    }
}


let villa = new House(2,10,2,1,8);

villa.getFullHouseName();

villa.setHouseFloors = 200;

console.log("Ausgabe get floors " + villa.getHouseFloors)

villa.getFullHouseName();

//****************************************************** */
console.log()
console.log("Aufgabenteil 2: ")
console.log()
//****************************************************** */


let arr1 = [0,1,2,3,4,5,6];

[a, b, c, d, e, f, g] = arr1;

console.log(a);
console.log(d);

//console.log(arr1[0])
//console.log(arr1[4])

//****************************************************** */
console.log()
console.log("Aufgabenteil 3: ")
console.log()
//****************************************************** */


let name = "jeff"
let depth = 10


printObjName = (obj) =>{
    console.log(obj.name + " " + obj.depth)
}


let ocean = {name, depth}

printObjName(ocean)
//consiole.log(ocean)

//****************************************************** */
console.log()
console.log("Aufgabenteil 4: ")
console.log()
//****************************************************** */

numbersOne = [1, 2, 3];
numbersTwo = [4, 5, 6];
numbersCombined = [...numbersOne, ...numbersTwo];

console.log(numbersCombined)

//****************************************************** */
console.log()
console.log("Aufgabenteil 5: ")
console.log()
//****************************************************** */

class Animal{
    #height
    #noise
    #type
    constructor(){
        this.#height = 100;
        this.#noise = "bark"
        this.#type = "dog"
    }

    get getAnimalHeight(){
        return this.#height
    }

    set setAnimalHeight(height){
        this.#height = height
    }

    getFullAnimal = () =>{
        console.log(`${this.#height} ${this.#noise} ${this.#type}`)
    }

}

//let wingspan = 160

class NewAnimal extends Animal{
    #color 
    constructor(){
        super();
        this.#color = "Green"
    }

    get getNewAnimalColor(){
        return this.#color
    }

}

let animal1 = new Animal();
animal1.getFullAnimal();

let newAnimal1 = new NewAnimal();
newAnimal1.setAnimalHeight = 99
console.log(newAnimal1.getAnimalHeight)

