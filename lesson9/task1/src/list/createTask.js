import { tasks } from './storage';
import { renderListElements } from './renderer';

const listItem = document.querySelector('.list');
const createTaskBtn = document.querySelector('.create-task-btn');


export function createTask() {
  const taskInput = document.querySelector('.task-input');

  tasks.push({ text: taskInput.value, done: false, id: Math.floor(Math.random() * 1000) });
  localStorage.setItem('tasksList', JSON.stringify(tasks));

  listItem.innerHTML = '';
  taskInput.value = '';
  renderListElements(tasks);
}

createTaskBtn.addEventListener('click', createTask);
