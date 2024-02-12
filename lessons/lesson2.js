// Concatination & Interpolation
var itemPrice = 90
var itemName = "Football Kit"
var messageToPrint1 = "The price of your " + itemName + " is £" + itemPrice // Cocatination
var messageToPrint2 = `The price of your ${itemName} is £${itemPrice}` // Interpolation

console.log(messageToPrint1)
console.log(messageToPrint2)
