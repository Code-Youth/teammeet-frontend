/*
function getMovies() {

    

    var request = new XMLHttpRequest();

   
    request.open('GET', 'http://www.omdbapi.com/?t=joker&y=&plot=short&r=json&apikey=b6791dd0');
    request.send();
    request.onload = ()=>{
        let movie_input = window.prompt();
        let parsedResponse = JSON.parse(request.response)
        console.log(parsedResponse);
    }
}
*/

function changeHtmlContentsById(){

    var request = new XMLHttpRequest();

    request.open('GET', 'http://www.omdbapi.com/?t=joker&y=&plot=short&r=json&apikey=b6791dd0');
    request.send();
    
    request.onload = ()=>{
        let parsedResponse = JSON.parse(request.response)
        p1_element = document.getElementById("p1")

        p1_element.innerHTML = "movie is " + parsedResponse.Title
    }
  }
