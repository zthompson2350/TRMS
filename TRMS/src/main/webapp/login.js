var formUrl = 'http://localhost:8080/TRMS/login';

function logOut() {
	console.log("in logOut");
	var xhr = new XMLHttpRequest();
	xhr.open("GET", formUrl, true);
	xhr.send();
//	xhr.onreadystatechange = function() {
//		console.log("in ORSC " + xhr.readyState);
//		console.log(JSON.parse(xhr.response));
//		username = JSON.parse(xhr.response);
//		if (username.username !== "null") {
//			setLoginButton(username.username);
//		} else {
//			setLoginButton(null);
//		}
//	}
}


window.onload = function() {
	logOut();
}
