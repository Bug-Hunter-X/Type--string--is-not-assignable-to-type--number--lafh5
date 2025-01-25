function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

const num1 = "5";
const num2 = "3";
const result1 = add(parseInt(num1), parseInt(num2)); // Corrected type casting
const result2 = subtract(10, 4);
const result3 = multiply(7, 2);
const result4 = divide(100, 10);

console.log(result1, result2, result3, result4); 