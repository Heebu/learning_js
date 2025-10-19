# Phase 3: ES6 (ECMAScript 2015) Features

ES6 (ECMAScript 2015) introduced major updates to JavaScript — making it cleaner, more powerful, and easier to write modern applications.

---

## 1. `let` and `const` Declarations

Before ES6, variables were declared with `var`, which had **function scope** and caused bugs due to hoisting.  
Now we use:

```js
let name = "Idris";   // can be reassigned
const PI = 3.14159;   // cannot be reassigned
````

* `let` → block-scoped and reassignable
* `const` → block-scoped and immutable reference

---

## 2. Template Literals

Allows string interpolation using backticks (`` ` ``) instead of concatenation.

```js
let name = "Idris";
let greeting = `Hello, ${name}! Welcome to JavaScript.`;
console.log(greeting);
```

Supports **multi-line strings** and embedded expressions.

---

## 3. Arrow Functions

A shorter syntax for writing functions.

```js
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;
```

Benefits:

* Cleaner syntax
* Lexical `this` binding (keeps the same `this` context)

---

## 4. Default Parameters

You can now set default values for function parameters.

```js
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); // Hello, Guest!
```

---

## 5. Destructuring Assignment

Extract values from arrays or objects easily.

### Array Destructuring:

```js
const fruits = ["apple", "banana", "mango"];
const [first, second] = fruits;
console.log(first); // apple
```

### Object Destructuring:

```js
const user = { name: "Idris", age: 24 };
const { name, age } = user;
console.log(name, age);
```

---

## 6. Spread and Rest Operators (`...`)

### Spread — expands elements:

```js
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2); // [1, 2, 3, 4]
```

### Rest — collects remaining elements:

```js
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3)); // 6
```

---

## 7. Enhanced Object Literals

Simplified syntax when defining objects.

```js
let name = "Idris";
let age = 24;

let user = {
  name,
  age,
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};
```

---

## 8. Classes

Introduced a cleaner way to define constructor functions and inheritance.

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hi, I’m ${this.name}`);
  }
}

class Developer extends Person {
  code() {
    console.log(`${this.name} is coding...`);
  }
}

const dev = new Developer("Idris");
dev.greet();
dev.code();
```

---

## 9. Modules (import/export)

Organize code into multiple files.

### Export (in `math.js`):

```js
export const add = (a, b) => a + b;
```

### Import (in `main.js`):

```js
import { add } from "./math.js";
console.log(add(2, 3));
```

---

## 10. Promises and Async Programming

Handle asynchronous operations in a cleaner way.

```js
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data fetched!"), 1000);
});

fetchData.then(result => console.log(result));
```

Or with `async/await`:

```js
async function getData() {
  const data = await fetchData;
  console.log(data);
}

getData();
```

---

## 11. Map, Set, WeakMap, WeakSet

### Map

Stores key-value pairs.

```js
let map = new Map();
map.set("name", "Idris");
console.log(map.get("name"));
```

### Set

Stores unique values only.

```js
let set = new Set([1, 2, 2, 3]);
console.log(set); // {1, 2, 3}
```

---

## 12. The `for...of` and `for...in` Enhancements

* `for...of` → iterate over values (arrays, strings)
* `for...in` → iterate over object keys

---

### 💡 Quick Recap

| Feature           | Description                    |
| ----------------- | ------------------------------ |
| `let` / `const`   | Block-scoped variables         |
| Template Literals | Easier string formatting       |
| Arrow Functions   | Shorter syntax, lexical `this` |
| Destructuring     | Extract object/array values    |
| Spread / Rest     | Expand or collect elements     |
| Classes           | OOP in JavaScript              |
| Modules           | Import/export support          |
| Promises          | Handle async tasks             |
| Map / Set         | Data structures                |

