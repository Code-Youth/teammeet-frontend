function getGameInfo() {

    const queryString = window.location.search; // getting the url
    const urlParams = new URLSearchParams(queryString); // takes parameters string and turns it into parameters we can use
    const game_id = urlParams.get('game_id') // getting game id from the parameter

    //let sport = document.getElementById("sport_filter").value

    fetch("https://teammeet-backend-app.azurewebsites.net/api/games?_id=" + game_id)
    .then((resp) => resp.json())
    .then(function(data) {
        let games = data.games
        // console.log(games)
        console.log(games[0].date)
        let player1 = document.querySelector('#player1').innerHTML = games[0].firstName + " " + games[0].lastName
        // console.log(player1)
        let title = document.querySelector('#Title').innerHTML = games[0].sport
        // let skillLevel = document.querySelector('#skillLevel').innerHTML = games[0]
        document.querySelector('#date_info').innerHTML = games[0].date
        console.log(games)
        document.querySelector('#skill_info').innerHTML = games[0].sklLevel
        

        let location = document.querySelector('#location').innerHTML = games[0].location
        let description = document.querySelector('#description').innerHTML = games[0].description

    })
    .catch(function(error) {
        console.log(error);
    });
}






