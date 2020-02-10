import { tasks } from './storage';
import { renderListElements } from './renderer';

const todoList = document.querySelector('.list');

export const addTask = (element) => {
  const Checkbox = element.target.classList.contains('list__item-checkbox');
  if (!Checkbox) {
    return;
  }
  const taskData = tasks.find((task) => task.id === element.target.dataset.id);
  Object.assign(taskData, { done: element.target.checked });
  todoList.innerHTML = '';
  renderListElements(tasks);
  localStorage.setItem('tasksList', JSON.stringify(tasks));
};

todoList.addEventListener('click', addTask);
