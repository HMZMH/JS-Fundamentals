// Concatination & Interpolation
var itemPrice = 50
var itemName = "Cup"
var messageToPrint1 = "The price of your " + itemName + " is £" + itemPrice // Cocatination
var messageToPrint2 = `The price of your ${itemName} is £${itemPrice}` // Interpolation

console.log(messageToPrint1)
console.log(messageToPrint2)
