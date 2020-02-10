import { calendarRendering } from './calendar-visualization';
import { arrOfEvents, getFromLocalStorage } from './storage';
import { renderEvents } from './slots-logic';
import { redLine } from './red-line';
import { activeEventOnclick } from './edit-event';

const dayNumbers = document.querySelectorAll('.day-number');
const dates = document.querySelector('.dates');

export let arrayOfDates = [];

export function createDates() {
  const currentDayOfWeek = (new Date()).getDay();

  for (let i = 0; i < 7; i++) {
    if (i < currentDayOfWeek) {
      const currentDate = new Date();
      const day = currentDate.getDate() - (i + 1);
      const previosDate = currentDate.setDate(day);
      arrayOfDates.unshift(new Date(previosDate));
    }
    if (currentDayOfWeek === i) {
      arrayOfDates.push(new Date());
    }
    if (i > currentDayOfWeek) {
      const currentDate = new Date();
      const day = currentDate.getDate() + (i - currentDate.getDay());
      const previosDate = currentDate.setDate(day);
      arrayOfDates.push(new Date(previosDate));
    }
  }
}

export function renderDates() {
  for (let i = 0; i < 7; i++) {
    const content = (`${arrayOfDates[i]}`).split(' ')[2];
    dayNumbers[i].innerHTML = content;
    if ((`${arrayOfDates[i]}`).split(' ')[2] === (`${new Date()}`).split(' ')[2]) {
      dayNumbers[i].classList.add('current-day');
    } else {
      dayNumbers[i].classList.remove('current-day');
    }
  }
  showCurrentMonthAndYear();
  const clear = document.querySelectorAll('.active_event');
  for (let i = 0; i < clear.length; i++) clear[i].remove();
  renderEvents(arrOfEvents);
  activeEventOnclick();
  redLine();
}

export function showCurrentMonthAndYear() {
  const arrOfMonth = [];
  const arrOfYears = [];
  const resultMonth = [];
  const resultYears = [];

  for (let i = 0; i < arrayOfDates.length; i++) {
    arrOfMonth.push((`${arrayOfDates[i]}`).split(' ')[1]);
    arrOfYears.push((`${arrayOfDates[i]}`).split(' ')[3]);
  }

  for (const str of arrOfMonth) {
    if (!resultMonth.includes(str)) resultMonth.push(str);
  }

  for (const str of arrOfYears) {
    if (!resultYears.includes(str)) resultYears.push(str);
  }

  if (resultYears.length === 1) {
    dates.innerHTML = `${resultMonth[0]} ${resultYears[0]}`;
  } else {
    dates.innerHTML = `${resultMonth[0]} ${resultYears[0]} - ${resultMonth[1]} ${resultYears[1]}`;
  }
}

createDates();
renderDates();

const arrowButtonNext = document.querySelector('.arrow-button__next');
const arrowButtonPrev = document.querySelector('.arrow-button__prev');

export function renderNextWeek() {
  for (let i = 0; i < 7; i++) {
    let nextDate = arrayOfDates[i].getDate() + 7;
    nextDate = new Date(arrayOfDates[i]).setDate(nextDate);
    arrayOfDates[i] = new Date(nextDate);
  }
  renderDates();
  calendarRendering();

  const redLineElement = document.querySelector('.redLine');
  if (redLineElement !== null) redLineElement.remove('div');
  redLine();
}

export function renderPreviousWeek() {
  for (let i = 0; i < 7; i++) {
    let nextDate = arrayOfDates[i].getDate() - 7;
    nextDate = new Date(arrayOfDates[i]).setDate(nextDate);
    arrayOfDates[i] = new Date(nextDate);
  }
  renderDates();
  calendarRendering();

  const redLineElement = document.querySelector('.redLine');
  if (redLineElement !== null) redLineElement.remove('div');
  redLine();
}

arrowButtonPrev.addEventListener('click', renderPreviousWeek);
arrowButtonNext.addEventListener('click', renderNextWeek);

const todayButton = document.querySelector('.today-button');

export function todayButtonFunction() {
  arrayOfDates = [];
  createDates();
  renderDates();
}

todayButton.addEventListener('click', todayButtonFunction);
