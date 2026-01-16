//Find the Factorial
function Factorial(Number) {
    let fact = 1;   
    for (let i = 1; i <= Number; i++) {
        fact = fact * i;
    }
    return fact;
}
const input = 5;
const result = Factorial(input);
console.log(result);    