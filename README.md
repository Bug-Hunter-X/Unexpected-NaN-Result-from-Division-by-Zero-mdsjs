# Unexpected NaN Result from Division by Zero in JavaScript

This repository demonstrates a subtle JavaScript bug related to division by zero.  The function `foo` handles the case where both `a` and `b` are 0, but it returns 0 instead of correctly handling the undefined result (NaN).

## Bug Description

The bug lies in the handling of the case where both inputs to the division are zero.  JavaScript will return `NaN` (Not a Number) in this situation, which might be unexpected if not specifically accounted for in error handling. The current implementation returns 0, masking the issue.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js`.
3. Run the following command in your console: `node bug.js`
4. The output will be 0, even though mathematically it should be NaN.

## Solution

The solution involves explicitly checking for and handling the `NaN` result which arises from the division of 0 by 0.  The `bugSolution.js` file demonstrates the fix.

## Learning Points

This example highlights the importance of thorough error handling, particularly when dealing with edge cases such as division by zero.  Ignoring these edge cases can lead to unpredictable and potentially difficult-to-debug behavior in applications.