var loginToken

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function isSignedIn(){
    console.log(getCookie("g_state"))
}

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

function handleCredentialResponse(response) {

    // decodeJwtResponse() is a custom function defined by you
    // to decode the credential response.
    const responsePayload = parseJwt(response.credential);

    console.log(loginToken)

    console.log(responsePayload)

    console.log("ID: " + responsePayload.sub);
    console.log('Full Name: ' + responsePayload.name);
    console.log('Given Name: ' + responsePayload.given_name);
    console.log('Family Name: ' + responsePayload.family_name);
    console.log("Image URL: " + responsePayload.picture);
    console.log("Email: " + responsePayload.email);

    console.log(JSON.stringify({"id_token": response.credential}))

    fetch("https://teammeet-backend-app.azurewebsites.net/api/login", {
        method: "post", 
        body: JSON.stringify({"id_token": response.credential})
      }).then(res => {
        console.log("Request complete! response:", res);
      });
 }

window.onload = function () {
    //load games
    getGames()
    
    //set up google sign in
    google.accounts.id.initialize({
      client_id: "762166936097-3ipgsitvak36e33lodlurib3efrreg8i.apps.googleusercontent.com",
      auto_select:"true",
      callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
}

