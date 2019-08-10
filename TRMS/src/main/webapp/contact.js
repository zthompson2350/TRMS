var formUrl = 'http://localhost:8080/TRMS/contact';


function submitPress() {
    console.log("in contact Form");

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
    xhr.send(trash);
    jsonBuilder();
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

}



function clearInput() {
    console.log("clear");
    document.getElementById('formid').reset();
}





window.onload = function() {
    console.log("immediate invoked onload");
    document.getElementById("submitButton").addEventListener("click", submitPress, true);
    document.getElementById("button").addEventListener("click", clearInput, true);
}