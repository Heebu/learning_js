## ⚙️ **Phase 7: Frameworks and Libraries (Part 2 – Backend with JavaScript)**

### 🎯 Overview

The backend is where your app handles logic, stores data, and communicates with external systems.
Using **Node.js** and **Express.js**, JavaScript developers can build full-stack apps without switching languages.

---

## 🟩 1. Node.js Fundamentals

### 🔍 What is Node.js?

Node.js is a **JavaScript runtime** built on Chrome’s **V8 engine** that allows you to run JS **outside the browser**.

### 🧠 Why It’s Powerful

* Non-blocking, event-driven I/O
* Uses the same JS syntax as frontend
* Perfect for real-time apps (chat, streaming)

### ⚙️ Installation

Download from [nodejs.org](https://nodejs.org)
Check version:

```bash
node -v
npm -v
```

---

### 🧱 Core Concepts

#### 1. Modules

Organize your code into separate files.

```js
// math.js
export function add(a, b) {
  return a + b;
}

// index.js
import { add } from "./math.js";
console.log(add(3, 5)); // 8
```

#### 2. Built-in Modules

* `fs` → file system
* `http` → create servers
* `path` → handle file paths

Example:

```js
import http from "http";

const server = http.createServer((req, res) => {
  res.end("Hello from Node.js server!");
});

server.listen(3000, () => console.log("Server running on port 3000"));
```

---

## 🚀 2. Building REST APIs with Express.js

### 🧩 What is Express?

Express is a minimal and flexible **web framework** for Node.js. It makes routing and handling requests easier.

### 🛠️ Install and Setup

```bash
npm init -y
npm install express
```

### 🧠 Example: Basic Server

```js
import express from "express";
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Express API!");
});

app.post("/data", (req, res) => {
  res.json({ received: req.body });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
```

---

### 📡 CRUD Operations

```js
let users = [];

// CREATE
app.post("/users", (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
});

// READ
app.get("/users", (req, res) => res.json(users));

// UPDATE
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  users[id] = req.body;
  res.json(users[id]);
});

// DELETE
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  users.splice(id, 1);
  res.json({ message: "User deleted" });
});
```

---

## 🗃️ 3. Introduction to Databases

### 🧩 Two Main Types

| Type                       | Example           | Description                               |
| -------------------------- | ----------------- | ----------------------------------------- |
| **SQL (Relational)**       | PostgreSQL, MySQL | Structured tables and relationships       |
| **NoSQL (Document-based)** | MongoDB           | Flexible schema using JSON-like documents |

---

### 🍃 Using MongoDB

Install:

```bash
npm install mongoose
```

Connect:

```js
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/myapp")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error(err));
```

Define a Schema:

```js
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model("User", userSchema);
```

Example Routes:

```js
// CREATE user
app.post("/users", async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
});

// GET users
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});
```

---

### 🐘 Using PostgreSQL (Optional SQL Example)

Install dependencies:

```bash
npm install pg
```

Basic connection:

```js
import pkg from "pg";
const { Client } = pkg;

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "testdb",
  password: "password",
  port: 5432,
});

await client.connect();
console.log("Connected to PostgreSQL");
```

---

### ⚡ Combine Backend + Frontend

Once your backend API is ready:

* Use `fetch()` or `axios` in React to call Express endpoints.
* Example:

```js
const res = await fetch("http://localhost:3000/users");
const users = await res.json();
```

---

### ✅ What to Practice

* Build a simple **CRUD API** with Express and MongoDB.
* Add routes for **authentication (login/register)**.
* Connect your **React frontend** to your Node API.