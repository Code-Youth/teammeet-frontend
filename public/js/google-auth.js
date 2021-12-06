
function isSignedIn(){

    if (getCookie("token")){
      console.log("you're signed in!")
      return true
    }
    else {
        console.log("you're not signed in.....")
        promptOneTap()
        return false
    }
}

function signOut(){
    eraseCookie("token")
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
    //const responsePayload = parseJwt(response.credential);

    //console.log(JSON.stringify({"id_token": response.credential}))

    fetch("https://teammeet-backend-app.azurewebsites.net/api/login", {
        method: "post", 
        body: JSON.stringify({"id_token": response.credential})
      })
      .then((resp) => resp.json())
      .then(function(data) {
          setCookie("token", data.id_token, 1)
      })
      .catch(function(error) {
          console.log(error.json());
      });  
 }

function promptOneTap(){
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


