// function logIn() {
//     document.getElementById("loader1");
//     console.log("login clicked");
// }


var formUrl = 'http://localhost:8080/RegistrationServlet/register';

function submitPress() {
    console.log("in registration Form");

    let vg = document.getElementById("regForm").submit;
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

function clearInput() {
    console.log("clear");
    document.getElementById('regForm').elements.reset();
}

// var clearBtn = document.getElementById('button');
// clearBtn.addEventListener("click", clearInput);

// var lastName = document.getElementById('').value;


function jsonBuilder() {
    var elements = document.getElementById("regForm").elements;
    var obj = {};
    for (var i = 0; i < elements.length - 1; i++) {
        var item = elements.item(i);
        obj[item.name] = item.value;
        // obj.push(elements.item[i]);
        console.log(elements.length);
        // alert(obj);
        break;


    }
    var json = JSON.stringify(obj);
    //console.log(json);
    alert(json);
    return json;
}


window.onload = function() {
    console.log("immediate invoked onload");
    document.getElementById("input").addEventListener("click", submitPress, true); //submit button
    document.getElementById("button").addEventListener("click", clearInput, true); //reset button

    // document.getElementById("loader").addEventListener("click", logIn, true);

}