import {
    Http2ServerRequest
} from "http2";
import {
    promises
} from "fs";

function setLoginButton() {
    loggedIn = false;
    //username = "bobbert";
    console.log("setting login/logout button")
        //var session = request.getSession();
        //username =session.getAttribute("name");

    if (loggedIn) {
        document.getElementById("login").innerHTML = username + " | Log Out";
    } else {
        document.getElementById("login").innerHTML = "Log In";
        document.getElementById("login").setAttribute("href", "login.html");
    }
}


var formUrl = 'http://localhost:8080/TRMS/Index';

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
    // document.getElementById("login").addEventListener("click", login, false);
    setLoginButton(); //TODO get these from the session (session.isLoggedIn and session.name)
}