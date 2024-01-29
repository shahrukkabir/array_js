/*
### 4. Checking if it's an Array

**Instructions:**

1. Create different variables, each containing either an array or a non-array value.

2. Now use isArray to check if each variable is an array.

3. Print a message to the console indicating whether each variable is an array or not.

*/

// 1. Create different variables, each containing either an array or a non-array value
const variable1 = [1, 2, 3];
const variable2 = 'Hello, World!';
const variable3 = { name: 'John', age: 25 };
const variable4 = 42;
const variable5 = ["apple", "banana", "cherry"];

// 2. Use isArray to check if each variable is an array
const isVariable1Array = Array.isArray(variable1);
const isVariable2Array = Array.isArray(variable2);
const isVariable3Array = Array.isArray(variable3);
const isVariable4Array = Array.isArray(variable4);
const isVariable5Array = Array.isArray(variable5);

// 3. Print a message to the console indicating whether each variable is an array or not
console.log('Variable 1 is an array:', isVariable1Array);
console.log('Variable 2 is an array:', isVariable2Array);
console.log('Variable 3 is an array:', isVariable3Array);
console.log('Variable 4 is an array:', isVariable4Array);
console.log('Variable 5 is an array:', isVariable5Array);


