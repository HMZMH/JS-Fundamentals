// Objects
var customer = {
    firstName: 'Dwayne',
    lastName: 'Johnson',
    cars: ["Mercedes", "BMW"]
}

// Dot Notation
console.log(customer.firstName)

// Bracket Notation
console.log(customer['lastName'])

customer.firstName = "John"
customer[`lastName`] = "Cena"

console.log(`${customer.firstName} ${customer.lastName}`)

// Arrays
var car = ["Honda", "Toyota", "Nissan"]

console.log(car[0])
console.log(car[2])

car[0] = "Audi"

console.log(car[0])
console.log((customer.cars[0]))