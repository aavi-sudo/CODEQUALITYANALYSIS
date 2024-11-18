function calculator(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : null;
    default:
      return null;
  }
}

console.log(calculator(10, 5, "+")); // 15
console.log(calculator(10, 5, "/")); // 2

