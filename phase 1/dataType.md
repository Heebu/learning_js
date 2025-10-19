
# Phase 1: JavaScript Data Types

Data types describe the kind of value a variable holds.  
JavaScript is a **dynamically typed language**, which means you don’t have to specify the data type when declaring a variable — the type is determined automatically.

---

## 1. Primitive Data Types

These are the most basic types of data in JavaScript.  
They are immutable (cannot be changed) and stored directly in memory.

### a. String
Represents text or characters.

```js
let name = "Idris";
let greeting = 'Hello';
let message = `Welcome ${name}`; // template literal
````

### b. Number

Represents both integers and decimals.

```js
let age = 25;
let price = 99.99;
```

### c. Boolean

Represents logical values — either **true** or **false**.

```js
let isOnline = true;
let isLoggedIn = false;
```

### d. Undefined

A variable that has been declared but not assigned a value.

```js
let user;
console.log(user); // undefined
```

### e. Null

Represents an intentional empty value.

```js
let car = null;
```

### f. Symbol (ES6)

Used to create unique identifiers (often for object properties).

```js
const id = Symbol("id");
```

### g. BigInt (ES2020)

Used for numbers larger than what Number can safely handle.

```js
let bigNum = 123456789012345678901234567890n;
```

---

## 2. Non-Primitive (Reference) Data Types

These types can hold multiple values and are stored as references in memory.

### a. Object

Used to store key–value pairs.

```js
let person = {
  name: "Idris",
  age: 24,
  country: "Nigeria"
};
```

### b. Array

A list-like structure for storing multiple values.

```js
let fruits = ["apple", "banana", "mango"];
```

### c. Function

Functions are also objects in JavaScript.

```js
function greet() {
  console.log("Hello!");
}
```

---

## 3. Checking Data Types

You can check the data type of variable using the `typeof` operator.

```js
typeof "Hello"; // "string"
typeof 42;      // "number"
typeof true;    // "boolean"
typeof {};      // "object"
typeof [];      // "object" (arrays are a type of object)
typeof null;    // "object" (this is a known JavaScript quirk)
```

---

## 4. Dynamic Typing Example

JavaScript allows you to change the data type of a variable on the fly.

```js
let data = "Hello"; // string
data = 100;         // now a number
```

---

### Summary Table

| Type      | Category  | Example         | Description             |
| --------- | --------- | --------------- | ----------------------- |
| String    | Primitive | "Hi"            | Text values             |
| Number    | Primitive | 42              | Numeric values          |
| Boolean   | Primitive | true / false    | Logical states          |
| Undefined | Primitive | undefined       | Unassigned variable     |
| Null      | Primitive | null            | Intentional empty value |
| Symbol    | Primitive | Symbol("id")    | Unique identifier       |
| BigInt    | Primitive | 123n            | Large integers          |
| Object    | Reference | {name: "Idris"} | Key–value pairs         |
| Array     | Reference | [1,2,3]         | Ordered list            |
| Function  | Reference | function(){}    | Reusable block of code  |

---

### 💡 Quick Tip

When in doubt, use `typeof` to check what kind of value you’re working with — it’s your debugging friend!

