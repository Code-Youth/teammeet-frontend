function getMovies() {

    

    var request = new XMLHttpRequest();


    request.open('GET', 'http://www.omdbapi.com/?t=joker&y=&plot=short&r=json&apikey=b6791dd0');
    request.send();
    request.onload = ()=>{
        let parsedResponse = JSON.parse(request.response)
        console.log(parsedResponse);
    }
}

