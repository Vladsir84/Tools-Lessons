import "core-js/modules/es.array.splice";
import { arrOfEvents, savetoLocalStorage } from './storage.js';
import { renderDates } from './navigation.js';
export function deleteButtonOnclick(obj) {
  var deleteButton = document.querySelector('.delete-event');
  deleteButton.addEventListener('click', deleteEvent);

  function deleteEvent() {
    event.preventDefault();

    for (var i = 0; i < arrOfEvents.length; i++) {
      if (obj.id == arrOfEvents[i].id) {
        arrOfEvents.splice(i, 1);
        savetoLocalStorage();
        var popup = document.querySelector(".popup");
        popup.classList.remove('popup-switch');
        renderDates();
        return;
      }
    }
  }
}