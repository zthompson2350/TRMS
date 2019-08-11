window.onload = function(){
    sessionStorage.setItem("name", "filler text");
    console.log(sessionStorage.getItem("name"));

    setLoginButton(sessionStorage.getItem("name"))
}