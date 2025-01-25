# Type 'string' is not assignable to type 'number' in TypeScript

This repository demonstrates a common type error in TypeScript where a string value is assigned to a variable of type number.  The code includes a simple example showcasing the error, and a solution demonstrating how to correctly handle the type mismatch. 

## How to Reproduce
1. Clone this repository.
2. Open `bug.ts` and examine the code.
3. Try to compile the code using a TypeScript compiler. You'll see the type error.

## Solution
The solution involves explicitly converting the string to a number using `parseInt()` or `parseFloat()`, depending on whether you're expecting an integer or a floating-point number.  Refer to `bugSolution.ts` for a corrected version of the code.

## Lessons Learned
- Always be mindful of variable types in TypeScript.
- Explicit type conversions are necessary when dealing with values that might not have the expected type.
- Proper type handling is crucial for writing robust and reliable TypeScript code.