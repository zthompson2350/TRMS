var formUrl = 'http://localhost:8080/TRMS/index';

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

window.onload = function() {
	logIn();
	console.log("onload ready");
}

// GET USERNAME FROM SERVLET ON GET REQUEST
// IF USERNAME IS NOT NULL
// CALL setLoginButton(username)
