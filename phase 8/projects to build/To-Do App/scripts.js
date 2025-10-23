const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");

// Load saved tasks when app starts
window.addEventListener("load", loadTasks);

// Add new task
addBtn.addEventListener("click", () => {
    const taskText = input.value.trim();
    if (taskText) {
        addTask(taskText);
        input.value = "";
        saveTasks();
    }
});

// Add task by pressing Enter
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addBtn.click();
    }
});

// Add task function
function addTask(taskText, completed = false) {
    const li = document.createElement("li");
    li.textContent = taskText;

    if (completed) li.classList.add("completed");

    const delBtn = document.createElement("span");
    delBtn.textContent = "❌";
    delBtn.classList.add("delete");
    li.appendChild(delBtn);

    list.appendChild(li);
}

// Handle task clicks (complete/delete)
list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("completed");
        saveTasks();
    } else if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
        saveTasks();
    }
});

// Save tasks to localStorage
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

// Load tasks from localStorage
function loadTasks() {
    const stored = JSON.parse(localStorage.getItem("tasks")) || [];
    stored.forEach((task) => addTask(task.text, task.completed));
}
