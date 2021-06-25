var error = document.getElementById("error-msg");

document.getElementById('btn').addEventListener("click", function() {
    var pass = document.getElementById("pass").value;
    var email = document.getElementById("em").value;
    var pos = email.indexOf("@");

    if (email == "" || pass == "") {
        error.style.display = "block";
    } else {
        if (pass.length <= 8) {
            alert("Your Password cannot be less than 8 characters.")
        } else if (pos < 1) {
            alert("Invalid Email address, try again");
        } else if (pass.length > 8) {
            alert("Logged In Successfully")
        }
    }
});