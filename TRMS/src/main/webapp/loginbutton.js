function setLoginButton(username) {
    console.log("setting login/logout button")

    document.getElementById("login").setAttribute("href", "login.html");

    if (username !== null) {
        document.getElementById("login").innerHTML = username + " | Log Out";
    } else {
        document.getElementById("login").innerHTML = "Log In";
    }
}


window.onload = function() {
    setLoginButton();
}
