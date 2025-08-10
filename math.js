// math.js
function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error('n debe ser un entero >= 0');
  }
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
}

function fibonacci(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error('n debe ser un entero >= 0');
  }
  if (n === 0) return 0;
  if (n === 1) return 1;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }
  return b;
}

module.exports = { factorial, fibonacci };
