# Phase 2: JavaScript Objects and Arrays

Objects and Arrays are **fundamental data structures** in JavaScript.  
They help organize, store, and manage collections of data efficiently.

---

## 1. Objects

Objects store data in **key–value pairs**.  
Each property (key) maps to a value, and values can be any data type — even other objects or functions.

### Example:
```js
let person = {
  name: "Idris",
  age: 24,
  country: "Nigeria"
};
````

---

### Accessing Object Properties

#### Dot notation:

```js
console.log(person.name); // "Idris"
```

#### Bracket notation:

```js
console.log(person["country"]); // "Nigeria"
```

---

### Adding and Updating Properties

```js
person.job = "Developer"; // Add new property
person.age = 25;          // Update existing property
```

---

### Deleting Properties

```js
delete person.country;
```

---

### Nested Objects

Objects can contain other objects.

```js
let user = {
  name: "Prime",
  contact: {
    email: "prime@example.com",
    phone: "+2348012345678"
  }
};

console.log(user.contact.email); // "prime@example.com"
```

---

### Object Methods

Functions can be stored as object properties — these are called **methods**.

```js
let car = {
  brand: "Toyota",
  start: function() {
    console.log("Car started!");
  }
};

car.start(); // Output: Car started!
```

Or using **ES6 shorthand**:

```js
let car = {
  brand: "Tesla",
  start() {
    console.log("Starting " + this.brand);
  }
};

car.start(); // Output: Starting Tesla
```

---

### Looping Through Objects

Use `for...in` to iterate through object properties.

```js
for (let key in person) {
  console.log(key + ": " + person[key]);
}
```

---

## 2. Arrays

Arrays are **ordered lists** of values, accessible by their index (starting from 0).

### Example:

```js
let fruits = ["apple", "banana", "mango"];
```

---

### Accessing Array Elements

```js
console.log(fruits[0]); // "apple"
```

---

### Modifying Arrays

```js
fruits[1] = "orange"; // Replace "banana" with "orange"
fruits.push("grape"); // Add to end
fruits.pop();         // Remove last item
fruits.unshift("lemon"); // Add to beginning
fruits.shift();          // Remove first item
```

---

### Array Length

```js
console.log(fruits.length); // Number of items in array
```

---

### Looping Through Arrays

#### Traditional `for` loop:

```js
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

#### `for...of` loop:

```js
for (let fruit of fruits) {
  console.log(fruit);
}
```

#### Using `forEach()` method:

```js
fruits.forEach((fruit) => console.log(fruit));
```

---

## 3. Common Array Methods

| Method       | Description            | Example                 | Result            |
| ------------ | ---------------------- | ----------------------- | ----------------- |
| `push()`     | Add item to end        | `arr.push("x")`         | adds `"x"`        |
| `pop()`      | Remove last item       | `arr.pop()`             | removes last      |
| `shift()`    | Remove first item      | `arr.shift()`           | removes first     |
| `unshift()`  | Add item to start      | `arr.unshift("x")`      | adds `"x"`        |
| `indexOf()`  | Find index of value    | `arr.indexOf("apple")`  | 0                 |
| `includes()` | Check if value exists  | `arr.includes("mango")` | true/false        |
| `slice()`    | Copy part of array     | `arr.slice(1,3)`        | returns new array |
| `splice()`   | Add/remove elements    | `arr.splice(2,1)`       | modifies array    |
| `concat()`   | Combine arrays         | `arr1.concat(arr2)`     | new array         |
| `join()`     | Join items into string | `arr.join(",")`         | "a,b,c"           |

---

## 4. Array Transformation Methods

Modern JavaScript offers **functional methods** to handle data easily.

### `map()` → transform values

```js
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
```

### `filter()` → select values

```js
let filtered = numbers.filter(num => num > 1);
console.log(filtered); // [2, 3]
```

### `reduce()` → accumulate values

```js
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 6
```

---

### Array of Objects Example

Often used in real-world scenarios (like APIs or UI lists).

```js
let students = [
  { name: "Idris", score: 90 },
  { name: "Prime", score: 75 },
  { name: "Enoch", score: 88 }
];

let passed = students.filter(student => student.score >= 80);
console.log(passed);
// [{ name: "Idris", score: 90 }, { name: "Enoch", score: 88 }]
```

---

### 💡 Quick Tips

* Use **objects** for structured data with named properties.
* Use **arrays** for ordered collections or lists.
* Combine both for powerful data models.
* Master `map()`, `filter()`, and `reduce()` — they’re key for modern JS.

