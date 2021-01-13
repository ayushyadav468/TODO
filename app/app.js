// selectors
const todoText = document.querySelector('.todo-input');
const todoContainer = document.querySelector('.todo-added');
// const messagediv = document.querySelector('.message-and-button');
const addBtn = document.querySelector('.todo-add-button');

// TODO object
todo = {
	text: '',
	isCompleted: false,
};

// event listeners
addBtn.addEventListener('click', (event) => {
	event.preventDefault();
	todo.text = todoText.value;
	// Add TODO to DOM
	addTodo(todo);
});

todoContainer.addEventListener('click', (event) => {
	// Both deletion and complition of TODO
	manipulateTodo(event, todo);
});

// To add a TODO
const addTodo = (todo) => {
	// Create elements
	const newLI = document.createElement('li');
	const newPara = document.createElement('p');
	const deleteBtn = document.createElement('i');

	// Add class name
	newLI.classList.add('todo-list');
	newPara.classList.add('todo-text');
	deleteBtn.classList.add('fas', 'fa-trash-alt', 'fa-sm', 'delete');

	// Set values
	newPara.innerText = todo.text;
	if (todo.isCompleted) {
		newPara.classList.add('completed');
	}

	// Add elements to DOM
	todoContainer.appendChild(newLI);
	newLI.appendChild(newPara);
	newLI.appendChild(deleteBtn);
};

const manipulateTodo = (event, todo) => {
	const itemClicked = event.target;
	if (itemClicked.classList[3] === 'delete') {
		const todoParent = itemClicked.parentElement;
		todoParent.remove();
	}
	if (itemClicked.classList[0] === 'todo-list') {
		const todoPara = itemClicked.children[0];
		todoPara.classList.toggle('completed');
		todo.isCompleted = !todo.isCompleted;
	}
	if (itemClicked.classList[0] === 'todo-text') {
		const todoPara = itemClicked;
		todoPara.classList.toggle('completed');
		todo.isCompleted = !todo.isCompleted;
	}
};
