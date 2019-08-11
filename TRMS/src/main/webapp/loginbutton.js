function setLoginButton(username) {
//    let username = "bobbert";
    console.log("setting login/logout button")
        //var session = request.getSession();
        //username =session.getAttribute("name");

   if(username !== null) {
       document.getElementById("login").innerHTML = username + " | Log Out";
   } else {
        document.getElementById("login").innerHTML = "Log In";
        document.getElementById("login").setAttribute("href", "login.html");
    }
}

function logIn() {
    console.log("in logIn");
    let vg = document.getElementById("login").submit;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        console.log("in ORSC " + xhr.readyState);
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
        }
    }
    xhr.open("GET", formUrl, true);
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(JSON.parse(xhr.response));
        setLoginButton();
    }
}

// making a nested variable global
let currentUser = global.getUser().then(
    Currentusers =>
    Promise.all(
        currentUser.map(self.displayUserName)
    )
);


window.onload = function() {
    setLoginButton(); //TODO get these from the session (session.isLoggedIn and session.name)
}

// GET USERNAME FROM SERVLET ON GET REQUEST
// IF USERNAME IS NOT NULL
// loggedIn = true;
// IF loggedIn = true
// SET UP LOGIN ON NAVBAR TO BE
// {USERNAME} + LOGOUT BUTTON
// ELSE
// SET UP LOGIN ON NAVBAR TO BE
// LOGIN BUTTON