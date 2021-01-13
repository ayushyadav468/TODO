// selectors
const name = document.querySelector(".todo-input-name");
const todo = document.querySelector(".todo-input-todo");
const todoContainer = document.querySelector(".todo-container");
const messagediv = document.querySelector(".message-and-button");
const button = document.querySelector(".todo-submit-button");

// event listeners
button.addEventListener("click", showMessage);
// button.addEventListener("click", addTodo);

// functions
function showMessage(e) {
	// Prevent default action of submit button
	e.preventDefault();
	// Create a message
	const messagePar = document.createElement("div");
	messagePar.classList.add("message");
	messagediv.appendChild(messagePar);
	if (name.value.length && todo.value.length > 0) {
		messagePar.innerHTML = "<p>TODO added</p>";
		addTodo(e);
	} else {
		messagePar.innerHTML =
			"<p style='color:red;'>Name or TODO is empty!!</p>";
	}
	setTimeout(function () {
		messagediv.removeChild(messagePar);
	}, 2000);
}

function addTodo(e) {
	// Unordered List
	const todoDiv = document.createElement("div");
	todoDiv.classList.add("todo-div");
	todoContainer.appendChild(todoDiv);
	// Name Item
	const todoLIName = document.createElement("li");
	todoLIName.innerText = name.value;
	todoDiv.appendChild(todoLIName);
	// TODO Item
	const todoLITODO = document.createElement("li");
	todoLITODO.innerText = todo.value;
	todoDiv.appendChild(todoLITODO);
	// Check Button
	const todoCheckButton = document.createElement("button");
	todoCheckButton.classList.add("check-button");
	todoCheckbox.innerHTML = '<i class="fas fa-check"></i>';
	todoDiv.appendChild(todoCheckButton);
	// Delete Button
	const todoDeleteButton = document.createElement("button");
	todoDeleteButton.classList.add("delete-button");
	todoDeletebox.innerHTML = '<i class="fas fa-trash"></i>';
	todoDiv.appendChild(todoDeleteButton);
}
