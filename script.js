function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var taskText = taskInput.value.trim();
        var listItem = document.createElement("li");
        listItem.textContent = taskText;
        taskList.appendChild(listItem);
        taskInput.value = "";

        saveTask(taskText); 
    } else {
        alert("Lūdzu, ievadiet uzdevumu!");
    }
}

function saveTask(task) {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    var taskList = document.getElementById("taskList");

    tasks.forEach(function(task) {
        var listItem = document.createElement("li");
        listItem.textContent = task;
        taskList.appendChild(listItem);
    });
}
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var taskText = taskInput.value.trim();
        var listItem = document.createElement("li");
        listItem.textContent = taskText;
        
        
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Dzēst";
        deleteButton.onclick = function() {
            taskList.removeChild(listItem);
            removeTask(taskText); 
        };
        listItem.appendChild(deleteButton);
        
        taskList.appendChild(listItem);
        taskInput.value = "";

        saveTask(taskText); 
    } else {
        alert("Lūdzu, ievadiet uzdevumu!");
    }
}

function saveTask(task) {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTask(task) {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    var index = tasks.indexOf(task);
    if (index !== -1) {
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}

function loadTasks() {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    var taskList = document.getElementById("taskList");

    tasks.forEach(function(task) {
        var listItem = document.createElement("li");
        listItem.textContent = task;
        
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Dzēst";
        deleteButton.onclick = function() {
            taskList.removeChild(listItem);
            removeTask(task);
        };
        listItem.appendChild(deleteButton);
        
        taskList.appendChild(listItem);
    });
}

function toggleTasks() {
    var taskList = document.getElementById("taskList");
    var toggleButton = document.getElementById("toggleButton");

    if (taskList.style.display === "none") {
        taskList.style.display = "block";
        toggleButton.textContent = "Slēpt uzdevumus";
    } else {
        taskList.style.display = "none";
        toggleButton.textContent = "Parādīt uzdevumus";
    }
}

loadTasks(); 


loadTasks(); 
