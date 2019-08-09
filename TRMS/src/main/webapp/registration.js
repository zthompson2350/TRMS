function logIn() {
    document.getElementById("loader");
    console.log("login clicked");
}

var subBtn = document.getElementById('100');
subBtn.addEventListener("click", function() {
    // var ourRequest = new XMLHttpRequest();
    var javaData = document.getElementsByClassName("inp");
    console.log(javaData.value);
});



function clearInput() {
    document.getElementById('200').value = "";
    console.log("clear");

}

var clearBtn = document.getElementById('200');
clearBtn.addEventListener("click", clearInput);

var lastName = document.getElementById('').value;


window.onload = function() {
    console.log("immediate invoked onload");
    document.getElementById("pizzaForm").addEventListener("click", sunbmitPress, true);
}