$(document).ready(function () {
    // Initially disable the login button
    $(".login-button").prop("disabled", true);

    // Email Validation:  Northeastern email
    $(".login-button").click(function () {
        var email = $(".input-1").val();
        const domain = "northeastern.edu";
        var check1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var emailId = document.getElementById("mail");

        if (email == "") {
            $(".hide-1").text("Email is required");
            $(".hide-1").css("color", "red");
            return false;
        } else if (!email.match(check1)) {
            $(".hide-1").text("Enter a valid email");
            $(".hide-1").css("color", "red");
            return false;
        } else if (emailId.value.indexOf(domain) == -1) {
            $(".hide-1").text("Enter a @northeastern.edu email");
            $(".hide-1").css("color", "red");
            return false;
        } else {
            $(".hide-1").text(""); // Clear error message
        }

        // Username Validation: Name length and character criteria
        var name = $(".input-2").val();
        localStorage.setItem("headerr", name);
        var check = /^[a-zA-Z\s]+/;
        
        if (name == "") {
            $(".hide-2").text("Username is required");
            $(".hide-2").css("color", "red");
            return false;
        } else if (!name.match(check)) {
            $(".hide-2").text("Enter a valid username");
            $(".hide-2").css("color", "red");
            return false;
        } else if (name.length > 20) {
            $(".hide-2").text("Maximum 20 characters allowed");
            $(".hide-2").css("color", "red");
            return false;
        } else {
            $(".hide-2").text(""); // Clear error message
        }

        // Password Validation: Basic presence check, length, and special characters
        var pass = $(".input-3").val();
        if (pass == "") {
            $(".hide-3").text("Password is required");
            $(".hide-3").css("color", "red");
            return false;
        } else if (pass.length < 8 || pass.length > 20) {
            $(".hide-3").text("Password must be 8-20 characters");
            $(".hide-3").css("color", "red");
            return false;
        } else if (!isValidPassword(pass)) {
            $(".hide-3").text("Password should contain at least one special character");
            $(".hide-3").css("color", "red");
            return false;
        } else {
            $(".hide-3").text(""); // Clear error message
        }

        // Confirm Password Validation: Check if it matches the password
        var confirmPassword = $(".input-4").val();
        if (confirmPassword == "") {
            $(".hide-4").text("Confirm your password");
            $(".hide-4").css("color", "red");
            return false;
        } else if (confirmPassword !== pass) {
            $(".hide-4").text("Passwords do not match");
            $(".hide-4").css("color", "red");
            return false;
        } else {
            $(".hide-4").text(""); // Clear error message
        }
    });

    // Clear error messages when input fields are clicked
    $(".input-1, .input-2, .input-3").click(function () {
        $(this).next(".hide").text("");
    });

    // Function to validate password for special characters
    function isValidPassword(password) {
        var specialCharRegex = /[$&+,:;=?@#|'<>.^*()%!-]/;
        return specialCharRegex.test(password);
    }

    // Validate the inputs on each change
    $(".input-1, .input-2, .input-3").on("input", function () {
        validateInputs();
    });

    // Function to validate all inputs and enable/disable the login button
    function validateInputs() {
        var email = $(".input-1");
        var username = $(".input-2");
        var password = $(".input-3");
        var confirmPassword = $(".input-4");
        var isValid = true;

        

        // Enable/disable login button
        $(".login-button").prop("disabled", !isValid);

        return isValid;
    }
});
