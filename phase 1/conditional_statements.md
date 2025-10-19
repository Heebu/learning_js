# Phase 1: JavaScript Conditional Statements

Conditional statements allow your program to make decisions — executing certain blocks of code only when specific conditions are met.

They’re the foundation of logic and control flow in JavaScript.

---

## 1. The `if` Statement

Executes a block of code **if** a specified condition is `true`.

```js
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}
````

If the condition is false, the code inside the `if` block won’t run.

---

## 2. The `if...else` Statement

Provides an alternative block of code to run when the condition is `false`.

```js
let age = 16;

if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("You are too young to vote.");
}
```

---

## 3. The `if...else if...else` Ladder

Allows checking **multiple conditions** in sequence.

```js
let score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 70) {
  console.log("Grade: B");
} else if (score >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
```

* The program checks each condition **top to bottom**.
* As soon as one condition is true, the rest are skipped.

---

## 4. The `switch` Statement

Used when you have **many possible values** for a variable — it’s cleaner than multiple `else if` statements.

```js
let day = "Tuesday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Tuesday":
    console.log("Second day of the week");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  default:
    console.log("Another regular day");
}
```

### Notes:

* Each `case` must end with a **`break`** to stop execution from falling through.
* The `default` case runs if no match is found.

---

## 5. The Ternary Operator (Short `if`)

A one-line shortcut for simple conditions.

```js
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"
```

Structure:
`condition ? expressionIfTrue : expressionIfFalse;`

---

## 6. Nested Conditionals

You can place one conditional statement **inside another** for more complex logic.

```js
let loggedIn = true;
let role = "admin";

if (loggedIn) {
  if (role === "admin") {
    console.log("Welcome, Admin!");
  } else {
    console.log("Welcome, User!");
  }
} else {
  console.log("Please log in.");
}
```

---

### 💡 Quick Tips

* Keep conditions **simple and readable**.
* Use `===` for strict equality to avoid type confusion.
* Prefer `switch` when checking the same variable against multiple possible values.
* For very complex logic, consider breaking code into **functions**.


