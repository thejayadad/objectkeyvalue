
//How to print the key and value of a object//



function favoriteTeams(obj){
    for(let key in obj){
        let value = obj[key];
        console.log(`My favorite teams in ${key} is ${value}`)
    }
}

let teams = {
    soccer: "Liverpool",
    footbal: "Ravens",
    basketball: "Lakers"
}

favoriteTeams(teams)