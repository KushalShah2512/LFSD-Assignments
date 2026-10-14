// Get elements from the DOM
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");


// Function to add a new task
function addTask() {

    const taskText = taskInput.value.trim();

    // Check if the input is empty
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }


    // Create a new list item
    const listItem = document.createElement("li");

    listItem.classList.add("task");


    // Create checkbox
    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";

    checkbox.classList.add("task-checkbox");


    // Create task text
    const text = document.createElement("span");

    text.classList.add("task-text");

    text.textContent = taskText;


    // Create delete button
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.classList.add("delete-btn");


    // When checkbox is clicked
    checkbox.addEventListener("change", function () {

        if (checkbox.checked) {

            listItem.classList.add("completed");

        } else {

            listItem.classList.remove("completed");

        }

    });


    // Delete task
    deleteButton.addEventListener("click", function () {

        listItem.remove();

        updateEmptyMessage();

    });


    // Add elements to the task
    listItem.appendChild(checkbox);
    listItem.appendChild(text);
    listItem.appendChild(deleteButton);


    // Add task to the task list
    taskList.appendChild(listItem);


    // Clear input
    taskInput.value = "";

    taskInput.focus();


    // Update empty message
    updateEmptyMessage();
}


// Show/hide empty message
function updateEmptyMessage() {

    if (taskList.children.length === 0) {

        emptyMessage.style.display = "block";

    } else {

        emptyMessage.style.display = "none";

    }
}


// Press Enter to add task
taskInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        addTask();

    }

});


// Initial state
updateEmptyMessage();