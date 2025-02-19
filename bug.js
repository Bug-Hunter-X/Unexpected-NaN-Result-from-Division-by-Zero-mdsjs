function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; // This line is the bug. Should return 0/0, resulting in NaN
  }
  return a / b;
}