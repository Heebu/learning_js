
# Phase 1: JavaScript Loops

Loops allow you to execute a block of code **multiple times** until a specified condition is no longer true.

They help automate repetitive tasks — like iterating through data, counting numbers, or processing lists.

---

## 1. The `for` Loop

The most commonly used loop in JavaScript.

### Structure:
```js
for (initialization; condition; increment) {
  // code to execute each loop
}
````

### Example:

```js
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}
```

Explanation:

1. **Initialization** → runs once (`let i = 1`)
2. **Condition** → checked before each loop (`i <= 5`)
3. **Increment** → updates after each loop (`i++`)

---

## 2. The `while` Loop

Executes a block of code **as long as** the condition is true.

```js
let count = 0;

while (count < 5) {
  console.log("Count is:", count);
  count++;
}
```

Be careful — if the condition never becomes false, it will create an **infinite loop**.

---

## 3. The `do...while` Loop

Similar to `while`, but guarantees the code runs **at least once**, even if the condition is false.

```js
let num = 1;

do {
  console.log("Number:", num);
  num++;
} while (num <= 5);
```

---

## 4. The `for...of` Loop (ES6)

Used to iterate over **iterable objects** like arrays, strings, or sets.

```js
let fruits = ["apple", "banana", "mango"];

for (let fruit of fruits) {
  console.log(fruit);
}
```

---

## 5. The `for...in` Loop

Used to loop through the **keys (properties)** of an object.

```js
let user = { name: "Idris", age: 24, country: "Nigeria" };

for (let key in user) {
  console.log(key + ":", user[key]);
}
```

---

## 6. Breaking and Continuing Loops

### `break` → exits the loop entirely.

### `continue` → skips the current iteration and moves to the next one.

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skips 3
  if (i === 5) break;    // stops loop at 5
  console.log(i);
}
// Output: 1, 2, 4
```

---

## 7. Nested Loops

A loop inside another loop — useful for multi-dimensional data.

```js
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i = ${i}, j = ${j}`);
  }
}
```

---

### 💡 Quick Tips

* Use `for` when you know how many times to loop.
* Use `while` when looping depends on a condition.
* Use `for...of` for arrays or strings.
* Use `for...in` for objects.
* Always make sure your loop condition will eventually stop — to avoid infinite loops.

---

Next, we’ll explore **Functions** — how to group code into reusable blocks that make your JavaScript modular and efficient.

