import { arrOfEvents, savetoLocalStorage } from './storage';
import { renderDates } from './navigation';


export function deleteButtonOnclick(obj) {
  const deleteButton = document.querySelector('.delete-event');
  deleteButton.addEventListener('click', deleteEvent);

  function deleteEvent() {
    event.preventDefault();
    for (let i = 0; i < arrOfEvents.length; i++) {
      if (obj.id === arrOfEvents[i].id) {
        arrOfEvents.splice(i, 1);
        savetoLocalStorage();
        const popup = document.querySelector('.popup');
        popup.classList.remove('popup-switch');
        renderDates();
        return;
      }
    }
  }
}
