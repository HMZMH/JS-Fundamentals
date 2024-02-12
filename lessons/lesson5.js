// Logical Operators
console.log(true && false) // Logical AND - all values need to be true
console.log(true || false) // Logical OR - any value needs to be true
console.log(!true) // Logical NOT

var ageIsMoreThanEighteen = true
var isBritishCitizen = !true
var elegibilityForDriversLicense = ageIsMoreThanEighteen && isBritishCitizen
console.log('This customer is elegible for a driving license: ' + elegibilityForDriversLicense)