
let calcHist = [];
do {
    // Prompt for the first number
    let xInput = prompt("Value of x");
    let x =parseFloat(xInput);
    if (isNaN(x)) {
        alert("Invalid input. Please enter a valid number.");
        continue;
    }

    // Prompt for the second number
    let yInput = prompt("Value of y");
    let y = parseFloat(yInput);
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

    calcHist.push([x: x, operator: operator, y: y, result: result]);

    // Generate table
    let table = "<table border='2'><tr><th>x</th><th>Operator</th><th>y</th><th>Result</th></tr>";
    calcHist.forEach(function(calculation){
        table += "<tr>";
        table += "<td>" + calculation.x + "</td>";
        table += "<td>" + calculation.operator + "</td>";
        table += "<td>" + calculation.y + "</td>";
        table += "<td>" + calculation.result + "</td>";
        table += "</tr>";
    });
    table += "</table>"
    // Display table
    document.body.innerHTML = table;

    // Ask if user wants to perform another calculation
    let again = confirm("Confirm?");
    if(!again){
        break;
    }
} while (true);

