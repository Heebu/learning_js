
# Phase 1: JavaScript Variables

Variables are containers used to store data values in JavaScript. Think of them like labeled boxes where you can keep information — such as numbers, text, or even objects.

## 1. Declaring Variables

JavaScript provides three keywords for declaring variables:

- **`var`** – the old way (function-scoped, avoid using in modern JS)
- **`let`** – used for variables that can be reassigned
- **`const`** – used for variables whose value should not change

### Examples

```js
var name = "Idris";  // old method
let age = 24;        // can change later
const country = "Nigeria"; // cannot be changed
````

## 2. Rules for Naming Variables

* Must begin with a letter, underscore `_`, or dollar sign `$`
* Cannot start with a number
* Variable names are **case-sensitive** (`age` ≠ `Age`)
* Use camelCase for readability (`userName`, `totalAmount`)

✅ **Valid Names**

```js
let userName;
let _count;
let $price;
```

❌ **Invalid Names**

```js
let 1name;  // starts with number
let my-name; // contains hyphen
```

## 3. Reassigning Variables

Variables declared with `let` can be updated, but `const` cannot.

```js
let score = 10;
score = 20; // ✅ allowed

const pi = 3.14;
pi = 3.14159; // ❌ Error: Assignment to constant variable
```

## 4. Variable Scope

Scope defines where a variable is accessible:

* **Global scope:** accessible anywhere
* **Block scope:** limited to `{}` (if, for, function blocks)
* **Function scope:** only available inside a function

```js
let x = 10; // global
{
  let y = 20; // block-scoped
  console.log(x); // ✅ works
  console.log(y); // ✅ works
}
console.log(y); // ❌ Error: y is not defined
```

---

### Summary

| Keyword | Reassignable | Scope Type | Common Usage           |
| ------- | ------------ | ---------- | ---------------------- |
| var     | ✅ Yes        | Function   | Legacy code            |
| let     | ✅ Yes        | Block      | Most common            |
| const   | ❌ No         | Block      | Constants & references |

---

### 💡 Quick Tip

Always prefer **`let`** and **`const`** in modern JavaScript. Use `const` by default, and switch to `let` only when you know the value will change.

