// Conditional Statement

var hour = 5

if (hour >= 6 && hour < 12) {
    console.log('Good Morning')
} else if (hour >= 12 && hour < 18){
    console.log('Good Afternoon')
} else {
    console.log('Good Evening')
}

var ageIsMoreThanEighteen = true
var isBritishCitizen = false

if(ageIsMoreThanEighteen && isBritishCitizen){
    console.log('This customer is elegible forba driving license')
} else {
    console.log('This customer is NOT elegible for a driving license')
}