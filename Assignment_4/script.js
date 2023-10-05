var isFormValid = false;

function checkFormValidity() {
    isFormValid = validateCommentVar && validateTitleVar && checkBoxValidate && validatefname && validatelname && validateemail && validatephone && validatestreet && validatecity && validatestate && validatezip;
    // Add more validations here if needed
    document.getElementById('submit').disabled = !isFormValid;
  }
  
var validatefname = false;
firstName.addEventListener("keyup", () => {
    const firstName = document.getElementById("firstName");
    const pattern = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;

    if (firstName.value.match(pattern) && firstName.value.length >= 1 &&  firstName.value.length < 50 ) {
        firstName.style.color = "green";
        document.getElementById("fname").innerHTML = "";
        validatefname = true;
    }
    else {
        firstName.style.color = "red";
        document.getElementById("fname").innerHTML = "Please enter valid First Name (1 - 50 characters)";
        validatefname = false;
    }
    checkFormValidity();

})

var validatelname = false;
lastName.addEventListener("keyup", () => {
    const lastName = document.getElementById("lastName");
    const pattern = /^[A-Za-z]+$/;

    if (lastName.value.match(pattern)  && lastName.value.length >= 1 &&  lastName.value.length < 50 ) {
        lastName.style.color = "green";
        document.getElementById("lname").innerHTML = "";
        validatelname = true;
    }
    else {
        lastName.style.color = "red";
        document.getElementById("lname").innerHTML = "Please enter valid Last Name (1 - 50 characters)";
        validatelname = false;
    }
    checkFormValidity();
})

var validateemail = false;
emailId.addEventListener("keyup", () => {
    const emailId = document.getElementById("emailId");
    const domain = "northeastern.edu";
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailId.value.match(pattern) && emailId.value.indexOf(domain) != -1) {
        emailId.style.color = "green";
        document.getElementById("email").innerHTML = "";
        validateemail = true;
    }
    else {
        emailId.style.color = "red";
        document.getElementById("email").innerHTML = "Please enter valid Email Id";
        validateemail = false;
    }
    checkFormValidity();
})

var validatephone = false;
phoneNumber.addEventListener("keyup", () => {
    const phoneNumber = document.getElementById("phoneNumber");
    const pattern = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

    if (phoneNumber.value.match(pattern)) {
        phoneNumber.style.color = "green";
        document.getElementById("phone").innerHTML = "";
        validatephone = true;
    }
    else {
        phoneNumber.style.color = "red";
        document.getElementById("phone").innerHTML = "Please enter valid Phone Number";
        validatephone = false;
    }
    checkFormValidity();
})

var validatestreet = false;
streetAddress1.addEventListener("keyup", () => {
    const street = document.getElementById("streetAddress1");
    // const pattern = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;

    if (street.value.length > 3 &&  street.value.length < 200 ) {
        street.style.color = "green";
        document.getElementById("streetAddress1ID").innerHTML = "";
        validatestreet = true;
    }
    else {
        street.style.color = "red";
        document.getElementById("streetAddress1ID").innerHTML = "Please enter valid Address (4 - 200 characters)";
        validatestreet = false;
    }
    checkFormValidity();
})

var validatecity = false;
city.addEventListener("keyup", () => {
    const city = document.getElementById("city");
    const pattern = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;

    if (city.value.match(pattern) && city.value.length >= 1 &&  city.value.length < 50 ) {
        city.style.color = "green";
        document.getElementById("cityid").innerHTML = "";
        validatecity = true;
    }
    else {
        city.style.color = "red";
        document.getElementById("cityid").innerHTML = "Please enter valid City (1 - 50 characters)";
        validatecity = false;
    }
    checkFormValidity();
})

var validatestate = false;
state.addEventListener("keyup", () => {
    const state = document.getElementById("state");
    const pattern = /^[A-Za-z]+$/;

    if (state.value.match(pattern) && state.value.length >= 1 &&  state.value.length < 50 ) {
        state.style.color = "green";
        document.getElementById("stateid").innerHTML = "";
        validatestate = true;
    }
    else {
        state.style.color = "red";
        document.getElementById("stateid").innerHTML = "Please enter valid State (1 - 50 characters)";
        validatestate = false;
    }
    checkFormValidity();
})

var validatezip = false;
zipcode.addEventListener("keyup", () => {
    const zipcode = document.getElementById("zipcode");
    const pattern = /^\d{5}$/;

    if (zipcode.value.match(pattern)) {
        zipcode.style.color = "green";
        document.getElementById("zip").innerHTML = "";
        validatezip = true;
    }
    else {
        zipcode.style.color = "red";
        document.getElementById("zip").innerHTML = "Please enter valid Zip Code (5 digits only)";
        validatezip = false;
    }
    checkFormValidity();
})

// 
function resetForm() {
    // Get all form elements by their IDs
    const form = document.querySelector("form");
    const elements = ["title", "firstName", "lastName", "emailId", "phoneNumber", "zipcode", "comments"];

    // Clear all input fields
    elements.forEach((elementId) => {
        const inputElement = document.getElementById(elementId);
        if (inputElement) {
            inputElement.value = "";
        }
    });

    // Clear radio buttons and checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });

    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach((radio) => {
        radio.checked = false;
    });

    // Reset the select dropdown
    const drinkTypeSelect = document.getElementById("drinktype");
    if (drinkTypeSelect) {
        drinkTypeSelect.value = "select";
    }

    // Clear and hide the checkboxes and preference section
    const checkboxDrink = document.getElementById("checkbox_drink");
    const preference = document.getElementById("preference");
    checkboxDrink.innerHTML = "";
    preference.innerHTML = "";

    // Clear validation messages
    const validationMessages = document.querySelectorAll(".validation-message");
    validationMessages.forEach((message) => {
        message.innerHTML = "";
    });
}

const resetButton = document.querySelector('input[type="reset"]');
resetButton.addEventListener("click", resetForm);



//

///// for Checkboxes 

var checkBoxValidate = false;
function validateCheckboxes() {
    const checkboxes = document.querySelectorAll('input[name="source"]');

    // Check if at least one checkbox is checked
    const atLeastOneChecked = Array.from(checkboxes).some((checkbox) => checkbox.checked);

    // Enable or disable the submit button based on checkbox status
    checkBoxValidate = atLeastOneChecked;
    checkFormValidity();
}

// Call the enableSubmitButton function whenever a checkbox is clicked
const checkboxes = document.querySelectorAll('input[name="source"]');
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", validateCheckboxes);
});

// Call the function initially to set the initial state of the submit button
validateCheckboxes();



/// for title
var validateTitleVar = false;
function validateTitle() {
    const titleRadios = document.querySelectorAll('input[name="title"]');

    // Check if any one of the title radio buttons is selected
    const anySelected = Array.from(titleRadios).some((radio) => radio.checked);

    // Enable or disable the submit button based on radio button status
    validateTitleVar = anySelected;
    checkFormValidity();
}

const titleRadios = document.querySelectorAll('input[name="title"]');
titleRadios.forEach((radio) => {
    radio.addEventListener("change", validateTitle);
});
// Call the function initially to set the initial state of the submit button
validateTitle();


var validateCommentVar = false;
function validateComments() {
    const commentsTextarea = document.getElementById("comments");

    // Check if the comments textarea contains text
    const commentsFilled = commentsTextarea.value.trim() !== "";

    // Enable or disable the submit button based on checkbox and textarea status
    validateCommentVar = commentsFilled;
    checkFormValidity();
}


const commentsTextarea = document.getElementById("comments");
commentsTextarea.addEventListener("input", validateComments);

// Call the function initially to set the initial state of the submit button
validateComments();


//////

var validationcheckbox = false;
var validationcheckboxdrink = false;


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const check_box = document.forms[0]["source"];
    const check_box_drink = document.forms[0]["drink"];
    const check_box_drinktype = document.forms[0]["drinktype"];
    const elements = ["title", "firstName", "lastName", "emailId", "phoneNumber", "streetAddress1", "city", "state", "zipcode", "comments"];
    for (i = 0; i < elements.length; i++) {
        if (document.forms[0][elements[i]].value == "") {
            alert(" Please fill " + elements[i] + " field");
            break;
        }
        if (i == elements.length - 1) {
            if (check_box[0].checked == false && check_box[1].checked == false && check_box[2].checked == false) {
                alert(" Please select a checkbox for (How did you hear)");
                validationcheckbox = false
                break;
            }
            if (check_box_drinktype.value == "select") {
                alert(" Please select a dropdown for (Which Drinks you prefer)");
                validationcheckbox = false;
            }
            if (check_box_drink[0].checked == false && check_box_drink[1].checked == false && check_box_drink[2].checked == false) {
                alert(" Please select an option for (Which Drinks you prefer)");
                validationcheckbox = false;
                break;
            }
        }
    }
    if ((check_box_drink[0].checked == true || check_box_drink[1].checked == true || check_box_drink[2].checked == true) && validatefname && validatelname && validateemail && validatephone && validatecity && validatestate
        && validatezip && document.getElementById("streetAddress1") != "") {
        if (document.getElementById("reason").value == "") {
            alert(" Please fill reason field");
        }
        else {
            validationcheckbox = true;
        }
    }

    const titles = document.querySelectorAll('input[name="title"]');
    const source = document.querySelectorAll("#source");
    for (i = 0; i < titles.length; i++) {
        if (titles[i].checked) {
            var titleans = titles[i].value;
        }
    }
    var sourceans = "";
    const hear = document.getElementsByName("source");
    for (i = 0; i < hear.length; i++) {
        if (hear[i].checked && i == hear.length - 1) {
            sourceans += hear[i].value;
            break;
        }
        else {
            if (hear[i].checked) {
                sourceans += hear[i].value + ", ";
            }
        }
    }
    const drinks = document.querySelectorAll('input[name="drink"]');
    for (i = 0; i < drinks.length; i++) {
        if (drinks[i].checked) {
            var drinkans = drinks[i].value;
        }
    }
    if (validationcheckbox && validatefname && validatelname && validateemail && validatephone && validatecity && validatestate
        && validatezip && document.getElementById("streetAddress1") != "") {

        let template = `
                <tr>
                <td>${titleans}</td>
                <td>${document.getElementById("firstName").value}</td>
                <td>${document.getElementById("lastName").value}</td>
                <td>${document.getElementById("emailId").value}</td>
                <td>${document.getElementById("phoneNumber").value}</td>
                <td>${document.getElementById("streetAddress1").value}</td>
                <td>${document.getElementById("streetAddress2").value}</td>
                <td>${document.getElementById("city").value}</td>
                <td>${document.getElementById("state").value}</td>
                <td>${document.getElementById("zipcode").value}</td>
                <td>${sourceans}</td>
                <td>${document.getElementById("comments").value}</td>
                <td>${check_box_drinktype.value}</td>
                <td>${drinkans}</td>
                <td>${document.getElementById("reason").value}</td>
                </tr>
        `;
        table.innerHTML += template;
        alert("Your details have been updated");
        form.reset();
        checkbox_drink.innerHTML = `
            <br>
            `;
        preference.innerHTML = "";
        validationcheckbox = false;
        validatefname = false;
        alidatelname = false;
        validateemail = false;
        validatephone = false;
        validatecity = false;
        validatestate = false;
        validateCommentVar = false;
        validateTitleVar = false;
        checkBoxValidate = false;
        validatezip = false;
        validatestreet = false;

    checkFormValidity();
    }
})

var validationdrink = false;
drinktype.addEventListener('change', (e) => {

    if (e.target.value == 'Hot') {
        checkbox_drink.style.display = 'block';
        checkbox_drink.innerHTML = `
        <br>
        <input id="check1" type='radio' name="drink" value="Coffee"/> Coffee
		<input id="check2" type='radio' name="drink" value="Tea"/> Tea
		<input id="check3" type='radio' name="drink" value="Hot Chocolate"/> Hot Chocolate
        <br><br>
        `;

        checkandtext();
    }
    else if (e.target.value == 'Cold') {
        checkbox_drink.style.display = 'block';
        checkbox_drink.innerHTML = `
        <br>
        <input id="check1" type='radio' name="drink" value="Mocktail"/> Mocktail
		<input id="check2" type='radio' name="drink" value="Cold Coffee"/> Cold Coffee
		<input id="check3" type='radio' name="drink" value="Raspberry Fizz"/> Raspberry Fizz
        <br><br>
        `;

        checkandtext();
    }
    else if (e.target.value == 'Alcoholic') {
        checkbox_drink.style.display = 'block';
        checkbox_drink.innerHTML = `
        <br>
        <input id="check1" type='radio' name="drink" value="Beer"/> Beer
		<input id="check2" type='radio' name="drink" value="Wine"/> Wine
		<input id="check3" type='radio' name="drink" value="Hard soda"/> Hard soda
        <br><br>
        `;

        checkandtext();
    }
    else if (e.target.value == 'Nonalcoholic') {
        checkbox_drink.style.display = 'block';
        checkbox_drink.innerHTML = `
        <br>
        <input id="check1" type='radio' name="drink" value="Chocolate"/> Chocolate
		<input id="check2" type='radio' name="drink" value="Caffeinated"/> Caffeinated
		<input id="check3" type='radio' name="drink" value="Mocktail"/> Mocktail
        <br><br>
        `;

        checkandtext();
    }
    else if (e.target.value == 'Plantbased') {
        checkbox_drink.style.display = 'block';
        checkbox_drink.innerHTML = `
        <br>
        <input id="check1" type='radio' name="drink" value="Barley"/> Barley
		<input id="check2" type='radio' name="drink" value="Maize drink"/> Maize drink
		<input id="check3" type='radio' name="drink" value="Rice drink"/> Rice drink
        <br><br>
        `;

        checkandtext();
    }
    else {
        checkbox_drink.style.display = "none";
        preference.style.display = "none";

        checkbox_drink.innerHTML = "";
    }

})

function checkandtext() {
    const check1 = document.getElementById("check1");
    check1.addEventListener("click", () => {
        if (check1.checked) {
            preference.style.display = 'block';
            preference.innerHTML = `
				<label for="reason">Reason*: </label>
                <textarea name="reason" id="reason" cols="25" rows="5"></textarea>
                `;
        }
        else {
            preference.innerHTML = "";
            preference.style.display = "none";
        }
    })

    const check2 = document.getElementById("check2");
    check2.addEventListener("click", () => {
        if (check2.checked) {
            preference.style.display = 'block';
            preference.innerHTML = `
                <label for="reason">Reason*: </label>
                <textarea name="reason" id="reason" cols="25" rows="5"></textarea>
                `;
        }
        else {
            preference.innerHTML = "";
            preference.style.display = "none";
        }
    })

    const check3 = document.getElementById("check3");
    check3.addEventListener("click", () => {
        if (check3.checked) {
            preference.style.display = 'block';
            preference.innerHTML = `
                <label for="reason">Reason*: </label>
                <textarea name="reason" id="reason" cols="25" rows="5"></textarea>
                `;
        }
        else {
            preference.innerHTML = "";
            preference.style.display = "none";
        }
    })
}



