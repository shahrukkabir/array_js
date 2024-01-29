/*
### 3. Checking Array Membership with ‘includes’

**Instructions:**

1. Create an array of books containing different book.

2. Use the includes method to check if the array contains a javascript book.

3. Print a message to the console indicating whether the element is present in the array or not.
*/


// 1. Create an array of books containing different books
const books = ['The Great Gatsby', 'To Kill a Mockingbird', 'Harry Potter', 'JavaScript: The Good Parts', '1984'];

// 2. Use the includes method to check if the array contains a JavaScript book
const hasJavaScriptBook = books.includes('JavaScript: The Good Parts');

// 3. Print a message to the console indicating whether the element is present in the array or not
if (hasJavaScriptBook) {
    console.log('The array contains a JavaScript book.');
} else {
    console.log('The array does not contain a JavaScript book.');
}
