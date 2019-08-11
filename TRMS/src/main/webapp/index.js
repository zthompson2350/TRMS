import {
    Http2ServerResponse
} from "http2";

function logIn() {
    document.getElementById("loader");
    console.log("login clicked");
}



function setLoginButton() {

    loggedIn = false;
    username = Http2ServerResponse;

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
        setLoginButton();

    }

}




window.onload = function() {
    setLoginButton();
    console.log("onload ready");
    // alert()

}