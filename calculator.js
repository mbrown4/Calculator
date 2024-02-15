while (true) {
    // Prompt for the first number
    let x = parseFloat(prompt("Value of x"));
    if (isNaN(x)) {
        alert("Invalid input. Please enter a valid number.");
        continue;
    }

    // Prompt for the second number
    let y = parseFloat(prompt("Value of y"));
    if (isNaN(y)) {
        alert("Invalid input. Please enter a valid number.");
        continue;
    }

    // Prompt for the first number
    let operator = prompt("Operator");
    let result;

    // Perform operator calculation
    switch(operator){
        case "+":
            result = x + y;
            break;
        case "-":
            result = x - y;
            break;
        case "*":
            result = x * y;
            break;
        case "/":
            result = x / y;
            break;
        case "%":
            result = x % y;
            break;
        default:
            alert("Invalid operator.")
            continue;
    }

    // Display result
    alert("Result: " + result);

    // Ask if user wants to perform another calculation
    let again = confirm("Confirm?");
    if(!again){
        break;
    }
} while (true);