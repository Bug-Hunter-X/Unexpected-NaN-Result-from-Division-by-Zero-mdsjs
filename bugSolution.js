function foo(a, b) {
  if (a === 0 && b === 0) {
    return NaN; // Correctly returns NaN
  }
  return a / b;
}