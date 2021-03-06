
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
function loadDefaultGames(){
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

function loadGames(x) {
    if(x == undefined){
        x = ""
    }
    console.log(x)
    console.log("funcopop")
    fetch("https://teammeet-backend-app.azurewebsites.net/api/games" + x)

    .then((resp) => resp.json())
    .then(function(data) {

        let games = data.games
        //console.log(document.getElementById("gameDiv").innerHTML)
        document.getElementById("gameDiv").innerHTML = ""
        //console.log(document.getElementById("gameDiv").innerHTML)
        for (let i = 0; i < games.length; i++) {
            appendGameCard(games[i])
        } 
    })
    .catch(function(error) {
        console.log(error);
    });
}
function getGame(game_id) {

    //let sport = document.getElementById("sport_filter").value

    fetch("https://teammeet-backend-app.azurewebsites.net/api/games?_id=" + game_id)
    .then((resp) => resp.json())
    .then(function(data) {
        let games = data.games
        console.log(data)


        let player1 = document.querySelector('#player1').innerHTML = games[0].firsName + " " + games[0].lastName
        // console.log(player1)
        let title = document.querySelector('#Title').innerHTML = games[0].sport
        // let skillLevel = document.querySelector('#skillLevel').innerHTML = games[0]
        let date = document.querySelector('#date').innerHTML = games[0].date
        console.log(games + "Games")
        console.log(date + "date")
        let location = document.querySelector('#location').innerHTML = games[0].location
        let description = document.querySelector('#description').innerHTML = games[0].description
    })
    .catch(function(error) {
        console.log(error);
    });
}


function addGame() {

let btn = document.querySelector('#create_btn')

    let firstName = document.getElementById("first_name").value
    let lastName = document.getElementById("last_name").value
    let sport = document.getElementById('sport_list').value
    let numPlayers = document.getElementById('num_players').value
    let location = document.getElementById("location").value
    let date = document.getElementById("date").value
    let description = document.getElementById("Description").value
    let sklLevel = document.getElementById("skill_level").value
    
    if(description.length <= 640){
        let gameData = {
            "firstName": firstName,
            "lastName": lastName,
            "sport": sport,
            "numPlayers": numPlayers,
            "sklLevel": sklLevel,
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

       

        window.history.pushState('page2', 'Title', '/find-game.html') // This changes the url to the "find-game" page
        window.location.reload(); // This reloads the page, need it so it will change to the find game
    }
    else{
        console.log(description.length)
        window.alert("Description is too long. Please keep it under 320 characters")
    }
}

// function appendGameCard(game) {

//     console.log(game)
    
//     var jumboDiv = document.createElement("div")
//     jumboDiv.setAttribute("class", "jumbotron")
//     var divDov = document.createElement("div")
//     divDov.setAttribute("class", "container")
//     var divRow = document.createElement("div")
//     divRow.setAttribute("class", "row")
//     var divCol = document.createElement("div")
//     divCol.setAttribute("class", "col-md-2")
//     var table1 = document.createElement("table")
//     table1.setAttribute("class", "table")
//     table1.setAttribute("id","postTable")
//     //table1.setAttribute("id", "table1")
//     var thead = document.createElement("thead")
//     var tr = document.createElement("tr")
//     var thScope = document.createElement("th")
//     thScope.setAttribute("scope", "col")
//     thScope.setAttribute("class", "table_header")
//     thScope.innerHTML = "About"
//     var tbody = document.createElement("tbody")
//     var trNames = document.createElement("tr")
//     var thScopeNames = document.createElement("th")
//     thScopeNames.setAttribute("scope", "row")
//     thScopeNames.innerHTML = (game.firstName + " " + game.lastName)
//     var tr1 = document.createElement("tr")
//     var thScope1 = document.createElement("tr")
//     thScope1.setAttribute("scope", "row")
//     thScope1.innerHTML = "skill level: " + game.description
//     var tr2 = document.createElement("tr")
//     var thScope2 = document.createElement("th")
//     thScope2.setAttribute("scope", "row")
//     thScope2.innerHTML = ("Players Needed: " + game.numPlayers)
//     var tr3 = document.createElement("tr")
//     var thScope3 = document.createElement("th")
//     thScope3.setAttribute("scope", "row")
//     thScope3.innerHTML = "Sport: " + game.sport
//     var tr4 = document.createElement("tr")
//     var thScope4 = document.createElement("th")
//     thScope4.setAttribute("scope", "row")
//     thScope4.innerHTML = "Date:" + game.date
//     var tr5 = document.createElement("tr")
//     var thScope5 = document.createElement("th")
//     thScope5.setAttribute("scope", "row")
//     thScope5.innerHTML = "Skill Level: " + game.sklLevel
//     var trJoin = document.createElement("tr")
//     var thJoin = document.createElement("th")
//     thJoin.setAttribute("class","thJoin")
//     thJoin.setAttribute("style", "background-color: rgb(230, 0, 0);   text-align: center;")
//     var aJoin = document.createElement("a")

//     //let's look at the destination were linking to
//     console.log(window.location.origin + "/game-info?game_id=" + game._id)

//     aJoin.setAttribute("href", window.location.origin + "/game-info.html?game_id=" + game._id)
//     aJoin.setAttribute("class", "joinButton")
//     aJoin.innerHTML = "Join Game"


//     // this is where we are hiding an input box!
//     var hiddenInput = document.createElement("input")
//     hiddenInput.setAttribute("type", "hidden");
//     hiddenInput.setAttribute("value", game._id); // this is where we....

//     // This is what I hope will populate the page with the game info, please work....
    
    



//     var gameDiv = document.getElementById("gameDiv")
//     gameDiv.appendChild(jumboDiv)
//     jumboDiv.appendChild(divDov)
//     divDov.appendChild(divRow)
//     divRow.appendChild(divCol)
//     divCol.appendChild(table1)
//     table1.appendChild(thead)
//     thead.appendChild(tr)
//     tr.appendChild(thScope)
//     table1.appendChild(tbody)
//     tbody.appendChild(trNames)
//     trNames.appendChild(thScopeNames)
//     tbody.appendChild(tr2)
//     tr2.appendChild(thScope2)
//     tbody.appendChild(tr4)
//     tr4.appendChild(thScope4)
//     tbody.appendChild(tr5)
//     tr5.appendChild(thScope5)
//     tbody.appendChild(trJoin)
//     trJoin.appendChild(thJoin)
//     thJoin.appendChild(aJoin)
//     aJoin.appendChild(hiddenInput)

//     var sideDiv = document.createElement("div")
//     sideDiv.setAttribute("class", "col-md-7")
//     var atche3 = document.createElement("h3")
//     atche3.setAttribute("id", "basketball_title")
//     atche3.setAttribute("class", "border-bottom")
//     atche3.innerHTML = game.sport + " - " + game.location
//     var atche4 = document.createElement("h5")
//     atche4.innerHTML = game.description
//     divRow.appendChild(sideDiv)
//     sideDiv.appendChild(atche3)
//     sideDiv.appendChild(atche4)

//     var img = document.createElement("img")
//     //img.setAttribute("src","art.png")
//     img.setAttribute("class", "postImg")
// //img.setAttribute("style","width: 300px; height: 180px; display: inline")
//     divRow.appendChild(img)
//     console.log(gameDiv)
// }
//Declaring head elements//
function appendGameCard(game) {
var jumbotron = document.createElement("div")
jumbotron.setAttribute("class","container jumbotron")
var aboutTable = document.createElement("table")
aboutTable.setAttribute("class","aboutTable")
var aboutTHead = document.createElement("thead")
var aboutRow = document.createElement("tr")
var aboutH = document.createElement("th")
aboutH.setAttribute("class","aboutH")
aboutH.innerHTML = "About"
//Declaring body elements//
var aboutBody = document.createElement("tbody")
aboutBody.setAttribute("class","aboutBody")
var nameTr = document.createElement("tr")
var nameTh = document.createElement("th")
nameTh.innerHTML = game.firstName + " " + game.lastName
var dateTr = document.createElement("tr")
var dateTh = document.createElement("th")
dateTh.innerHTML = game.date
var skillTr = document.createElement("tr")
var skillTh = document.createElement("th")
skillTh.innerHTML = "Skill Level: " + game.sklLevel
var playersTr = document.createElement("tr")
var playersTh = document.createElement("th")
playersTh.innerHTML = "Open Spots: " + game.numPlayers
var joinTr = document.createElement("tr")
joinTr.setAttribute("class","joinTr")
var joinTh = document.createElement("th")
joinTh.setAttribute("class","joinButton")
var aJoin = document.createElement("a")
     aJoin.setAttribute("href", window.location.origin + "/game-info.html?game_id=" + game._id)
     aJoin.setAttribute("class", "joinButton")
     aJoin.innerHTML = "Join Game"

// this is where we are hiding an input box!
     var hiddenInput = document.createElement("input")
     hiddenInput.setAttribute("type", "hidden");
     hiddenInput.setAttribute("value", game._id); // this is where we....

var descTable = document.createElement("table")
descTable.setAttribute("class","descTable")
var descHead = document.createElement("thead")
var descHeadTr = document.createElement("tr")
var descHeadTh = document.createElement("th")
descHeadTh.setAttribute("class","descH")
descHeadTh.innerHTML = game.sport + " - " + game.location
var descTBody = document.createElement("tbody")
descTBody.setAttribute("class","aboutBody")
var descBodyTr = document.createElement("tr")
var descBodyTh = document.createElement("th")
descBodyTh.setAttribute("class","descBodyTh")
descBodyTh.innerHTML = game.description


let a = document.getElementById("gameDiv")
a.appendChild(jumbotron)
jumbotron.appendChild(aboutTable)
aboutTable.appendChild(aboutTHead)
aboutTHead.appendChild(aboutRow)
aboutRow.appendChild(aboutH)

aboutTable.appendChild(aboutBody)
aboutBody.appendChild(nameTr)
nameTr.appendChild(nameTh)
aboutBody.appendChild(dateTr)
dateTr.appendChild(dateTh)
aboutBody.appendChild(skillTr)
skillTr.appendChild(skillTh)
aboutBody.appendChild(playersTr)
playersTr.appendChild(playersTh)
aboutBody.appendChild(joinTr)
joinTr.appendChild(joinTh)
joinTh.appendChild(aJoin)
aJoin.appendChild(hiddenInput)

jumbotron.appendChild(descTable)
descTable.appendChild(descHead)
descHead.appendChild(descHeadTr)
descHeadTr.appendChild(descHeadTh)
descTable.appendChild(descTBody)
descTBody.appendChild(descBodyTr)
descBodyTr.appendChild(descBodyTh)
}



// <table style="width: 60%; height: 100%; border: 3px solid red; display: inline-table;">
//     <thead>
//         <tr>
//             <th style="border-bottom: 1px solid black;">Gamename-location</th>
//         </tr>
//     </thead>
//     <tbody style="border: 1px solid black;">
//         <tr>
//             <th style="height: 100%;">Example
//                 const d = new Date();
//                 d.getHours();
//                 The getMinutes() Method
//                 The getMinutes() method returns the minutes of a date as a number (0-59):
                
//                 Example
//                 const d = new Date();
//                 d.getMinutes();
//                 The getSeconds() Method
//                 The getSeconds() method returns the seconds of a date as a number (0-59):
                
//                 Example
//                 const d = new Date();
//                 d.getSeconds();
//                 The getMilliseconds() Method
//                 The getMilliseconds() method returns the milliseconds of a date as a number (0-999):
            
// </th>
//         </tr>
// </tbody>
// </table>
// </div>

//Want to restructure this to enable multiple filters at the same time
// function buten(){
//     var d = new Date()
//     var dFilter1 = document.getElementById("dateFilterDefault")
//         var dFilter2 = document.getElementById("dateFilter")
//     console.log(d)
//     console.log(d.getFullYear() + "-" + d.getDate() + "-" + d.getMonth())
//     console.log(document.getElementById("dateFilterDefault").value)
//     console.log(document.getElementById("sportFilter").value)
//     if (document.getElementById("sportFilter").value !== ""){
//     var spFilter = document.getElementById("sportFilter")
//     loadGames("?sport=" + spFilter.value)
//             //?sport=Soccer//
//     }
//     else if(document.getElementById("dateFilterDefault").value !== "" && document.getElementById("dateFilter").value == ""){
//         console.log("WANOIWNL")
//         loadGames("?startDate=" + d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate() + "&endDate="+dFilter1.value)
//         console.log(dFilter1.value)
//     }
//     else if(document.getElementById("dateFilterDefault").value !== "" && document.getElementById("dateFilter").value !== ""){
//         loadGames("?startDate=" + dFilter1.value + "&endDate=" + dFilter2.value)
//     }
    
// }

//Restructured Filter button//
function buten(){
    var firstParam = 1
    var filterQuery = "?"
    if (document.getElementById("sportFilter").value !== ""){
        filterQuery+= "sport=" + document.getElementById("sportFilter").value
        firstParam = 0
    }

    var d = new Date()
    var dFilter1 = document.getElementById("dateFilterDefault")
        var dFilter2 = document.getElementById("dateFilter")
    if (dFilter1.value !== "" && dFilter2.value == ""){
//if by this line there is another filter active adds & to the filter
if (firstParam !== 1){
    filterQuery+="&"
}
        filterQuery+= "startDate=" + d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate() + "&endDate=" + dFilter1.value
    }
    else if(dFilter1.value !== "" && dFilter2.value !== ""){
 //if by this line there is another filter active adds & to the filter
if (firstParam !== 1){
    filterQuery+="&"
}
        filterQuery+= "startDate=" + dFilter1.value + "&endDate=" + dFilter2.value
    }


    if(document.getElementById("skillFilter").value !== ""){
        console.log(document.getElementById("skillFilter").value)
        //if by this line there is another filter active adds & to the filter
if (firstParam !== 1){
    filterQuery+="&"
}
        filterQuery+= "sklLevel=" + document.getElementById("skillFilter").value
    }
    console.log(filterQuery)
    loadGames(filterQuery)
}




//Find game animations//
function filterAnim(arrow){
    if(arrow.innerHTML == "&gt;"){
        arrow.innerHTML = "&lt;"
        document.getElementById("dash").style.visibility = "visible"
    document.getElementById("dateFilter").className = "openDateFilter"
    const animated = document.querySelector('.openDateFilter');

animated.addEventListener('animationend', () => {
document.getElementById("dateFilter").className = "keepOpenDate"

});
    }
    else{
        arrow.innerHTML = "&gt;"
        document.getElementById("dash").style.visibility = "hidden"

    document.getElementById("dateFilter").className = "closeDateFilter"
    console.log(document.getElementsByClassName("closeDateFilter"))
const animated = document.querySelector('.closeDateFilter');

animated.addEventListener('animationend', () => {
document.getElementById("dateFilter").className = "defaultDate"

});
}
}
//Find game animations END//
