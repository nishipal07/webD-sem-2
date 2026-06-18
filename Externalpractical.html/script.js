function findFactors() {
    let num = parseInt(document.getElementById("number").value);
    let factors = [];

    if (isNaN(num) || num <= 0) {
        document.getElementById("result").innerHTML =
            "Please enter a positive number.";
        return;
    }

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }

    document.getElementById("result").innerHTML =
        "Factors: " + factors.join(", ");
}
        function factorial() {
    let n = document.getElementById("number").value;
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact *= i;
    }

    document.getElementById("result").innerHTML =
        "Factorial = " + fact;
}

