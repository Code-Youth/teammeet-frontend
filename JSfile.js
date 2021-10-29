function appendGameCard(movie) {
    let jumbotronDiv = document.createElement("div")
    jumbotronDiv.setAttribute("class", "jumbotron")
    jumbotronDiv.setAttribute("id")

    let containerFluidDiv = document.createElement("div")
    containerFluidDiv.setAttribute("class", "container-fluid")

    let rowDiv = document.createElement("div")
    rowDiv.setAttribute("class", "row")

    let imgDiv = document.createElement("div")
    imgDiv.setAttribute("style","text-align: right;")
    imgDiv.setAttribute("class", "col-md-5 px-0")
    
    let img = document.createElement("img")
    img.setAttribute("id","soccer_pic")
    img.setAttribute("src",movie.Poster)
    img.setAttribute("class",'img-fluid')
    
    let colDiv = document.createElement("div")
    colDiv.setAttribute("class", "col-md-5")

    let h3 = document.createElement("h3")
    h3.setAttribute("class", "soccer_title")
    h3.innerHTML = movie.Title

    let h4 = document.createElement("h4")
    h4.innerHTML = movie.Type

    h3.appendChild(h4)
    colDiv.appendChild(h3)
    imgDiv.appendChild(img)
    rowDiv.appendChild(colDiv)
    rowDiv.appendChild(imgDiv)
    containerFluidDiv.appendChild(rowDiv)
    jumbotronDiv.appendChild(containerFluidDiv)


    console.log(jumbotronDiv)

    document.body.append(jumbotronDiv)
}



function getGames() {

    let searchInput = document.getElementById("search_input")

    fetch("https://www.omdbapi.com/?apikey=b6791dd0&s=" + searchInput.value)
    .then((resp) => resp.json())
    .then(function(data) {
        let movies = data.Search

        console.log(movies)

        for (let i = 0; i < movies.length; i++) {
            appendGameCard(movies[i])
        } 
    })
    .catch(function(error) {
        console.log(error);
    });
}

