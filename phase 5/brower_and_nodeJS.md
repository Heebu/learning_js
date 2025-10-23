# Phase 5: Tooling and Environment — Part 1  
### 🧠 Browser and Node.js Environments

In this phase, we begin stepping beyond syntax to understand **where JavaScript runs** and **how developers use tools** to make modern projects efficient and scalable.

---

## 🌍 1. JavaScript Runtime Environments

JavaScript can now run in multiple environments — not just browsers.

| Environment | Description | Common Use |
|--------------|--------------|-------------|
| **Browser** | Runs JS inside web pages. Uses the **DOM**, **Window**, and **Document** objects. | Front-end development |
| **Node.js** | A server-side JS runtime built on Chrome’s V8 engine. It exposes modules like `fs`, `path`, `http`. | Backend and CLI tools |

**Example:**  
Browser vs Node.js console
```js
// Browser environment
console.log(window.document.title); // Access DOM object

// Node.js environment
console.log(global.process.platform); // Access system info
```

✅ **Key Takeaway:**  
Browser = User Interface. Node.js = Server or Tooling Layer.

---

## 🧩 2. Using the Console

The console is your best debugging companion.

**Common Console Methods**
```js
console.log('Normal message');
console.warn('Warning!');
console.error('Error occurred');
console.table([{name: 'Idris', age: 25}, {name: 'Prime', age: 22}]);
console.time('timer');
// ...some code
console.timeEnd('timer');
```

✅ **Practice:**
- Log variables at different stages of your code.  
- Measure performance using `console.time`.

---

## ⚙️ 3. Introduction to npm and Dependencies

npm (Node Package Manager) lets you install and manage third-party packages.

**Initialize a project**
```bash
npm init -y
```

**Install packages**
```bash
npm install express
```

**Run a script**
```bash
npm start
```

**Example `package.json`**
```json
{
  "name": "tooling-demo",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.19.2"
  }
}
```

✅ **Practice:**
- Create a simple Node.js project with `npm init`.  
- Install and import any library (e.g., Lodash) and use it in a script.

---

## 🧭 4. Module Systems in Node and Browser

### **CommonJS (Node.js)**
```js
// add.js
function add(a, b) { return a + b; }
module.exports = add;

// main.js
const add = require('./add');
console.log(add(3, 4));
```

### **ES Modules (Browser / Modern Node)**
```js
// add.mjs
export function add(a, b) { return a + b; }

// main.mjs
import { add } from './add.mjs';
console.log(add(3, 4));
```

✅ **Pro Tip:**  
Always use **ES Modules (`import/export`)** in modern projects — it’s future-proof and browser-native.