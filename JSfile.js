function getGames() {

    let searchInput = document.getElementById("search_input")

    fetch("https://www.omdbapi.com/?apikey=b6791dd0&s=" + searchInput.value)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data.Search)
    })
    .catch(function(error) {
        console.log(error);
    });
}

