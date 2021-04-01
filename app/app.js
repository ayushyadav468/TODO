// selectors
const todoText = document.querySelector('.card-input');
const todoContainer = document.querySelector('.todo-added');
// const messagediv = document.querySelector('.message-and-button');
const addBtn = document.querySelector('.card-add-button');

// TODO object
todo = {
	text: '',
	isCompleted: false,
};

// event listeners
document.addEventListener('DOMContentLoaded', () => {
	getFromLocalStorage();
});

addBtn.addEventListener('click', (event) => {
	event.preventDefault();
	todo.text = todoText.value;
	todoText.value = '';
	// Add TODO to DOM
	addTodo(todo);
	// Add to local storage
	addTODOToLocalStorage(todo);
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

// Delete and check TODO
const manipulateTodo = (event, todo) => {
	const itemClicked = event.target;
	if (itemClicked.classList[3] === 'delete') {
		const todoParent = itemClicked.parentElement;
		removeTODOFromLocalStorage(todoParent);
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

// Store in local storage
const addTODOToLocalStorage = (todo) => {
	let todos;
	if (localStorage.getItem('todos') === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todos'));
	}
	todos.push(todo);
	localStorage.setItem('todos', JSON.stringify(todos));
};

const getFromLocalStorage = () => {
	let todos;
	if (localStorage.getItem('todos') === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todos'));
	}
	todos.forEach((todo) => {
		addTodo(todo);
	});
};

const removeTODOFromLocalStorage = (todo) => {
	let todos;
	if (localStorage.getItem('todos') === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todos'));
	}
	const todoInnerText = todo.children[0].innerText;
	let todoIndex;
	let temp = 0;
	todos.forEach((todo) => {
		if (todo.text === todoInnerText) {
			todoIndex = temp;
			return;
		}
		temp += 1;
	});
	todos.splice(todoIndex, 1);
	localStorage.setItem('todos', JSON.stringify(todos));
};
