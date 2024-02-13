// TypeScript

// TypeScript is strict with data types
var customerFirstName = "Bruno"
var customerLastName: string = "Fernandes"
var customerAge: number = 29

type Customer = {firstName: string, lastName: string, active: boolean}

var firstCustomer: Customer = {
    firstName: "Alejandro",
    lastName: "Garnacho",
    active: true
}