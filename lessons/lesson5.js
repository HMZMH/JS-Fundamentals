// Logical Operators
console.log(true && false) // Logical AND - all values need to be true
console.log(true || false) // Logical OR - any value needs to be true
console.log(!true) // Logical NOT

var playsInThePremierLeague = true
var isTheTopGoalScorer = !true
var elegibilityToWinTheGoldenBoot = playsInThePremierLeague && isTheTopGoalScorer
console.log('This player is elegible for the Golden Boot trophy: ' + elegibilityToWinTheGoldenBoot)