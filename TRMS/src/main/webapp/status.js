var formUrl = 'http://localhost:8080/TRMS/status';

function logIn() {
    console.log("in logIn");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", formUrl, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        console.log("in logIn ORSC " + xhr.readyState);
        if(xhr.readyState == 4){
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
    xhr.onreadystatechange = function () {
        console.log("in getStatus ORSC " + xhr.readyState);

        if(xhr.readyState == 4){

            var status = JSON.parse(xhr.response);
            
            console.log(status);
            console.log(status[0]);

            document.getElementById("datesubmitted").innerHTML = new Date(status[0].datesubmitted);
            document.getElementById("datestart").innerHTML = new Date(status[0].datestart);
            document.getElementById("dateend").innerHTML = new Date(status[0].dateend);
            document.getElementById("coursedescription").innerHTML = status[0].course_description;
            document.getElementById("type").innerHTML = status[0].course_type;
            document.getElementById("gradingformat").innerHTML = status[0].grading_format;
            document.getElementById("projreim").innerHTML = status[0].projected_reimbursement;
            document.getElementById("status").innerHTML = status[0].status;
        }

    }
}

window.onload = function () {
    console.log("immediate invoked onload");
    //    document.getElementById("formid").addEventListener("submit", postForm, true);
    logIn();
    getStatus();
}
