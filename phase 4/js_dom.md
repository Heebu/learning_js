# Phase 4: DOM Manipulation and Events

The **Document Object Model (DOM)** is the structured representation of a web page.  
It allows JavaScript to **access**, **modify**, and **interact** with HTML and CSS in real time.

---

## 1. Understanding the DOM

When a webpage loads, the browser converts HTML into a **DOM tree** — each tag becomes a **node**.

Example HTML:
```html
<body>
  <h1 id="title">Welcome</h1>
  <button>Click Me</button>
</body>
````

DOM structure (simplified):

```
Document
 └── html
     └── body
         ├── h1
         └── button
```

JavaScript can manipulate any of these nodes using DOM methods.

---

## 2. Selecting Elements

### By ID

```js
const title = document.getElementById("title");
```

### By Class

```js
const buttons = document.getElementsByClassName("btn");
```

### By Tag

```js
const paragraphs = document.getElementsByTagName("p");
```

### Using Modern Selectors

```js
const firstButton = document.querySelector("button");       // first match
const allButtons = document.querySelectorAll(".btn");        // all matches
```

---

## 3. Changing Content

### Text

```js
title.textContent = "Hello World!";
```

### HTML

```js
title.innerHTML = "<em>Welcome to JavaScript</em>";
```

---

## 4. Changing Attributes

```js
const link = document.querySelector("a");
link.setAttribute("href", "https://www.google.com");
console.log(link.getAttribute("href"));
```

---

## 5. Changing Styles

```js
title.style.color = "blue";
title.style.backgroundColor = "yellow";
title.style.fontSize = "2rem";
```

Or toggle CSS classes dynamically:

```js
title.classList.add("active");
title.classList.remove("hidden");
title.classList.toggle("dark-mode");
```

---

## 6. Creating and Removing Elements

### Create

```js
const newDiv = document.createElement("div");
newDiv.textContent = "New content here!";
document.body.appendChild(newDiv);
```

### Remove

```js
newDiv.remove();
```

---

## 7. Event Handling

Events are actions the user performs — clicks, typing, hovering, etc.
You can listen and respond to them using **event listeners**.

### Example:

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  alert("Button clicked!");
});
```

---

## 8. Common Event Types

| Event       | Description                       |
| ----------- | --------------------------------- |
| `click`     | When an element is clicked        |
| `dblclick`  | When an element is double-clicked |
| `mouseover` | When mouse hovers over element    |
| `mouseout`  | When mouse leaves element         |
| `keydown`   | When a key is pressed             |
| `keyup`     | When a key is released            |
| `submit`    | When a form is submitted          |
| `input`     | When user types in a field        |

---

## 9. Event Object

Every event passes an `event` object with details about what happened.

```js
button.addEventListener("click", (event) => {
  console.log(event.type);  // "click"
  console.log(event.target); // the element clicked
});
```

---

## 10. Event Bubbling and Capturing

### Bubbling

Events move **upward** from child to parent (default behavior).

### Capturing

Events move **downward** from parent to child.

```js
document.querySelector(".child").addEventListener("click", () => {
  console.log("Child clicked");
});

document.querySelector(".parent").addEventListener("click", () => {
  console.log("Parent clicked");
});
```

Use `event.stopPropagation()` to prevent bubbling.

---

## 11. Form Events

```js
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent page reload
  const name = document.querySelector("#name").value;
  console.log("Submitted name:", name);
});
```

---

## 12. DOM Traversal

Navigate between parent, child, and sibling elements.

```js
const item = document.querySelector(".item");

console.log(item.parentElement);
console.log(item.nextElementSibling);
console.log(item.previousElementSibling);
console.log(item.children);
```

---

## 13. Mini Example – Interactive Counter

```html
<button id="increase">+</button>
<span id="count">0</span>
<button id="decrease">-</button>

<script>
  let count = 0;
  const display = document.getElementById("count");

  document.getElementById("increase").addEventListener("click", () => {
    count++;
    display.textContent = count;
  });

  document.getElementById("decrease").addEventListener("click", () => {
    count--;
    display.textContent = count;
  });
</script>
```

---

### 💡 Quick Recap

| Concept         | Description                        |
| --------------- | ---------------------------------- |
| DOM             | Tree structure of webpage elements |
| Selectors       | Access elements dynamically        |
| Content & Style | Modify text, HTML, and CSS         |
| Events          | Respond to user actions            |
| Event Object    | Gives context about interaction    |
| Traversal       | Navigate between related nodes     |

