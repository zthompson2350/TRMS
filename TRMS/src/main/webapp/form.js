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


    }
    var json = JSON.stringify(obj);

    return json;
    break;
}



window.onload = function() {
    console.log("immediate invoked onload");
    document.getElementById("formid").addEventListener("submit", postForm, true);
}