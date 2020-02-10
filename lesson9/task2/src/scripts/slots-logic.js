import { arrayOfDates } from './navigation';
import { arrOfEvents, savetoLocalStorage, getFromLocalStorage } from './storage';

const eventPlace = document.querySelectorAll('.day');
const eventDay = document.querySelectorAll('.day-number');

export function displayEvent(starttime, endTime, name, descriprion, id, color) {
  if (arrayOfDates[0].getMonth() === starttime.getMonth()) {
    const diff = ((endTime - starttime) / 1000 / 60);
    for (let i = 0; i < 7; i++) {
      const timeParts = (`${starttime}`).split(' ')[4].split(':');

      if (eventDay[i].innerHTML === endTime.getDate()) {
        // create long event
        if (starttime.getDate() !== endTime.getDate()) {
          const activeEventShort = document.createElement('div');
          const activeEventLong = document.createElement('div');
          activeEventShort.classList.add('active_event');
          activeEventLong.classList.add('active_event');

          const marginTopOfShortEvent = +timeParts[0] * 60 + +timeParts[1];
          activeEventShort.style.marginTop = `${marginTopOfShortEvent + 100}px`;
          activeEventShort.style.height = `${1440 - marginTopOfShortEvent}px`;

          const heightOfLongEvent = endTime;
          activeEventLong.style.marginTop = '100px';
          activeEventLong.style.height = `${1440 - (1440 - (`${endTime}`).split(' ')[4].split(':')[0] * 60
                        + +((`${endTime}`).split(' ')[4].split(':')[1]))}px`;

          eventPlace[i - 1].append(activeEventShort);
          eventPlace[i].append(activeEventLong);

          activeEventLong.innerHTML += `${name}<br>`;
          activeEventLong.innerHTML += `${(`${starttime}`).split(' ')[4]} - ${(`${endTime}`).split(' ')[4]}<br>`;
          activeEventLong.innerHTML += `${descriprion}`;

          activeEventShort.innerHTML += `${name}<br>`;
          activeEventShort.innerHTML += `${(`${starttime}`).split(' ')[4]} - ${(`${endTime}`).split(' ')[4]}<br>`;
          activeEventShort.innerHTML += `${descriprion}`;


          activeEventShort.setAttribute('data-id', id);
          activeEventShort.style.backgroundColor = color;
          activeEventLong.setAttribute('data-id', id);
          activeEventLong.style.backgroundColor = color;
        } else {
          // create short event
          const margin = +timeParts[0] * 60 + +timeParts[1];

          const activeEvent = document.createElement('div');
          eventPlace[i].append(activeEvent);
          activeEvent.classList.add('active_event');
          activeEvent.style.height = `${diff}px`;

          activeEvent.style.marginTop = `${margin + 100}px`;
          activeEvent.innerHTML += `${name}<br>`;
          activeEvent.innerHTML += `${(`${starttime}`).split(' ')[4]} - ${(`${endTime}`).split(' ')[4]}<br>`;
          activeEvent.innerHTML += `${descriprion}`;


          activeEvent.setAttribute('data-id', id);
          activeEvent.style.backgroundColor = color;
        }
      }
    }
  }
}

export function renderEvents() {
  getFromLocalStorage();
  for (let i = 0; i < arrOfEvents.length; i++) {
    if (typeof (arrOfEvents[i].startDate) !== 'object') {
      arrOfEvents[i].startDate = new Date(arrOfEvents[i].startDate);
      arrOfEvents[i].endDate = new Date(arrOfEvents[i].endDate);
    }
    displayEvent(arrOfEvents[i].startDate, arrOfEvents[i].endDate, arrOfEvents[i].name,
      arrOfEvents[i].description, arrOfEvents[i].id, arrOfEvents[i].color);
  }
}
