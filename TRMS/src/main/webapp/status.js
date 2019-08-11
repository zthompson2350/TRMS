var formUrl = 'http://localhost:8080/TRMS/Status';

function logIn() {
	console.log("in logIn");
	var xhr = new XMLHttpRequest();
	xhr.open("GET", formUrl, true);
	xhr.send();
	xhr.onreadystatechange = function() {
		console.log("in ORSC " + xhr.readyState);
		console.log(JSON.parse(xhr.response));
		username = JSON.parse(xhr.response);
		if (username !== null) {
			setLoginButton(username.username);
		}
	}
}

$(document).ready(function() {


    // function to make buttons and add to page
    function populateButtons(arrayToUse, classToAdd, areaToAddTo) {
        $(areaToAddTo).empty();

        for (var i = 0; i < arrayToUse.length; i++) {
            var a = $("<button>");
            a.addClass(classToAdd);
            a.attr("data-type", arrayToUse[i]);
            a.text(arrayToUse[i]);
            $(areaToAddTo).append(a);
        }

    }

    $(document).on("click", ".admin-button", function() {
        $("#status").empty();
        $(".admin-button").removeClass("active");
        $(this).addClass("active");

        var type = $(this).attr("data-type");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
                url: queryURL,
                method: "GET"
            })
            .then(function(response) {
                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var adminDiv = $("<div class=\"admin-item\">");

                    var rating = results[i].rating;

                    var p = $("<p>").text("Rating: " + rating);

                    var animated = results[i].images.fixed_height.url;
                    var still = results[i].images.fixed_height_still.url;

                    var adminImage = $("<img>");
                    adminImage.attr("src", still);
                    adminImage.attr("data-still", still);
                    adminImage.attr("data-animate", animated);
                    adminImage.attr("data-state", "still");
                    adminImage.addClass("admin-image");

                    adminDiv.append(p);
                    adminDiv.append(adminImage);

                    $("#status").append(adminDiv);
                }
            });
    });

    $(document).on("click", ".admin-image", function() {

        var state = $(this).attr("data-state");

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });

    $("#add-admin").on("click", function(event) {
        event.preventDefault();
        var newadmin = $("input").eq(0).val();

        if (newadmin.length > 2) {
            status.push(newadmin);
        }

        populateButtons(status, "admin-button", "#admin-buttons");

    });

    populateButtons(status, "admin-button", "#admin-buttons");
});






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
    xhr.open("GET", formUrl, true);
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
//need to have JSON PARSE


window.onload = function() {
    console.log("immediate invoked onload");
    document.getElementById("formid").addEventListener("submit", postForm, true);
    logIn();
}