// Loops

// For Loop
for(let i=0; i<5;i++){
    console.log('Goal!')
}

// For Of Loop
var premierLeague = ["Liverpool", "Arsenal", "Manchester United"]

for(let team of premierLeague){
    console.log(team)

    if (team == "Manchester United"){
        console.log
        break
    }
}

// ES6 Syntax For Each Loop
premierLeague.forEach( team => {
    console.log(team)
})