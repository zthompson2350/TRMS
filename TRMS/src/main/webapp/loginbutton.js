function setLoginButton(username) {
//    let username = "bobbert";
    console.log("setting login/logout button")

    if (username !== null) {
        document.getElementById("login").innerHTML = username + " | Log Out";
    } else {
        document.getElementById("login").innerHTML = "Log In";
        document.getElementById("login").setAttribute("href", "login.html");
    }
}


window.onload = function() {
    setLoginButton();
}
