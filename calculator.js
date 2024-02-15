
let calcHist = [];
do {
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

    calcHist.push([x, operator, y, result]);

    // Generate table
    let table = "<table border='2'><tr><th>x</th><th>Operator</th><th>y</th><th>Result</th></tr>";
    calcHist.forEach(function(calculation){
        table += "<tr>";
        calcHist.forEach(function(value){
            table += "<td>" + value + "</td>";
        });
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

