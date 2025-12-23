// create a faulty calculator
// this faulty calculator does following:
// 1.it takes two numbers as input from the  user
// 2. it performs wrong operations as follows:
// + --> -
// * --> +
// - --> /
// / --> **

// it performs wrong operation 10% of the Time
console.log("Faulty Calculator");

function userinput() {
    let a = Number(prompt("Enter first number:"));
    let b = Number(prompt("Enter second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");

    console.log("You entered:", a, operation, b);
   


    let random = Math.random();
     console.log("Random value:", random);

    if (random < 0.1) {
        console.log("Faulty operation performed");

        if (operation === "+") {
            console.log(a - b);
        } else if (operation === "*") {
            console.log(a + b);
        } else if (operation === "-") {
            console.log(a / b);
        } else if (operation === "/") {
            console.log(a ** b);
        }
    } else {
        console.log("Correct operation performed");

        if (operation === "+") {
            console.log(a + b);
        } else if (operation === "*") {
            console.log(a * b);
        } else if (operation === "-") {
            console.log(a - b);
        } else if (operation === "/") {
            console.log(a / b);
        }
    }
}

userinput();