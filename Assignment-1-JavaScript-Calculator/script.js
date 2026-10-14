// Function for addition
function add(a, b) {
    return a + b;
}

// Function for subtraction
function subtract(a, b) {
    return a - b;
}

// Function for multiplication
function multiply(a, b) {
    return a * b;
}

// Function for division
function divide(a, b) {
    return a / b;
}

// Main calculator function
function calculate() {

    const num1Input = document.getElementById("num1").value;
    const num2Input = document.getElementById("num2").value;

    const num1 = Number(num1Input);
    const num2 = Number(num2Input);

    const operation = document.getElementById("operation").value;

    const result = document.getElementById("result");

    // Check if both numbers are entered
    if (num1Input === "" || num2Input === "") {
        result.innerHTML = "Please enter both numbers.";
        return;
    }

    // Prevent division by zero
    if (operation === "divide" && num2 === 0) {
        result.innerHTML = "Cannot divide by zero.";
        return;
    }

    let answer;

    // Select operation using switch
    switch (operation) {

        case "add":
            answer = add(num1, num2);
            break;

        case "subtract":
            answer = subtract(num1, num2);
            break;

        case "multiply":
            answer = multiply(num1, num2);
            break;

        case "divide":
            answer = divide(num1, num2);
            break;

        default:
            result.innerHTML = "Invalid operation.";
            return;
    }

    result.innerHTML = "Result: " + answer;
}

// Clear calculator
function clearCalculator() {

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";

    document.getElementById("operation").value = "add";

    document.getElementById("result").innerHTML =
        "Result will appear here";
}