

function getGameInfo() {
// Lines 3-10 get the game id from the URL
    const queryString = window.location.search; // getting the url
    // console.log("1.printing query string")
    // console.log(queryString)

    const urlParams = new URLSearchParams(queryString); // takes parameters string and turns it into parameters we can use
    // console.log("2.printing urlParams")
    // console.log(urlParams)

    const game_id = urlParams.get('game_id') // getting game id from the parameter
    // console.log("3.printing game id extracted from params")
    // console.log(game_id)

    fetch("https://teammeet-backend-app.azurewebsites.net/api/games?_id=" + game_id)// Gets all game info data for specific game
    .then((resp) => resp.json())
    .then(function(data) {// data has info from specific game
        // console.log("4. Printing returned from get games api")
        // console.log(data)
        let game = data.games[0]

        
        //Update info for selected game
        document.querySelector('#organiser').innerHTML = game.firstName + " " + game.lastNam
        document.querySelector('#Title').innerHTML = game.sport
        document.querySelector('#date_info').innerHTML = game.date
        document.querySelector('#skill_info').innerHTML = game.sklLevel        
        document.querySelector('#location').innerHTML = game.location
        document.querySelector('#description').innerHTML = game.description

    })
    .catch(function(error) {
        console.log(error);
    });

    let player1 = document.querySelector('#player1')
    let player2 = document.querySelector('#player2')
    let player3 = document.querySelector('#player3')
    let player4 = document.querySelector('#player4')


    fetch("https://teammeet-backend-app.azurewebsites.net/api/reservation?game_id=" + game_id)// Gets all game info data for specific game
    .then((resp) => resp.json())
    .then(function(data) {// data has info from specific game
        // console.log("5. Printing returned from reservations api")
        // console.log(data)

        let reservations = data.reservations
        console.log("6. Printing returned from reservations api")
        console.log(reservations)

        let first_name1 = reservations[0].userinfo[0].first_name
        let last_name1 = reservations[0].userinfo[0].last_name

        
        let first_name2 = reservations[1].userinfo[0].first_name
        let last_name2 = reservations[1].userinfo[0].last_name


        
        console.log('This is testing for first name')
        console.log(first_name1)
        console.log('This is testing for last name')
        console.log(last_name2)

        player1.innerHTML = first_name1 + ' ' + last_name1
        player2.innerHTML = first_name2 + ' ' + last_name2








        for (let i = 0; i < reservations.length; i++) {
            console.log('First name in reservations')
            console.log(reservations[i].userinfo[0].first_name)
            console.log('Last name in reservations')
            console.log(reservations[i].userinfo[0].last_name)
            p


        }

        
    

    })
    .catch(function(error) {
        console.log(error);
    });
}








