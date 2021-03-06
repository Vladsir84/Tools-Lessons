import { arrOfEvents, savetoLocalStorage } from './storage';
import { deleteButtonOnclick } from './delete-event';
import { renderDates } from './navigation';

export function activeEventOnclick() {
  const activeEvents = document.querySelectorAll('.active_event');
  for (let i = 0; i < activeEvents.length; i++) {
    activeEvents[i].addEventListener('click', () => {
      for (let j = 0; j < arrOfEvents.length; j++) {
        if (event.target.dataset.id === arrOfEvents[j].id) {
          displayCurrentEvent(arrOfEvents[j]);
          deleteButtonOnclick(arrOfEvents[j]);

          // edit event
          const editButton = document.querySelector('.submit-button ');
          editButton.addEventListener('click', editEvent.bind(editButton, arrOfEvents[j]));
        }
      }
    });
  }
}

function displayCurrentEvent(editedEvent) {
  const popup = document.querySelector('.popup');
  popup.classList.add('popup-switch');

  const name = document.querySelector('.input__name');
  const color = document.querySelector('.event__color-picker');
  const startDate = document.querySelector('.start-date');
  const startTime = document.querySelector('.start-time');
  const endTime = document.querySelector('.end-time');
  const endDate = document.querySelector('.end-date');
  const description = document.querySelector('.description-input ');

  // вносим title в popup
  name.value = `${editedEvent.name}`;

  color.value = editedEvent.color;

  // вносим дату в popup (input type="date")
  const startMonth = (editedEvent.startDate.getMonth() + 1 < 9)
    ? `0${`${editedEvent.startDate.getMonth() + 1}`}` : `${editedEvent.startDate.getMonth() + 1}`;
  const startYear = (`${editedEvent.startDate}`).split(' ')[3];
  const startDay = (`${editedEvent.startDate}`).split(' ')[2];
  startDate.value = `${startYear}-${startMonth}-${startDay}`;

  // вносим время в popup
  startTime.value = (`${editedEvent.startDate}`).split(' ')[4].split(':').splice(0, 2).join(':');
  endTime.value = (`${editedEvent.endDate}`).split(' ')[4].split(':').splice(0, 2).join(':');

  // вносим дату в popup (input type="date")
  const endMonth = (editedEvent.endDate.getMonth() + 1 < 9)
    ? `0${`${editedEvent.endDate.getMonth() + 1}`}` : `${editedEvent.endDate.getMonth() + 1}`;
  const endYear = (`${editedEvent.endDate}`).split(' ')[3];
  const endDay = (`${editedEvent.endDate}`).split(' ')[2];
  endDate.value = `${endYear}-${endMonth}-${endDay}`;

  // вносим description в popup
  description.value = editedEvent.description;
}

function editEvent(obj) {
  for (let i = 0; i < arrOfEvents.length; i++) {
    if (obj.id === arrOfEvents[i].id) {
      arrOfEvents.splice(i, 1);
      savetoLocalStorage();
      renderDates();
    }
  }

  const editButton = document.querySelector('.submit-button ');
  editButton.removeEventListener('click', editEvent);
  const popup = document.querySelector('.popup');
  popup.classList.remove('popup-switch');
}
