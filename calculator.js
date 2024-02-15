
let calcHist = [];
let valResult = [];

do {
    // Prompt for the first number
    let xInput = prompt("Value of x");
    let x = parseFloat(xInput);
    if (isNaN(x)) {
        calculationHistory.push({ x: x, operator: "", y: "", result: "wrong input number" });
        continue;
    }

    // Prompt for the second number
    let yInput = prompt("Value of y");
    let y = parseFloat(yInput);
    if (isNaN(y)) {
        calculationHistory.push({ x: x, operator: "", y: y, result: "wrong input number" });
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

    // Push cacculation details into array
    calcHist.push({x: x, operator: operator, y: y, result: result});

    // Valid results (numerical), added to valResult array
    if (typeof result === 'number') {
        valResult.push(result);
    }

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
} while (true);

