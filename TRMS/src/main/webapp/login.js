// function login() {

// }

function setLoginButton() {
    //TODO get these values from the session
    loggedIn = false;
    username = "bobbert";

    if (loggedIn) {
        document.getElementById("login").innerHTML = username + " | Log Out";
    }
    else {
        document.getElementById("login").innerHTML = "Log In";
        document.getElementById("login").setAttribute("href", "login.html");
    }
}

window.onload = function () {
    // document.getElementById("login").addEventListener("click", login, false);
    setLoginButton();
}