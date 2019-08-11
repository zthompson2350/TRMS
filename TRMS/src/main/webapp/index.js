function logIn() {
    document.getElementById("loader");
    console.log("login clicked");
}

//clear button to clear all user input
// function clearInput() {
//     document.getElementById('').value = "";
//     console.log("clear");

// }

// var clearBtn = document.getElementById('loader');
// clearBtn.addEventListener("click", clearInput);
//clear event logic done





// var subBtn = document.getElementById('100');
// subBtn.addEventListener("click", function() {
//     // var ourRequest = new XMLHttpRequest();
//     var javaData = document.getElementsByClassName("inp");
//     console.log(javaData.value);
// });


function setLoginButton() {
    loggedIn = false;
    username = "bobbert";

    if (loggedIn) {
        document.getElementById("login").innerHTML = username + " | Log Out";
    } else {
        document.getElementById("login").innerHTML = "Log In";
        // document.getElementById("login").setAttribute("href", "login.html");
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





window.onload = function() {
    setLoginButton();
    console.log("onload ready");

}