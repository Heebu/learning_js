# Phase 1: JavaScript Operators

Operators are symbols used to perform operations on values and variables.  
They are the backbone of expressions and logic in JavaScript — everything from math to comparisons and logical decisions.

---

## 1. Arithmetic Operators

Used to perform basic mathematical calculations.

| Operator | Description | Example | Result |
|-----------|--------------|----------|---------|
| `+` | Addition | `5 + 2` | 7 |
| `-` | Subtraction | `5 - 2` | 3 |
| `*` | Multiplication | `5 * 2` | 10 |
| `/` | Division | `10 / 2` | 5 |
| `%` | Modulus (remainder) | `5 % 2` | 1 |
| `**` | Exponentiation | `2 ** 3` | 8 |
| `++` | Increment | `let a=1; a++` | 2 |
| `--` | Decrement | `let a=1; a--` | 0 |

---

## 2. Assignment Operators

Used to assign or modify values in variables.

| Operator | Description | Example | Equivalent To |
|-----------|--------------|----------|----------------|
| `=` | Assign | `x = 5` | — |
| `+=` | Add and assign | `x += 2` | `x = x + 2` |
| `-=` | Subtract and assign | `x -= 2` | `x = x - 2` |
| `*=` | Multiply and assign | `x *= 2` | `x = x * 2` |
| `/=` | Divide and assign | `x /= 2` | `x = x / 2` |
| `%=` | Modulus and assign | `x %= 2` | `x = x % 2` |

---

## 3. Comparison Operators

Used to compare two values and return a boolean (`true` or `false`).

| Operator | Description | Example | Result |
|-----------|--------------|----------|---------|
| `==` | Equal to | `5 == "5"` | true (compares value only) |
| `===` | Strict equal to | `5 === "5"` | false (compares value + type) |
| `!=` | Not equal | `5 != "5"` | false |
| `!==` | Strict not equal | `5 !== "5"` | true |
| `>` | Greater than | `7 > 5` | true |
| `<` | Less than | `7 < 5` | false |
| `>=` | Greater or equal | `5 >= 5` | true |
| `<=` | Less or equal | `3 <= 5` | true |

---

## 4. Logical Operators

Used to combine or invert boolean values.

| Operator | Description | Example | Result |
|-----------|--------------|----------|---------|
| `&&` | Logical AND | `true && false` | false |
| `||` | Logical OR | `true || false` | true |
| `!` | Logical NOT | `!true` | false |

---

## 5. String Operators

The `+` operator can also join (concatenate) strings.

```js
let first = "Java";
let second = "Script";
console.log(first + second); // "JavaScript"
````

---

## 6. Type Operators

Used to identify or manipulate data types.

| Operator     | Description                                   | Example                | Result   |
| ------------ | --------------------------------------------- | ---------------------- | -------- |
| `typeof`     | Returns the data type                         | `typeof "Hello"`       | "string" |
| `instanceof` | Checks if an object is an instance of a class | `arr instanceof Array` | true     |

---

## 7. Ternary Operator

A shorthand for `if...else` conditions.

```js
let age = 18;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status); // "Adult"
```

---

## 8. Bitwise Operators (Advanced)

Operate directly on the binary representation of numbers.

| Operator | Description | Example  | Result |    |   |
| -------- | ----------- | -------- | ------ | -- | - |
| `&`      | AND         | `5 & 1`  | 1      |    |   |
| `        | `           | OR       | `5     | 1` | 5 |
| `^`      | XOR         | `5 ^ 1`  | 4      |    |   |
| `~`      | NOT         | `~5`     | -6     |    |   |
| `<<`     | Left shift  | `5 << 1` | 10     |    |   |
| `>>`     | Right shift | `5 >> 1` | 2      |    |   |

---

### 💡 Quick Tip

* Use `===` and `!==` instead of `==` and `!=` to avoid unexpected type coercion.
* Logical operators are commonly used in conditional statements and loops.
* The ternary operator is great for quick inline decisions.
