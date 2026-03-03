const addBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

let tasks = [];
let editIndex = null;

addBtn.addEventListener("click", function() {

    const title = document.getElementById("task-input").value.trim();
    const description = document.getElementById("task-description").value.trim();
    const deadline = document.getElementById("task-deadline").value;

    if (!title || !description || !deadline) {
        alert("Please fill all fields");
        return;
    }

    const task = { title, description, deadline, completed: false };

    if (editIndex === null) {
        tasks.push(task);
    } else {
        tasks[editIndex] = task;
        editIndex = null;
        addBtn.innerText = "Add";
    }

    clearInputs();
    displayTasks();
});

function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        const card = document.createElement("div");
        card.className = "task-card";

        if (task.completed) {
            card.classList.add("completed");
        }

        card.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <p><strong>Deadline:</strong> ${task.deadline}</p>
            <div class="task-actions">
                <button class="complete-btn" onclick="toggleComplete(${index})">Complete</button>
                <button class="edit-btn" onclick="editTask(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
            </div>
        `;

        taskList.appendChild(card);
    });
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function editTask(index) {
    const task = tasks[index];

    document.getElementById("task-input").value = task.title;
    document.getElementById("task-description").value = task.description;
    document.getElementById("task-deadline").value = task.deadline;

    editIndex = index;
    addBtn.innerText = "Update";
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function clearInputs() {
    document.getElementById("task-input").value = "";
    document.getElementById("task-description").value = "";
    document.getElementById("task-deadline").value = "";
}
const addBtn = document.getElementById("add-task-btn");

let tasks = [];
let editIndex = null;

addBtn.addEventListener("click", function () {

    const title = document.getElementById("task-input").value.trim();
    const description = document.getElementById("task-description").value.trim();
    const deadline = document.getElementById("task-deadline").value;

    if (!title || !description || !deadline) {
        alert("Please fill all fields");
        return;
    }

    const today = new Date().toISOString().split("T")[0];

    const task = {
        title,
        description,
        deadline,
        completed: false,
        urgent: deadline <= today   // If deadline is today or past → urgent
    };

    if (editIndex === null) {
        tasks.push(task);
    } else {
        tasks[editIndex] = task;
        editIndex = null;
        addBtn.innerText = "Add";
    }

    clearInputs();
    displayTasks();
});

function displayTasks() {

    const urgentList = document.getElementById("urgent-list");
    const todoList = document.getElementById("todo-list");
    const completedList = document.getElementById("completed-list");

    urgentList.innerHTML = "";
    todoList.innerHTML = "";
    completedList.innerHTML = "";

    tasks.forEach((task, index) => {

        const card = document.createElement("div");
        card.className = "task-card";

        card.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <p><strong>Deadline:</strong> ${task.deadline}</p>
            <div class="task-actions">
                <button onclick="toggleComplete(${index})">Complete</button>
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;

        if (task.completed) {
            card.classList.add("completed");
            completedList.appendChild(card);
        } 
        else if (task.urgent) {
            card.classList.add("urgent");
            urgentList.appendChild(card);
        } 
        else {
            card.classList.add("todo");
            todoList.appendChild(card);
        }
    });
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function editTask(index) {
    const task = tasks[index];

    document.getElementById("task-input").value = task.title;
    document.getElementById("task-description").value = task.description;
    document.getElementById("task-deadline").value = task.deadline;

    editIndex = index;
    addBtn.innerText = "Update";
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function clearInputs() {
    document.getElementById("task-input").value = "";
    document.getElementById("task-description").value = "";
    document.getElementById("task-deadline").value = "";
}