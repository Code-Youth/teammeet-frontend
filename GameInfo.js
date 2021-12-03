function reserveSpot(){

    let reservation = {
        id_token: loginToken,
        game_id: "618e78389884300ea46e5f10"
    }

    fetch("https://teammeet-backend-app.azurewebsites.net/api/reserve", {
            method: "post", 
            body: JSON.stringify(reservation)
        }).then(res => {
            console.log("Request complete! response:", res);
        });

}

function unreserveSpot(){
    let reservation = {
        id_token: loginToken,
        game_id: "618e78389884300ea46e5f10"
    }

    fetch("https://teammeet-backend-app.azurewebsites.net/api/unreserve", {
            method: "post", 
            body: JSON.stringify(reservation)
        }).then(res => {
            console.log("Request complete! response:", res);
        });
    
}


function seeReservation(){
    game_id = "618e78389884300ea46e5f10"

    console.log(isSignedIn())

    fetch("https://teammeet-backend-app.azurewebsites.net/api/reservation?game_id=618e78389884300ea46e5f10")
    .then((resp) => resp.json())
    .then(function(data) {
        let reservations = data.reservations

        console.log(JSON.stringify(reservations))
    })
    .catch(function(error) {
        console.log(error);
    });
    
}
