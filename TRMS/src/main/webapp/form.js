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
    let vg = document.getElementById("formid").submit;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        console.log("in ORSC " + xhr.readyState);
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
        }
    }
    xhr.open("POST", formUrl, true);
    var trash = jsonBuilder();
    jsonBuilder();
    xhr.send(trash);
}

function jsonBuilder() {
    var elements = document.getElementById("formid").elements;
    var obj = {};
    for (var i = 0; i < elements.length; i++) {
        var item = elements.item(i);
        obj[item.name] = item.value;
        console.log(elements.length);
        // alert(obj);
        // console.log(obj);
        // break;


    }
    var json = JSON.stringify(obj);
    // console.log(json);
    // alert(json);
    return json;
    break;
}



window.onload = function() {
    console.log("immediate invoked onload");
    document.getElementById("formid").addEventListener("submit", postForm, true);
    setLoginButton(); //call login.js's function setLoginButton to deal with the login/logout button
}