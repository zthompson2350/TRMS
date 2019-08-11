function setLoginButton() {
    //TODO get these values from the session
    let loggedIn = false;
    let username = "bobbert";
    console.log("setting login/logout button")
	//var session = request.getSession();
    //username =session.getAttribute("name");

    if (loggedIn) {
        document.getElementById("login").innerHTML = username + " | Log Out";
    }
    else {
        document.getElementById("login").innerHTML = "Log In";
        document.getElementById("login").setAttribute("href", "login.html");
    }
}

window.onload = function () {
    setLoginButton(); //TODO get these from the session (session.isLoggedIn and session.name)
}