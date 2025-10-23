## 🧱 **Phase 8: Mastery Projects**

### 📝 Project 1 — To-Do App

#### 🎯 Objective

Build a simple **To-Do List Application** using **plain JavaScript**, **HTML**, and **CSS**.
You’ll learn how to manage data, update the DOM dynamically, and persist tasks using **Local Storage**.

---

### 🧠 Core Concepts Covered

* DOM manipulation (creating, deleting, updating elements)
* Event handling (clicks, inputs)
* Local Storage (saving tasks persistently)
* Functions, arrays, and objects in practice
* Conditional logic and loops for UI updates

---

### 🏗️ Step-by-Step Breakdown

#### 1. Setup the Structure

Create three main files:

```
index.html
style.css
script.js
```

#### 2. Basic HTML Layout

Include:

* An input field for new tasks
* A button to add the task
* A list container to display tasks

Structure example:

```html
<div class="todo-container">
  <h1>My To-Do List</h1>
  <input type="text" id="taskInput" placeholder="Add a new task..." />
  <button id="addBtn">Add</button>
  <ul id="taskList"></ul>
</div>
```

---

#### 3. Adding Tasks

* Get the user’s input.
* Create a new list item (`<li>`).
* Append it to the task list dynamically.

```js
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

document.getElementById("addBtn").addEventListener("click", () => {
  const taskText = input.value.trim();
  if (taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;
    list.appendChild(li);
    input.value = "";
  }
});
```

---

#### 4. Marking Tasks as Completed

* Add an event listener to toggle “completed” style.
* Use CSS (e.g., line-through) for visual feedback.

```js
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("completed");
  }
});
```

CSS example:

```css
.completed {
  text-decoration: line-through;
  color: gray;
}
```

---

#### 5. Deleting Tasks

Add a small "❌" or trash icon next to each task.

```js
const li = document.createElement("li");
li.textContent = taskText;

const delBtn = document.createElement("span");
delBtn.textContent = "❌";
delBtn.classList.add("delete");
li.appendChild(delBtn);

list.appendChild(li);
```

Handle delete:

```js
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});
```

---

#### 6. Saving to Local Storage

Make the tasks persistent — even after a page reload.

```js
function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach((li) => {
    tasks.push({
      text: li.firstChild.textContent,
      completed: li.classList.contains("completed"),
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const stored = JSON.parse(localStorage.getItem("tasks")) || [];
  stored.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task.text;
    if (task.completed) li.classList.add("completed");

    const delBtn = document.createElement("span");
    delBtn.textContent = "❌";
    delBtn.classList.add("delete");
    li.appendChild(delBtn);

    list.appendChild(li);
  });
}

loadTasks();
```

Then call `saveTasks()` whenever a task is added, deleted, or toggled.

---

### 🎨 Optional Enhancements

* Add filter options (All / Completed / Pending)
* Animate new task additions or deletions
* Add task editing support
* Implement dark mode toggle

---

### 🧩 Learning Outcome

After completing this project, you’ll be comfortable with:

* Handling and manipulating DOM elements dynamically
* Managing app state in JS
* Storing and retrieving data from the browser
* Structuring your app cleanly into reusable functions

