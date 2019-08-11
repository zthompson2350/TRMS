import {
    Http2ServerRequest
} from "http2";

function login() {

}

function setLoginButton() {
    loggedIn = false;
    username = "bobbert";

    if (loggedIn) {
        document.getElementById("login").innerHTML = username + " | Log Out";
    } else {
        document.getElementById("login").innerHTML = "Log In";
        document.getElementById("login").setAttribute("href", "login.html");
    }
}


window.onload = function() {
        document.getElementById("login").addEventListener("click", login, false);
        pageload();
    }
    //////////////////////////////////////////////////////////////
    //Terry's JS

// var formUrl = 'http://localhost:8080/TRMS/TRForm';

// function logIn() {
//     console.log("in logIn");
//     let vg = document.getElementById("LoginFormSubmit").submit;
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//         console.log("in ORSC " + xhr.readyState);
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             console.log(xhr.responseText);
//         }
//     }
//     xhr.open("GET", formUrl, true);
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         console.log(JSON.parse(xhr.response));
//     }

// }