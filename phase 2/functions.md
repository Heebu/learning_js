
# Phase 2: JavaScript Functions

Functions are reusable blocks of code designed to perform a specific task.  
They allow you to structure your program into smaller, manageable parts.

---

## 1. Declaring a Function

A function is defined using the `function` keyword.

```js
function greet() {
  console.log("Hello, World!");
}
````

To execute (or **call**) a function, simply use its name followed by parentheses:

```js
greet(); // Output: Hello, World!
```

---

## 2. Function Parameters and Arguments

Functions can accept **parameters** (inputs) to work with dynamic data.

```js
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Idris"); // Output: Hello, Idris!
```

* **Parameters** → placeholders in the function definition
* **Arguments** → actual values passed when calling the function

---

## 3. The `return` Statement

Functions can return values using the `return` keyword.

```js
function add(a, b) {
  return a + b;
}

let result = add(3, 4);
console.log(result); // Output: 7
```

Once a `return` executes, the function stops running.

---

## 4. Function Expressions

Functions can also be stored in variables.

```js
const multiply = function(x, y) {
  return x * y;
};

console.log(multiply(4, 5)); // Output: 20
```

> Function expressions are not hoisted — meaning you can only call them after defining them.

---

## 5. Arrow Functions (ES6)

Arrow functions provide a **shorter, cleaner syntax** for writing functions.

### Basic syntax:

```js
const greet = () => {
  console.log("Hello!");
};
```

### With parameters:

```js
const greetUser = (name) => {
  console.log(`Hello, ${name}!`);
};
```

### Single-line return (implicit return):

If the function body has only one expression, you can omit `return` and curly braces.

```js
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
```

---

## 6. Differences Between Regular and Arrow Functions

| Feature        | Regular Function   | Arrow Function                        |
| -------------- | ------------------ | ------------------------------------- |
| Syntax         | Longer             | Shorter                               |
| `this` keyword | Has its own `this` | Inherits `this` from the parent scope |
| Hoisting       | Hoisted            | Not hoisted                           |
| Use cases      | General purpose    | Callbacks, one-liners, concise logic  |

---

### Example: `this` Behavior Difference

```js
const user = {
  name: "Idris",
  regularFunc: function() {
    console.log("Regular:", this.name);
  },
  arrowFunc: () => {
    console.log("Arrow:", this.name);
  }
};

user.regularFunc(); // Regular: Idris
user.arrowFunc();   // Arrow: undefined (inherits global 'this')
```

---

## 7. Default Parameters

You can give parameters a **default value** in case no argument is provided.

```js
function greet(name = "Guest") {
  console.log("Hello, " + name);
}

greet();       // Output: Hello, Guest
greet("Prime"); // Output: Hello, Prime
```

---

## 8. Rest Parameters (`...`)

Used when you don’t know how many arguments will be passed.

```js
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
```

---

## 9. Function Scope

Variables declared inside a function are **local** — they can’t be accessed outside.

```js
function sayHello() {
  let message = "Hello there!";
  console.log(message); // Works
}

sayHello();
console.log(message); // ❌ Error: message is not defined
```

---

### 💡 Quick Tips

* Use **regular functions** for methods and when you need `this`.
* Use **arrow functions** for short, callback-style logic.
* Always name your functions meaningfully — it helps readability.
* Keep functions small and focused — one job per function.


