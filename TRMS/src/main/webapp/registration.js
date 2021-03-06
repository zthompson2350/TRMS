var formUrl = 'http://localhost:8080/TRMS/register';

function submitPress() {
    console.log("in registration Form");
    var xhr = new XMLHttpRequest();
    xhr.open("POST", formUrl, true);
    xhr.onreadystatechange = function() {
        console.log("in ORSC " + xhr.readyState);
        if (xhr.readyState == 4) {
        }
    }
    var trash = jsonBuilder();
    console.log(xhr.status);
    console.log(xhr.readyState);
    alert("Sending...")
    xhr.send(trash);        	
}

function clearInput() {
    console.log("clear");
    document.getElementById('regForm').reset();
}


function jsonBuilder() {
    var elements = document.getElementById("regForm").elements;
    var obj = {};
    for (var i = 0; i < elements.length; i++) {
        var item = elements.item(i);
        obj[item.name] = item.value;
        console.log(elements.length);
    }
    var json = JSON.stringify(obj);
    //    alert(json);
    return json;
}


window.onload = function() {
    console.log("immediate invoked onload");
    document.getElementById("input").addEventListener("click", submitPress, false); //submit button
    document.getElementById("button").addEventListener("click", clearInput, false); //reset button
}