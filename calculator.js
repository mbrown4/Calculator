
let calcHist = [];
let valResult = [];

while (true) {
    // Prompt for the first number
    let xInput = prompt("Value of x");

    // Check if user wants to exit
    if (xInput === null) {
        break;
    }
    let x = parseFloat(xInput);

    // Prompt for the second number
    let yInput = prompt("Value of y");

    // Check if user wants to exit
    if (yInput === null) {
        break;
    }
    let y = parseFloat(yInput);

    // Prompt for the first number
    let operator = prompt("Operator");
    let result;

    // Check if user wants to exit
    if (operator === null) {
        break;
    }

    // Check if x and y are numeric
    if (isNaN(x) || isNaN(y)) {
        result = "wrong input number";
        x = xInput;
        y = yInput;
    } else {
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
                result = "compution erorr";
        }
    }

    // Push cacculation details into array
    calcHist.push({x: x, operator: operator, y: y, result: result});

    // Valid results (numerical), added to valResult array
    if (typeof result === 'number') {
        valResult.push(result);
    }

    // Generate table
    let table = "<h2>Calculation History</h2><table border='2'><tr><th>x</th><th>Operator</th><th>y</th><th>Result</th></tr>";
    calcHist.forEach(function(calculation){
        table += "<tr>";
        table += "<td>" + calculation.x + "</td>";
        table += "<td>" + calculation.operator + "</td>";
        table += "<td>" + calculation.y + "</td>";
        table += "<td>" + calculation.result + "</td>";
        table += "</tr>";
    });
    table += "</table>"
    
    // Find Max an Min
    let minResult = Math.min(...valResult);
    let maxResult = Math.max(...valResult);
    let totalResult = valResult.reduce((acc, curr) => acc + curr, 0);
    let averageResult = totalResult / valResult.length;

    // Generate the table for statistics
    table += "<h2>Statistics</h2><table border='1'><tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>";
    table += "<tr><td>" + minResult + "</td><td>" + maxResult + "</td><td>" + averageResult.toFixed(2) + "</td><td>" + totalResult + "</td></tr>";
    table += "</table>";

    // Display table
    document.body.innerHTML = table;

    // Ask if user wants to perform another calculation
    let again = confirm("Confirm?");
    if(!again){
        break;
    }
} 
//while (true);


