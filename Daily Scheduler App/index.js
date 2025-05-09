// Retrieve tasks from local storage on load
document.addEventListener('DOMContentLoaded', loadTasks);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert("Please enter a task.");
        return;
    }

    const taskId = Date.now(); // Unique ID based on timestamp

    const task = {
        id: taskId,
        text: taskText
    };

    saveTaskToStorage(task);
    appendTaskToList(task);

    taskInput.value = ''; // Clear input field
}

// Load tasks from local storage
function loadTasks() {
    const tasks = getTasksFromStorage();
    tasks.forEach(task => appendTaskToList(task));
}

// Append task to the list
function appendTaskToList(task) {
    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.id = `task-${task.id}`;

    taskItem.innerHTML = `
        <span class="task-text">${task.text}</span>
        <button onclick="deleteTask(${task.id})">Delete</button>
    `;

    taskList.appendChild(taskItem);
}

// Save task to local storage
function saveTaskToStorage(task) {
    const tasks = getTasksFromStorage();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Get tasks from local storage
function getTasksFromStorage() {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}

// Delete task
function deleteTask(taskId) {
    const tasks = getTasksFromStorage().filter(task => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    const taskItem = document.getElementById(`task-${taskId}`);
    if (taskItem) {
        taskItem.remove();
    }
}
