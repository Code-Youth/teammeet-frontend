
function getCheckedRadioValue(inputName) {
    var ele = document.getElementsByName(inputName);
      
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
            return ele[i].value;
    }
}


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

    //let formElem = document.getElementById("form1")
    //let formData = new FormData(formElem)
    //let formJson = JSON.stringify(Object.fromEntries(formData))


    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let sport = getCheckedRadioValue('gridRadios')
    let numPlayers = document.getElementById('numPlayers').value
    let location = document.getElementById("location").value
    let date = document.getElementById("date").value
    let description = document.getElementById("description").value


    let gameData = {
        "firsName": firstName,
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

