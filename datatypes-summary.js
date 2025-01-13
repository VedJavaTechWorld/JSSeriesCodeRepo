// primitive datatypes

// 7 types : String, Number, Boolean, Null, undefined, symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTempp = null;
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 9999999999999999n;
console.log(typeof bigNumber);

//Reference type(Non-primitive)

//Arrays, Objects, Functions
const heroes = ["Captain America", "Thor", "Ironman"];
let myObj = {
    name : "ved",
    age : 32
}

const myFunction = function(){
    console.log("Hello Functions...");
}
console.log(typeof heroes);
console.log(typeof myObj);
console.log(typeof myFunction);

myFunction();


