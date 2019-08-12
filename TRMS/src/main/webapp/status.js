var formUrl = 'http://localhost:8080/TRMS/status';

function logIn() {
	console.log("in logIn");
	var xhr = new XMLHttpRequest();
	xhr.open("GET", formUrl, true);
	xhr.send();
	xhr.onreadystatechange = function() {
		console.log("in logIn ORSC " + xhr.readyState);
		if (xhr.readyState == 4) {
			console.log(JSON.parse(xhr.response));
			username = JSON.parse(xhr.response);
			if (username.username !== "null") {
				setLoginButton(username.username);
			} else {
				setLoginButton(null);
			}
		}
	}
}

function getStatus() {
	console.log("in getStatus")

	var xhr = new XMLHttpRequest();
	xhr.open("POST", formUrl, true);
	xhr.send();
	xhr.onreadystatechange = function() {
		console.log("in getStatus ORSC " + xhr.readyState);

		if (xhr.readyState == 4) {

			var status = JSON.parse(xhr.response);
			let table = document.getElementById("formTable");
			let row = table.rows[1].cells
			console.log(status);
			console.log(status[0]);
			let i = 0;
			while (i < status.length) {
				row[0].innerHTML = new Date(status[i].datesubmitted);
				row[1].innerHTML = new Date(status[i].datestart);
				row[2].innerHTML = new Date(status[i].dateend);
				row[3].innerHTML = status[i].course_description;
				row[4].innerHTML = status[i].course_type;
				row[5].innerHTML = status[i].grading_format;
				row[6].innerHTML = status[i].projected_reimbursement;
				row[7].innerHTML = status[i].status;
				i++;
				if (i < status.length) {
					row = table.insertRow();
					row.insertCell(0);
					row.insertCell(1);
					row.insertCell(2);
					row.insertCell(3);
					row.insertCell(4);
					row.insertCell(5);
					row.insertCell(6);
					row.insertCell(7);
					row = table.rows[i+1].cells;
				}
			}
		}

	}
}

window.onload = function() {
	console.log("immediate invoked onload");
	// document.getElementById("formid").addEventListener("submit", postForm,
	// true);
	logIn();
	getStatus();
}
