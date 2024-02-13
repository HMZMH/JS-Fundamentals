// Export Function
export function printAge(age){
    console.log(age)
}

// Create Class
class CustomerDetails{

    printFirstName(firstName){
        console.log(firstName)
    }

    /**
     * This method will print the last name
     * @param {string} lastName 
     */

    printLastName(lastName){
        console.log(lastName)
    }

}

// Export Instance of Class
export const customerDetails = new CustomerDetails()