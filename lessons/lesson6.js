// Conditional Statement

var performance = 5

if (performance >= 0 && performance < 4) {
    console.log('Poor performance!')
} else if (performance >= 5 && performance < 8){
    console.log('Good performance!')
} else {
    console.log('Excellent performance!')
}

var playsInThePremierLeague = true
var isTheTopGoalScorer = false

if(playsInThePremierLeague && isTheTopGoalScorer){
    console.log('This player is elegible for a Golden Boot trophy')
} else {
    console.log('This player is NOT elegible for a Golden Boot trophy')
}