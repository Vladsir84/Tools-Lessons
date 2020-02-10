import { arrOfEvents, savetoLocalStorage } from './storage';
import { renderEvents } from './slots-logic';
import { activeEventOnclick } from './edit-event';
import { renderDates } from './navigation';
import { calendarRendering } from './calendar-visualization';
import { validate } from './validate';

const popupForm = document.querySelector('.popup__form');
export const saveButton = document.querySelector('.submit-button');

export function saveEvent() {
  event.preventDefault();
  const formData = [...new FormData(popupForm)];

  const name = formData[0][1];
  const color = formData[1][1];
  const startDate = `${formData[2][1]}T${formData[3][1]}`;
  const endDate = `${formData[5][1]}T${formData[4][1]}`;
  const description = formData[6][1];


  if (validate(new Date(startDate), new Date(endDate)) === false) {
    return;
  }

  createNewEvent(name, color, startDate, endDate, description);
  savetoLocalStorage();
  renderEvents(arrOfEvents);

  // const defaultBackgroundColor = document.querySelector('.event__color-picker');
  // defaultBackgroundColor.value = '#4183f1';

  const popup = document.querySelector('.popup');
  popup.classList.remove('popup-switch');

  renderDates();
  activeEventOnclick();
  calendarRendering();
}

function createNewEvent(name, color, startDate, endDate, description) {
  const newEvent = {
    id: Math.random() * 1000,
    name,
    color,
    startDate: new Date(startDate),
    endDate: new Date(endDate),
    description,
  };
  if (!isNaN(newEvent.startDate.getTime()) && !isNaN(newEvent.endDate.getTime())) {
    arrOfEvents.push(newEvent);
  }
}

saveButton.addEventListener('click', saveEvent);
