

let Name= "Abdul Jabar"
let age = 45
let live = true
let one = 1
// console.log(typeof Name)
// console.log(typeof age)
// console.log(typeof live)

// conversion
let Name2number=Number(Name)    // we can not convert the string value into number we just convert the string numbers to numbers
let age2number=String(age)      // we can convert the number into string       
let live2number=Number(live)    // we can convert the boolean value into number 
let numeber2bool=Boolean(one)    //we can convert the number(0,1) into boolean

// console.table([Name2number, age2number , live2number])

console.log(typeof Name2number)
console.log(typeof age2number)
console.log(typeof live2number)

console.log( Name2number)   //  --> not a number  NaN
console.log( age2number)
console.log( live2number)