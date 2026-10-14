// Get the registration form
const form = document.getElementById("registrationForm");


// Get input fields
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");


// Get error message elements
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const passwordError = document.getElementById("passwordError");


// Get success message
const successMessage = document.getElementById("successMessage");


// Form submit event
form.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();


    // Reset previous validation
    clearErrors();


    // Get values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const password = passwordInput.value.trim();


    let isValid = true;


    // Validate name
    if (name === "") {

        showError(
            nameInput,
            nameError,
            "Name is required."
        );

        isValid = false;

    } else if (name.length < 3) {

        showError(
            nameInput,
            nameError,
            "Name must contain at least 3 characters."
        );

        isValid = false;

    } else {

        nameInput.classList.add("success");

    }


    // Validate email
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        showError(
            emailInput,
            emailError,
            "Email is required."
        );

        isValid = false;

    } else if (!emailPattern.test(email)) {

        showError(
            emailInput,
            emailError,
            "Please enter a valid email address."
        );

        isValid = false;

    } else {

        emailInput.classList.add("success");

    }


    // Validate phone
    const phonePattern = /^[0-9]{10}$/;

    if (phone === "") {

        showError(
            phoneInput,
            phoneError,
            "Phone number is required."
        );

        isValid = false;

    } else if (!phonePattern.test(phone)) {

        showError(
            phoneInput,
            phoneError,
            "Phone number must contain exactly 10 digits."
        );

        isValid = false;

    } else {

        phoneInput.classList.add("success");

    }


    // Validate password
    if (password === "") {

        showError(
            passwordInput,
            passwordError,
            "Password is required."
        );

        isValid = false;

    } else if (password.length < 6) {

        showError(
            passwordInput,
            passwordError,
            "Password must contain at least 6 characters."
        );

        isValid = false;

    } else {

        passwordInput.classList.add("success");

    }


    // If everything is valid
    if (isValid) {

        successMessage.textContent =
            "Registration successful!";

        successMessage.style.display = "block";

        form.reset();

        nameInput.classList.remove("success");
        emailInput.classList.remove("success");
        phoneInput.classList.remove("success");
        passwordInput.classList.remove("success");

    } else {

        successMessage.style.display = "none";

    }

});


// Function to show an error
function showError(input, errorElement, message) {

    input.classList.add("error");

    errorElement.textContent = message;
}


// Function to clear all errors
function clearErrors() {

    const inputs = [
        nameInput,
        emailInput,
        phoneInput,
        passwordInput
    ];

    const errors = [
        nameError,
        emailError,
        phoneError,
        passwordError
    ];


    inputs.forEach(function (input) {

        input.classList.remove("error");
        input.classList.remove("success");

    });


    errors.forEach(function (error) {

        error.textContent = "";

    });


    successMessage.style.display = "none";
}