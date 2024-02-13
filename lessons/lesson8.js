// Functions

// Declarative Function
function helloOne(){
    console.log('Hello Marcus!')
}

// Anonymous Function
var helloTwo = function(){
    console.log('Hello Bruno!')
}

// ES6 Function Syntax or Arrow Function
var helloThree = () => {
    console.log('Hello Rasmus!')
}

// Invoking the functions
helloOne()
helloTwo()
helloThree()

// Function with Arguments
function printName(firstName, lastName){
    console.log(firstName + ' ' + lastName)
}
printName('Alejandro', 'Garnacho')

// Function with Return
function multiplyByTwo(number){
    var result = number * 2
    return result
}
var myResult = multiplyByTwo(10)
console.log(myResult)

// Import Function
import { printAge } from '../helpers/printHelper.js'
printAge(10)

// Import Everything
import * as helper from '../helpers/printHelper.js'
helper.printAge(10)