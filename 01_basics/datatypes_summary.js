// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail ;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);
// console.table([id, anotherId]);

const bigNumber = 3981029193232312931223n




// Reference (Non primitive)

// Array, Objects, Functions
const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World!");
}

console.log(typeof anotherId);

// ++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) && Heap (Non Primitive)

let myYoutubename = "dibyajyotidotcom"

let anothername = myYoutubename
anothername = "dibya"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh"
console.log(userOne.email);
console.log(userTwo.email);