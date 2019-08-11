var formUrl = 'http://localhost:8080/TRMS/index';

function logIn() {
    document.getElementById("loader");
    console.log("login clicked");
}


function logIn() {
    console.log("in logIn");
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

if (username !== null) {
    loggedIn = true;
    setLoginButton(username);
}

window.onload = function() {
    setLoginButton();
    console.log("onload ready");
    document.getElementById("home").addEventListener("click", logIn, false);

    alert(xhr.responseText);
    alert(JSON.parse(xhr.response));
}







//GET USERNAME FROM SERVLET ON GET REQUEST
//IF USERNAME IS NOT NULL
//CALL setLoginButton(username)