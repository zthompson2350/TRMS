< !DOCTYPE html >
    <
    html lang = "en" >
    <
    meta charset = "UTF-8" >
    <
    head >
    <
    link rel = "stylesheet"
href = "styles.css" >
    <
    /head> <
    body >
    <
    script >

    <
    /script> <
    ul >
    <
    li > < a class = "active"
href = "index.html" > Home < /a></li >
    <
    li > < a href = "news.html" > News < /a></li >
    <
    li > < a href = "form.html" > Tuition Reimbursement Form < /a></li >
    <
    li > < a href = "contact.html" > Contact < /a></li >
    <
    li > < a href = "about.html" > About < /a></li >
    <
    li > < a href = "registration.html" > Register < /a></li >
    <
    li class = "loader" >
    <
    div >
    <
    input type = "text"
name = "name"
placeholder = "username" >
    <
    input type = "text"
name = "name"
placeholder = "password" >
    <
    /div> <
    /li> <
    li class = "loader" > < input type = "submit"
value = "login" > < /li> <
    /ul> <
    div >
    <
    h1 class = "pe"
style = "background-color:lightskyblue;color:lightslategrey" > Registration Form < /h1>

<
div class = "row" >

    <
    form enctype = "application/json"
method = "POST"
id = "regForm" >
    <
    span class = "column" >
    <
    span >
    First Name: < input class = "inp"
type = "text"
name = "fName" > < br > < br >
    Last Name: < input class = "inp"
type = "text"
name = "lName" > < br > < br >
    Email: < input type = "email"
name = "email" > < br > < br >
    <
    /span> <
    /span> <
    span class = "column" >
    <
    span >
    Street: < input class = "inp"
type = "text"
name = "aStreet" > < br > < br >
    City: < input class = "inp"
type = "text"
name = "aCity" > < br > < br >
    State: < input class = "inp"
type = "text"
name = "aState" > < br > < br >
    Zip: < input class = "inp"
type = "number"
name = "zCode" > < br > < br >
    <
    /span>

<
/span> <
span class = "column" >
    <
    span >
    Create UserName: < input type = "text"
name = "un" > < br > < br >
    Create Password: < input type = "password"
name = "pw" > < br > < br >
    &
    nbsp;
Confirm Password: < input type = "password"
name = "cpw" > < br > < br >
    <
    /span> <
    /span> <
    /form> <
    /div>




<
form class = "center"
style = "background-color:lightgreen" > < br >
    <
    div class = "inp" >


    <
    input id = "input"
type = "submit
">&nbsp;&nbsp; <button id="
button " type="
reset " value="
Reset ">Submit</button> <br> <
    /div> <
    /form> <
    /div> <
    /body> <
    script src = "registration.js" > < /script> <
    /html>