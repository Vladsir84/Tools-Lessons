import { tasks } from './storage.js';
import { renderListElements } from './renderer.js';
var listItem = document.querySelector('.list');
var createTaskBtn = document.querySelector('.create-task-btn');
createTaskBtn.addEventListener('click', createTask);
export function createTask() {
  var task_input = document.querySelector('.task-input');
  tasks.push({
    text: task_input.value,
    done: false,
    id: Math.floor(Math.random() * 1000)
  });
  localStorage.setItem('tasksList', JSON.stringify(tasks));
  listItem.innerHTML = '';
  task_input.value = '';
  renderListElements(tasks);
}