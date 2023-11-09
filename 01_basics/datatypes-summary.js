// Primitive

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

//console.log(id === anotherId);

const bigNumber = 68454685465446565464n;

// Reference ( Non primitive )

// Array, Object, Functions
const heros = ["shaktimann", "naagraj", "doga"];

let myObj = {
    name: "rushikesh",
    age: 25
}

const myFunnnction = function() {
    console.log("Hello World");
}

console.log(typeof myFunnnction);