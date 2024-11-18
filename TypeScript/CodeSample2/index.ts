function generateFibonacci(n: number): number[] {
  const fib: number[] = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib.slice(0, n);
}

console.log(generateFibonacci(5)); // [0, 1, 1, 2, 3]

