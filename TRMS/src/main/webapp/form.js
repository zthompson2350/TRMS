var formUrl = 'http://localhost:8080/TRMS/TRForm';

function logIn() {
    console.log("in logIn");
	var xhr = new XMLHttpRequest();
	xhr.open("GET", formUrl, true);
	xhr.send();
	xhr.onreadystatechange = function() {
		console.log("in ORSC " + xhr.readyState);
		console.log(JSON.parse(xhr.response));
		username = JSON.parse(xhr.response);
		if (username.username !== "null") {
			setLoginButton(username.username);
		} else {
			setLoginButton(null);
		}
	}
}

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
    return json;
}



window.onload = function() {
    console.log("immediate invoked onload");
    document.getElementById("input").addEventListener("click", postForm, false);
    logIn();
}