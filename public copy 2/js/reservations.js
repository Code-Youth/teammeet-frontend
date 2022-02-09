function reserveSpot(){

    if (isSignedIn()) { 

        //print out the available paramters
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const game_id = urlParams.get('game_id')

        console.log("reserve game " + game_id)

        let reservation = {
            id_token: getCookie("token"),
            game_id: game_id
        }

        fetch("https://teammeet-backend-app.azurewebsites.net/api/reserve", {
            method: "post", 
            body: JSON.stringify(reservation)
        }).catch(function(error) {
            console.log(error);
        });
    }
}

function unreserveSpot(){
    if (isSignedIn()) { 
        //print out the available paramters
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const game_id = urlParams.get('game_id')

        let reservation = {
            id_token: getCookie("token"),
            game_id: game_id
        }

        fetch("https://teammeet-backend-app.azurewebsites.net/api/unreserve", {
            method: "post", 
            body: JSON.stringify(reservation)
        })
        .catch(function(error) {
            console.log(error);
        });
    }
}


function loadReservation(){
    //print out the available paramters
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const game_id = urlParams.get('game_id')

    console.log("logging reservations for game " + game_id)

    fetch("https://teammeet-backend-app.azurewebsites.net/api/reservation?game_id=" + game_id)
    .then((resp) => resp.json())
    .then(function(data) {
        let reservations = data.reservations
        console.log(JSON.stringify(reservations))
    })
    .catch(function(error) {
        console.log(error);
    });
    
}
