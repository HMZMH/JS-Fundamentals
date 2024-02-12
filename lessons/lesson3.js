// Objects
var customer = {
    firstName: 'Bruno',
    lastName: 'Fernandes',
    cars: ["Audi", "BMW"]
}

// Dot Notation
console.log(customer.firstName)

// Bracket Notation
console.log(customer['lastName'])

customer.firstName = "Marcus"
customer[`lastName`] = "Rashford"

console.log(`${customer.firstName} ${customer.lastName}`)

// Arrays
var car = ["McLaren", "Aston Martin", "Lamborghini"]

console.log(car[0])
console.log(car[2])

car[0] = "Mercedes"

console.log(car[0])
console.log((customer.cars[0]))