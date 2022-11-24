const inputAdd = document.querySelector('input.add');
const inputSearch = document.querySelector('input.search');
const ul = document.querySelector('ul');
const liElements = document.getElementsByClassName('task');
const form = document.querySelector('form');
const taskNumber = document.querySelector('h1 span');

const toDoList = [];

//remove task

const removeTask = (e) => {
  e.target.parentNode.remove();
  //   e.target.parentNode.style.textDecoration = 'line-through';
  //   e.target.remove();
  const index = e.target.parentNode.dataset.key;
  toDoList.splice(index, 1);
  taskNumber.textContent = liElements.length;
 renderList()
};

//add task

const addTask = (e) => {
  e.preventDefault();
  const titleTask = inputAdd.value;

  if (titleTask === '') return;
  const newTask = document.createElement('li');
  newTask.className = 'task';
  newTask.innerHTML = titleTask + '<button>X</button>';
  toDoList.push(newTask);
  renderList();
  ul.appendChild(newTask);
  inputAdd.value = '';

  taskNumber.textContent = liElements.length;

  //remove task
  newTask.querySelector('button').addEventListener('click', removeTask);
};

const renderList = () => {
    ul.textContent = '';
    toDoList.forEach((toDoElement, key) => {
      toDoElement.dataset.key = key;
      ul.appendChild(toDoElement);
    });
}
//search task

const searchTask = (e) => {
  const searchText = e.target.value.toLowerCase();
  let tasks = [...liElements];
  tasks = tasks.filter((task) =>
    task.textContent.toLowerCase().includes(searchText)
  );
//   ul.textContent = '';
// tasks.forEach((task) => ul.appendChild(task));
};

form.addEventListener('submit', addTask);
inputSearch.addEventListener('input', searchTask);
