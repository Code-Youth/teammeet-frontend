
function getCheckedRadioValue(inputName) {
    var ele = document.getElementsByName(inputName);
      
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
            return ele[i].value;
    }
}

/*
function appendGameCard(game) {
    let jumbotronDiv = document.createElement("div")
    jumbotronDiv.setAttribute("class", "jumbotron")

    let containerFluidDiv = document.createElement("div")
    containerFluidDiv.setAttribute("class", "container-fluid")

    let rowDiv = document.createElement("div")
    rowDiv.setAttribute("class", "row")

    let imgDiv = document.createElement("div")
    imgDiv.setAttribute("style","text-align: right;")
    imgDiv.setAttribute("class", "col-md-5 px-0")
    
    let img = document.createElement("img")
    img.setAttribute("id","soccer_pic")
    //img.setAttribute("src",movie.name)
    img.setAttribute("class",'img-fluid')
    
    let colDiv = document.createElement("div")
    colDiv.setAttribute("class", "col-md-5")

    let h3 = document.createElement("h3")
    h3.setAttribute("class", "soccer_title")
    h3.innerHTML = game.firstName

    let h4 = document.createElement("h4")
    h4.innerHTML = game.sport + game.location + game.date

    h3.appendChild(h4)
    colDiv.appendChild(h3)
    imgDiv.appendChild(img)
    rowDiv.appendChild(colDiv)
    //rowDiv.appendChild(imgDiv)
    containerFluidDiv.appendChild(rowDiv)
    jumbotronDiv.appendChild(containerFluidDiv)


    console.log(jumbotronDiv)

    document.body.append(jumbotronDiv)
}
*/

function getGames(x) {
    if(x == undefined){
        x = ""
    }
    console.log(x)
    console.log("funcopop")
    fetch("https://teammeet-backend-app.azurewebsites.net/api/games" + x)

    .then((resp) => resp.json())
    .then(function(data) {

        let games = data.games
        document.getElementById("gameList").innerHTML = ""
        for (let i = 0; i < games.length; i++) {
            appendGameCard(games[i])
        } 
    })
    .catch(function(error) {
        console.log(error);
    });

// else{
//     console.log("helo")
//     fetch("https://teammeet-backend-app.azurewebsites.net/api/games")
//     .then((resp) => resp.json())
//     .then(function(data) {

//         let games = data.games

//         for (let i = 0; i < games.length; i++) {
//             appendGameCard(games[i])
//         } 
//     })
//     .catch(function(error) {
//         console.log(error);
//     });
// }
}
function addGame() {

    //let formElem = document.getElementById("form1")
    //let formData = new FormData(formElem)
    //let formJson = JSON.stringify(Object.fromEntries(formData))

    let firstName = document.getElementById("first_name").value
    let lastName = document.getElementById("last_name").value
    let sport = document.getElementById('sport_list').value
    let numPlayers = document.getElementById('num_players').value
    let location = document.getElementById("location").value
    let date = document.getElementById("date").value
    let description = document.getElementById("Description").value
if(description.length <= 640){
    let gameData = {
        "firstName": firstName,
        "lastName": lastName,
        "sport": sport,
        "numPlayers": numPlayers,
        "location": location,
        "date": date,
        "description": description
    }

    fetch("https://teammeet-backend-app.azurewebsites.net/api/games", {
        method: "post", 
        body: JSON.stringify(gameData)
      }).then(res => {
        console.log("Request complete! response:", res);
      });
    }
    else{
        console.log(description.length)
        window.alert("Description is too long. Please keep it under 320 characters")
    }
}

function appendGameCard(game) {
    var gameDiv = document.getElementById("gameList")
    var jumboDiv = document.createElement("div")
    jumboDiv.setAttribute("class", "jumbotron")
    var divDov = document.createElement("div")
    divDov.setAttribute("class", "container border-top border-danger")
    var divRow = document.createElement("div")
    divRow.setAttribute("class", "row")
    var divCol = document.createElement("div")
    divCol.setAttribute("class", "col-md-2")
    var table1 = document.createElement("table")
    table1.setAttribute("class", "table")
    table1.setAttribute("id", "table1")
    var thead = document.createElement("thead")
    var tr = document.createElement("tr")
    var thScope = document.createElement("th")
    thScope.setAttribute("scope", "col")
    thScope.setAttribute("class", "table_header")
    thScope.innerHTML = "About"
    var tbody = document.createElement("tbody")
    var trNames = document.createElement("tr")
    var thScopeNames = document.createElement("th")
    thScopeNames.setAttribute("scope", "row")
    thScopeNames.innerHTML = (game.firstName + " " + game.lastName)
    var tr1 = document.createElement("tr")
    var thScope1 = document.createElement("tr")
    thScope1.setAttribute("scope", "row")
    thScope1.innerHTML = "skill level: " + game.description
    var tr2 = document.createElement("tr")
    var thScope2 = document.createElement("th")
    thScope2.setAttribute("scope", "row")
    thScope2.innerHTML = ("Players Needed: " + game.numPlayers)
    var tr3 = document.createElement("tr")
    var thScope3 = document.createElement("th")
    thScope3.setAttribute("scope", "row")
    thScope3.innerHTML = "Sport: " + game.sport
    var tr4 = document.createElement("tr")
    var thScope4 = document.createElement("th")
    thScope4.setAttribute("scope", "row")
    thScope4.innerHTML = "Date:" + game.date
    var tr5 = document.createElement("tr")
    var thScope5 = document.createElement("th")
    thScope5.setAttribute("scope", "row")
    thScope5.innerHTML = "Location: " + game.location
    var trJoin = document.createElement("tr")
    var thJoin = document.createElement("th")
    thJoin.setAttribute("class","thJoin")
    thJoin.setAttribute("style", "background-color: rgb(230, 0, 0);   text-align: center;")
    var aJoin = document.createElement("a")
    aJoin.setAttribute("href", "")
    aJoin.setAttribute("class", "joinButton")
    aJoin.innerHTML = "Join Game"



    gameDiv.appendChild(jumboDiv)
    jumboDiv.appendChild(divDov)
    divDov.appendChild(divRow)
    divRow.appendChild(divCol)
    divCol.appendChild(table1)
    table1.appendChild(thead)
    thead.appendChild(tr)
    tr.appendChild(thScope)
    table1.appendChild(tbody)
    tbody.appendChild(trNames)
    trNames.appendChild(thScopeNames)
    tbody.appendChild(tr2)
    tr2.appendChild(thScope2)
    tbody.appendChild(tr4)
    tr4.appendChild(thScope4)
    tbody.appendChild(tr5)
    tr5.appendChild(thScope5)
    tbody.appendChild(trJoin)
    trJoin.appendChild(thJoin)
    thJoin.appendChild(aJoin)

    var sideDiv = document.createElement("div")
    sideDiv.setAttribute("class", "col-md-7")
    var atche3 = document.createElement("h3")
    atche3.setAttribute("id", "basketball_title")
    atche3.setAttribute("class", "border-bottom")
    atche3.innerHTML = game.sport + " - " + game.location
    var atche4 = document.createElement("h5")
    atche4.innerHTML = game.description
    divRow.appendChild(sideDiv)
    sideDiv.appendChild(atche3)
    sideDiv.appendChild(atche4)

    var img = document.createElement("img")
    img.setAttribute("src","art.png")
    img.setAttribute("class", "test")
    img.setAttribute("style","width: 300px; height: 180px; display: inline")
    divRow.appendChild(img)
}

/*    <div class='col-md-5'>
                    <h3 id='basketball_title'>Basketball match!</h3>
                    <h4>Looking for 3 pro ballers. Matches are very intense and many of our players played
                        professionaly in college.</h4>
                    <a class='btn btn-danger my-5' href='Join match.html'>Join match</a>
                </div>
                */
//Testing findgame post

/*
    <div class="jumbotron">
        <div class="container">
            <div class="row">
                <div class='col-md-2'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col" class='table_header'>About</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Skill level: Amatuer</th>
                            <tr>
                                <th scope="row">Current players: 7</th>
                            </tr>
                            <tr>
                                <th scope="row">Player needed: 5</th>
                            </tr>
                            <tr>
                                <th scope="row">Date:10/27/2021</th>
                            </tr>
                            <tr>
                                <th scope="row">Location: .....</th>
                            </tr>
                        </tbody>
                    </table>
                    */
function buten(){
                    var spFilter = document.getElementById("sportFilter")
                    getGames("?sport=" + spFilter.value)
                            //?sport=Soccer//
}