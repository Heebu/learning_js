## 🚀 **Phase 7: Frameworks and Libraries (Part 1 – Frontend Frameworks)**

### 🎯 Overview

Now that you’ve mastered vanilla JavaScript, it’s time to learn **modern frameworks** that make building large-scale web applications faster, modular, and easier to maintain.
Frontend frameworks handle **UI structure, state management, and component reusability**.

---

## ⚛️ 1. React Fundamentals

React is a **component-based** library created by Facebook for building dynamic user interfaces. It uses a **virtual DOM** to efficiently update the UI.

### 🧩 Key Concepts

* **Components**: Reusable UI blocks (functions or classes).
* **JSX**: JavaScript + HTML syntax.
* **Props**: Data passed to components.
* **State**: Internal data that changes over time.
* **Hooks**: Functions like `useState`, `useEffect` for managing logic.
* **Virtual DOM**: Efficiently updates only what’s changed.

### 🧠 Example

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;
```

---

### ⚙️ React Project Setup

You can create a new React project with:

```bash
npx create-react-app my-app
```

Or if you’re using Vite (faster build tool):

```bash
npm create vite@latest my-app --template react
```

Then run:

```bash
cd my-app
npm install
npm run dev
```

---

### 🧰 Core React Features to Master

* Components and Props
* useState and useEffect hooks
* Conditional rendering
* Lists and keys
* Controlled inputs and forms
* Context API (for global state)
* React Router (for navigation)

---

## 🌀 2. Vue.js Overview

Vue.js is known for being **approachable** and **progressive** — easy to pick up, yet powerful.

### Example:

```html
<div id="app">
  <h1>{{ message }}</h1>
  <button @click="increase">Count: {{ count }}</button>
</div>

<script>
const app = Vue.createApp({
  data() {
    return { count: 0, message: "Hello Vue!" };
  },
  methods: {
    increase() {
      this.count++;
    },
  },
});
app.mount("#app");
</script>
```

### Highlights:

* Uses **Directives** like `v-if`, `v-for`, `v-bind`.
* Two-way binding with `v-model`.
* Component-based like React but with simpler syntax.

---

## 🅰️ 3. Angular Basics

Angular (by Google) is a **complete framework** — it handles everything: routing, forms, HTTP requests, and more.

### Example:

```ts
// counter.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{ count }}</h1>
    <button (click)="increase()">Increase</button>
  `,
})
export class CounterComponent {
  count = 0;
  increase() {
    this.count++;
  }
}
```

### Highlights:

* Uses **TypeScript** by default.
* Provides **Dependency Injection** and built-in **services**.
* Perfect for **enterprise-scale** apps.

---

### 🧭 When to Choose Which

| Framework   | Best For                        | Learning Curve | Language       |
| ----------- | ------------------------------- | -------------- | -------------- |
| **React**   | Dynamic UI, startup projects    | Moderate       | JavaScript/JSX |
| **Vue.js**  | Beginners, small-to-medium apps | Easy           | JavaScript     |
| **Angular** | Large enterprise systems        | Steep          | TypeScript     |

---

### ✅ What to Practice

* Build small projects in **React** first (e.g., To-do app).
* Rebuild one project in **Vue.js** for comparison.
* Explore **Angular CLI** if you want enterprise-level understanding.
