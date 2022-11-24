const inputAdd = document.querySelector('input.add');
const inputSearch = document.querySelector('input.search');
const ul = document.querySelector('ul');
const liElements = document.querySelectorAll('li');
const form = document.querySelector('form');
const taskNumber = document.querySelector('h1 span');

//remove task

const removeItem = (e) => {
  // e.target.parentNode.remove()
  e.target.parentNode.style.textDecoration = 'line-through';
  e.target.remove();
};

//add task

const addTask = (e) => {
  e.preventDefault();
  const titleTask = inputAdd.value;

  if (titleTask === '') return;
  const newTask = document.createElement('li');
  newTask.className = 'task';
  newTask.innerHTML = titleTask + '<button>X</button>';
  ul.appendChild(newTask);
  inputAdd.value = '';

  //remove task
  document
    .querySelectorAll('li button')
    .forEach((item) => item.addEventListener('click', removeItem));
};

//search task

const searchTask = (e) => {
  const searchText = e.target.value.toLowerCase();
  let tasks = [...liElements];
  tasks = tasks.filter((task) =>
    task.textContent.toLowerCase().includes(searchText)
  );
  ul.textContent = '';
  tasks.forEach((task) => ul.appendChild(task));
};

form.addEventListener('submit', addTask);
inputSearch.addEventListener('input', searchTask);
