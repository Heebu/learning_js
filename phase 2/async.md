# Phase 2: Asynchronous JavaScript

JavaScript is **single-threaded**, meaning it executes one task at a time.  
But in the real world, we often need to handle **time-consuming operations** — like fetching data from a server — **without freezing** the rest of the program.

Asynchronous JavaScript enables you to do just that.  
Let’s explore how it works.

---

## 1. Synchronous vs Asynchronous

### Synchronous Example
```js
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
// Executes line by line
````

### Asynchronous Example

```js
console.log("Task 1");

setTimeout(() => {
  console.log("Task 2 (after 2 seconds)");
}, 2000);

console.log("Task 3");
```

Output:

```
Task 1
Task 3
Task 2 (after 2 seconds)
```

JavaScript doesn’t wait for `setTimeout` to finish — it moves on.

---

## 2. The Event Loop

The **Event Loop** manages how JavaScript handles asynchronous operations.
It constantly checks:

* **Call Stack** (where functions execute)
* **Callback Queue** (waiting async tasks)

When the stack is clear, the event loop moves tasks from the queue to be executed.

---

## 3. Callbacks

A **callback** is a function passed as an argument to another function — executed later.

```js
function fetchData(callback) {
  setTimeout(() => {
    callback("Data loaded!");
  }, 2000);
}

fetchData((result) => {
  console.log(result);
});
```

**Problem:**
When callbacks depend on other callbacks, you get **callback hell** 😩

```js
getUser(() => {
  getPosts(() => {
    getComments(() => {
      console.log("Too nested!");
    });
  });
});
```

---

## 4. Promises

A **Promise** is an object representing the eventual completion or failure of an async operation.

```js
const fetchData = new Promise((resolve, reject) => {
  let success = true;
  setTimeout(() => {
    if (success) resolve("Data fetched!");
    else reject("Error fetching data!");
  }, 2000);
});

fetchData
  .then((result) => console.log(result))
  .catch((error) => console.error(error))
  .finally(() => console.log("Operation complete"));
```

Promise states:

* **Pending** → still running
* **Fulfilled** → completed successfully (`resolve`)
* **Rejected** → failed (`reject`)

---

## 5. Async / Await

A cleaner way to handle Promises introduced in ES8 (2017).
It lets you write asynchronous code that looks **synchronous**.

```js
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data loaded!"), 2000);
  });
};

async function getData() {
  console.log("Fetching...");
  const result = await fetchData();
  console.log(result);
}

getData();
```

### Error Handling with `try...catch`:

```js
async function loadUser() {
  try {
    const user = await fetchUser();
    console.log(user);
  } catch (error) {
    console.error("Failed to fetch user:", error);
  }
}
```

---

## 6. `fetch()` API

Used for making network requests.

```js
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

Or using `async/await`:

```js
async function loadData() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();
  console.log(data);
}
```

---

## 7. `Promise.all`, `Promise.race`, `Promise.allSettled`

### `Promise.all` → waits for all Promises to complete:

```js
Promise.all([fetchData1(), fetchData2()])
  .then(([res1, res2]) => console.log(res1, res2));
```

### `Promise.race` → returns the first one that resolves:

```js
Promise.race([fetchData1(), fetchData2()])
  .then((winner) => console.log("Fastest:", winner));
```

### `Promise.allSettled` → waits for all, regardless of outcome:

```js
Promise.allSettled([fetchData1(), fetchData2()])
  .then((results) => console.log(results));
```

---

## 8. Microtasks and Macrotasks

JavaScript’s async behavior is split into two queues:

* **Microtasks** → Promises, MutationObservers
* **Macrotasks** → setTimeout, setInterval, I/O

Microtasks run **before** macrotasks in the event loop.

---

## 9. setTimeout and setInterval

### `setTimeout` → runs once after a delay.

```js
setTimeout(() => console.log("Hello after 2s"), 2000);
```

### `setInterval` → repeats code every interval.

```js
setInterval(() => console.log("Tick"), 1000);
```

To stop it:

```js
let counter = 0;
let timer = setInterval(() => {
  counter++;
  console.log(counter);
  if (counter === 3) clearInterval(timer);
}, 1000);
```

---

### 💡 Quick Recap

| Concept     | Purpose                           |
| ----------- | --------------------------------- |
| Callbacks   | Basic async handling              |
| Promises    | Cleaner async flow                |
| Async/Await | Synchronous-like async code       |
| fetch()     | Make HTTP requests                |
| Promise.all | Run multiple async tasks together |
| Event Loop  | Manages async execution order     |

