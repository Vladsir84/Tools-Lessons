import "core-js/modules/es.array.find";
import "core-js/modules/es.object.assign";
import { tasks } from './storage.js';
import { renderListElements } from './renderer.js';
var todoList = document.querySelector('.list');
export var addTask = function addTask(element) {
  var Checkbox = element.target.classList.contains('list__item-checkbox');

  if (!Checkbox) {
    return;
  }

  var taskData = tasks.find(function (task) {
    return task.id == element.target.dataset.id;
  });
  Object.assign(taskData, {
    done: element.target.checked
  });
  todoList.innerHTML = '';
  renderListElements(tasks);
  localStorage.setItem('tasksList', JSON.stringify(tasks));
};
todoList.addEventListener('click', addTask);