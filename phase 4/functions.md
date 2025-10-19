# Phase 4: Functions, Callbacks, Promises, and Async/Await

## 🧩 Functions

Functions are one of the most important parts of JavaScript.  
They allow you to group code into reusable blocks that can be called whenever needed.  

You can create a function using the `function` keyword:

```js
function greet() {
  console.log("Hello, World!");
}
```

You call (or invoke) a function by writing its name followed by parentheses:

```js
greet(); // Output: Hello, World!
```

Functions can also accept parameters — values that can change each time the function is called:

```js
function greetUser(name) {
  console.log("Hello, " + name + "!");
}

greetUser("Idris"); // Output: Hello, Idris!
```

You can also **return** values from functions:

```js
function add(a, b) {
  return a + b;
}
```

When you call this function, it returns a value that you can store or use:

```js
let result = add(2, 3); // result = 5
```

### Function Expressions

You can also assign a function to a variable.  
This is called a **function expression**:

```js
const multiply = function (x, y) {
  return x * y;
};
```

### Arrow Functions (ES6)

Introduced in ES6, arrow functions provide a cleaner syntax:

```js
const divide = (a, b) => a / b;
```

If the function has only one parameter, you can skip the parentheses:

```js
const square = x => x * x;
```

Arrow functions are shorter and great for inline or callback usage.

---

## 🔁 Callback Functions

A **callback** is a function passed as an argument to another function.  
They are often used when something takes time to complete — like waiting for data to load.

Example:

```js
function fetchData(callback) {
  console.log("Fetching data...");
  callback();
}

function onDataFetched() {
  console.log("Data has been fetched!");
}

fetchData(onDataFetched);
```

Here, `onDataFetched` is the callback function. It runs **after** `fetchData` finishes.

However, using too many callbacks can lead to messy code — often called **callback hell**.

---

## 🧠 Promises

**Promises** make it easier to handle asynchronous operations.  
A promise represents a task that will finish in the future — either successfully or with an error.

Example:

```js
const task = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task completed!");
  } else {
    reject("Task failed!");
  }
});

task
  .then(result => console.log(result))
  .catch(error => console.log(error));
```

- `resolve()` means the promise was successful.  
- `reject()` means something went wrong.  
- `.then()` runs when the promise is fulfilled.  
- `.catch()` handles errors.

Promises make code easier to read than nested callbacks.

---

## ⚡ Async and Await

`async` and `await` make working with promises even simpler and more readable.  
They let you write asynchronous code that looks synchronous.

Example:

```js
async function loadData() {
  try {
    let data = await fetch("https://api.example.com/data");
    console.log("Data loaded successfully");
  } catch (error) {
    console.log("Error loading data:", error);
  }
}

loadData();
```

- The `async` keyword marks a function as asynchronous.  
- The `await` keyword pauses the function until a promise resolves.  
- Errors can be caught using `try...catch`.

Async/await helps you write clean, readable asynchronous code without chaining `.then()` multiple times.

