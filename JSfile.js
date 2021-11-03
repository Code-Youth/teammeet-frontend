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
    h3.innerHTML = game.name

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


function getGames() {

    fetch("https://teammeet-backend-app.azurewebsites.net/api/games")
    .then((resp) => resp.json())
    .then(function(data) {

        let games = data.games

        for (let i = 0; i < games.length; i++) {
            appendGameCard(games[i])
        } 
    })
    .catch(function(error) {
        console.log(error);
    });
}

function addGame() {

    let name = prompt("enter your name")
    let sport = prompt("enter your sport")
    let skillLevel = prompt("enter your skill level")
    let description = prompt("enter the games description")
    let gameSize = prompt("enter the game size")
    let currentPlayers = prompt("enter the number of players already going")
    let location = prompt("enter the location")
    let date = prompt("enter the date of the game")
    

    data = {
        name: name,
        sport: sport,
        skillLevel: skillLevel,
        description: description,
        gameSize: gameSize,
        currentPlayers: currentPlayers,
        location: location,
        date: date
    }

    fetch("https://teammeet-backend-app.azurewebsites.net/api/games", {
        method: "POST", 
        body: JSON.stringify(data)
      }).then(res => {
        console.log("Request complete! response:", res);
      });
}

