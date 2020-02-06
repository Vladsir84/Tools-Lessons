import { renderListElements } from './renderer.js';
export var tasks = localStorage.getItem('tasksList') ? JSON.parse(localStorage.getItem('tasksList')) : [];
export function onStorageChange(elem) {
  if (elem.key == 'tasksList') {
    tasks = localStorage.getItem('tasksList') ? JSON.parse(localStorage.getItem('tasksList')) : [];
    renderListElements(tasks);
  }
}
window.addEventListener('storage', onStorageChange);
export var onDocumentLoaded = function onDocumentLoaded() {
  renderListElements(tasks);
};
document.addEventListener('DOMContentLoaded', onDocumentLoaded);