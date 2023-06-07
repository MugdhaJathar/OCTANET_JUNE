// Get the input field, button, and task list
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
  const taskText = taskInput.value;

  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerText = taskText;

    li.addEventListener("click", toggleTask);

    taskList.appendChild(li);
    taskInput.value = "";
  }
}

// Function to toggle task completion
function toggleTask() {
  this.classList.toggle("completed");
}

// Event listener for the add task button
addTaskBtn.addEventListener("click", addTask);
