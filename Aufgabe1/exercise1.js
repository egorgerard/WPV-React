let dog = {
    type:"Dog",
    weight:30,
    breed:"Germand Shepard",
    name:"Peter"
}

let myArray = [10,20,30,13,50,60,5]

// Aufgabenteil 1
console.log("Aufgabenteil 1")

function add(p1,p2){
    return p1 + p2
}

var x = add(2,3)

console.log(x)
console.log("--------------------------------")

//Aufgabenteil 2
console.log("Aufgabenteil 2")

function add2(p1, p2, ...p){
    console.log(p1, p2)
    console.log(p)
}

add2(1,2,3,4,5,6,7,8)
console.log("--------------------------------")


//Aufgabenteil 3
console.log("Aufgabenteil 3")

//Arrow Function -> FunktionsName = (parameter) => return 
// wenn gerade dann + wenn ungerade dann -
let arrowFunc = (arr, ifPos, stepRange) => {
    var temp = 0
    if(ifPos){
        for(var i = 0; i < arr.length; i = i + stepRange){
            temp = temp + arr[i]
        }
    } else{
        for(var i = 0; i < arr.length; i = i + stepRange){
            temp = temp - arr[i]
        }
    }

    return console.log(temp)
}

arrowFunc(myArray, true, 1)
arrowFunc(myArray, true, 3)
console.log("--------------------------------")

//Aufgabenteil 4
console.log("Aufgabenteil 4")

let copyObj = dog => {
    let dog2 = {...dog}
    dog2.name = "Joe"

    return console.log("Old Dog: ", dog.name, "| new Dog: ", dog2.name);

}

copyObj(dog)


