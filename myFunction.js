// Function that logs a string to the console
function say_Something() {
    console.log("I am something");
}

// Calling the say_Something() function
say_Something();

// Function that calculates the square of a number
function square(num) {
    return num * num;
}

// Calculating and logging the square of 10
const result = square(10);
console.log(result);

// Function that doubles each argument passed
function doubleIt(...args) {
    return args.map(e => e * 2);
}

// Doubling values in two different arrays
const result1 = doubleIt(1, 2, 3, 4);
const result2 = doubleIt(1, 2, 3, 4, 5, 6);
console.log(result1);
console.log(result2);

// Arrow function that calculates the square of the input
let doubleFunction = (input) => {
    return input * input;
}

// Calculating and logging the square of 20 using the arrow function
const result3 = doubleFunction(20);
console.log(result3);

// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("IIFE");
})();
