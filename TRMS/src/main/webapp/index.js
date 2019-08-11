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

window.onload = function() {
    setLoginButton();
    console.log("onload ready");
<<<<<<< HEAD
    //     alert()
}
=======
//     alert()
}

//GET USERNAME FROM SERVLET ON GET REQUEST
//IF USERNAME IS NOT NULL
//CALL setLoginButton(username)
>>>>>>> 609ee1fe2b922b3a52630ef20fd346262beb56d1
