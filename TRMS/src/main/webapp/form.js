function logIn() {
    document.getElementById("loader");
    console.log("login clicked");
}
// var lastName = document.getElementById('lName').value;
// var firstName = document.getElementById('fName').value;
// var email = document.getElementById('email').value;g



var formUrl = 'http://localhost:8080/TRMS/TRForm';


function postForm() {
    console.log("in postForm");
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        console.log("in ORSC " + xhr.readyState);
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log("responseText " + xhr.responseText);
            console.log("readyState " + xhr.readyState);
            console.log("status " + xhr.status);
        }
    }
    xhr.open("POST", formUrl, true);
    var trash = jsonBuilder();
    alert("Sending...");
    xhr.send(trash);
}

function jsonBuilder() {
    var elements = document.getElementById("formid").elements;
    var obj = {};
    for (var i = 0; i < elements.length; i++) {
        var item = elements.item(i);
        obj[item.name] = item.value;
        console.log(elements.length);
    }
    var json = JSON.stringify(obj);
    // alert(json);
    return json;
}



window.onload = function() {
    console.log("immediate invoked onload");
    document.getElementById("input").addEventListener("click", postForm, false);
    setLoginButton();
}